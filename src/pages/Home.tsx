import { Rocket, Layers, Box, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <section id="home" className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full min-h-[70vh]">
        {/* Left Content */}
        <div className="flex flex-col gap-8 z-10 text-center lg:text-left items-center lg:items-start">
          <div className="inline-flex items-center gap-3 glass-panel px-4 py-2 rounded-full shadow-sm dark:bg-white/5">
            <CheckCircle2 size={16} className="text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#9a4c73] dark:text-[#d7a1ba]">President, Manthan Club</span>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter">
              Hi, I'm <span className="text-primary italic">Tanishqa.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#9a4c73] dark:text-[#d7a1ba] max-w-xl font-light leading-relaxed">
              Building <span className="font-bold text-[#1b0d14] dark:text-white">Decentralized Apps</span> & Designing <span className="font-bold text-[#1b0d14] dark:text-white">Intuitive Interfaces</span> through a lens of interactivity.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
            <a href="#projects" className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-primary/20 dark:shadow-none hover:scale-105 transition-transform">
              <span>Explore My Universe</span>
              <Rocket size={20} />
            </a>
            <a href="#projects" className="glass-panel px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/60 dark:hover:bg-white/10 dark:bg-white/5 transition-colors">
              View Projects
            </a>
          </div>

          <div className="flex items-center gap-6 mt-8 opacity-60">
            <div className="flex flex-col items-center gap-1">
              <Box size={24} />
              <span className="text-[10px] font-bold uppercase">React</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Layers size={24} />
              <span className="text-[10px] font-bold uppercase">Solidity</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Box size={24} />
              <span className="text-[10px] font-bold uppercase">Three.js</span>
            </div>
          </div>
        </div>

        {/* Right Content: 3D Interactive Mock */}
        <div className="relative flex justify-center items-center w-full aspect-square max-w-[600px] mx-auto group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 w-full h-full glass-panel rounded-[2.5rem] overflow-hidden flex items-center justify-center p-8 shadow-2xl border-white/50 dark:border-white/10 dark:bg-white/5">
            <div className="absolute top-4 left-6 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="text-[10px] ml-4 text-[#9a4c73] dark:text-[#d7a1ba] font-mono">three_js_renderer.exe</span>
            </div>

            <div id="avatar-canvas" className="w-full h-full bg-cover bg-center rounded-2xl transform group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url('${import.meta.env.VITE_AVATAR_URL || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop'}')` }}>
              {/* 3D Model will be injected here */}
            </div>

            <div className="absolute bottom-8 right-8 glass-panel px-4 py-2 rounded-lg flex items-center gap-2 text-[10px] font-bold">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              CURSOR TRACKING ACTIVE
            </div>
          </div>

          <div className="absolute -top-6 -right-6 glass-panel p-4 rounded-2xl shadow-xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
            <Layers className="text-primary" size={32} />
          </div>
          <div className="absolute -bottom-4 -left-8 glass-panel p-4 rounded-2xl shadow-xl -rotate-12 group-hover:rotate-0 transition-transform duration-500">
            <Box className="text-primary" size={32} />
          </div>
        </div>
      </div>

      {/* Featured Achievement Section */}
      <div className="w-full mt-20">
        <div className="glass-panel p-10 rounded-[2rem] border-white/40 dark:border-white/10 dark:bg-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h3 className="text-3xl font-bold">Leading Innovation at Manthan Club</h3>
            <p className="text-[#9a4c73] dark:text-[#d7a1ba] max-w-2xl text-lg">
              As President, I foster a community of students who want to empower themselves and others through education on various social causes, organizing hackathons, workshops, empathizing and creatin awareness.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-black text-primary">30+</span>
              <span className="text-xs font-bold uppercase tracking-wider opacity-60">Members</span>
            </div>
            <div className="w-px h-12 bg-primary/20"></div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-black text-primary">1</span>
              <span className="text-xs font-bold uppercase tracking-wider opacity-60">Outreach Program</span>
            </div>
            <div className="w-px h-12 bg-primary/20"></div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-black text-primary">10+</span>
              <span className="text-xs font-bold uppercase tracking-wider opacity-60">Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
