import { Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto px-6 py-12 border-t-0 w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-16 gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">Let's Connect</h2>
          <p className="text-[#9a4c73] dark:text-[#d7a1ba] text-lg font-medium">Open for collaborations and new opportunities.</p>
        </div>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/tanishqarana/" className="w-12 h-12 border-2 border-black dark:border-white flex items-center justify-center hover:bg-primary dark:hover:bg-primary hover:border-primary hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] bg-white dark:bg-transparent dark:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/tanishqarana" className="w-12 h-12 border-2 border-black dark:border-white flex items-center justify-center hover:bg-primary dark:hover:bg-primary hover:border-primary hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] bg-white dark:bg-transparent dark:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
            <Github size={20} />
          </a>
          <a href="mailto:tanishqa.ranaa@gmail.com" className="w-12 h-12 border-2 border-black dark:border-white flex items-center justify-center hover:bg-primary dark:hover:bg-primary hover:border-primary hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] bg-white dark:bg-transparent dark:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="border-t border-black/10 dark:border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 dark:text-gray-300">
          © 2026 Tanishqa. All Rights Reserved. <span className="hidden md:inline-block ml-4">Designed & Built by Tanishqa</span>
        </span>
        <div className="flex gap-8">
          <a href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
