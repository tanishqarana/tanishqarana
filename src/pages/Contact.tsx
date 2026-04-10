import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Send, Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '../supabaseClient';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('contact_submissions').insert([
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
    ]);

    if (error) {
      console.error('Supabase insert error:', error);
      setStatus('error');
      setErrorMsg(error.message);
    } else {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="flex flex-col items-center justify-center w-full min-h-[70vh] relative pt-16">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>

      <div className="w-full max-w-3xl text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
          Let's <span className="text-primary">Connect</span>
        </h1>
        <p className="text-lg md:text-xl text-[#9a4c73] dark:text-[#d7a1ba] max-w-xl mx-auto">
          Have a project in mind or just want to say hi? Drop a message below and I'll get back to you soon.
        </p>
      </div>

      <div className="w-full max-w-2xl glass-panel dark:bg-white/5 dark:border-white/10 rounded-xl p-8 md:p-12 shadow-2xl shadow-primary/5">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-primary">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full rounded-lg border border-primary/20 bg-white/50 dark:bg-black/20 p-4 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-black/30 dark:placeholder:text-white/30"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-primary">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full rounded-lg border border-primary/20 bg-white/50 dark:bg-black/20 p-4 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-black/30 dark:placeholder:text-white/30"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest text-primary">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Project Inquiry"
              className="w-full rounded-lg border border-primary/20 bg-white/50 dark:bg-black/20 p-4 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-black/30 dark:placeholder:text-white/30"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest text-primary">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project..."
              rows={5}
              className="w-full rounded-lg border border-primary/20 bg-white/50 dark:bg-black/20 p-4 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-black/30 dark:placeholder:text-white/30"
            ></textarea>
          </div>

          {status === 'success' && (
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <CheckCircle size={20} />
              <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <AlertCircle size={20} />
              <span className="font-medium">Failed to send: {errorMsg}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-4 bg-primary text-white rounded-lg font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
            <Mail size={20} />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Email Me</p>
            <p className="font-medium dark:text-gray-300">tanishqa.ranaa@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
            <MapPin size={20} />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Location</p>
            <p className="font-medium dark:text-gray-300">Hyderabad, Telangana</p>
          </div>
        </div>
      </div>
    </section>
  );
}
