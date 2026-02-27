import { Database, PenTool, Code2, Box, Link as LinkIcon } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="flex flex-col w-full pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase w-fit">
            <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
            THE STORY
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
            Bridging <span className="text-primary">Logic</span> &<br />
            <span className="text-primary italic">Creativity</span>
          </h1>

          <div className="text-lg text-[#9a4c73] space-y-6">
            <p>
              I am a developer who believes that robust backends and beautiful interfaces are two sides of the same coin. My journey began with the rigorous structures of Java 11 and evolved into the decentralized world of Solidity.
            </p>
            <p>
              However, logic alone doesn't define an experience. I leverage React and Three.js to breathe life into data, creating immersive digital environments that are as performant as they are visually striking.
            </p>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-[2rem] grid grid-cols-2 gap-4 relative dark:bg-white/5 dark:border-white/10">
          <div className="bg-white dark:bg-[#361a2a] rounded-2xl p-8 flex flex-col items-center justify-center gap-4 shadow-sm aspect-square">
            <Database size={40} className="text-primary" />
          </div>
          <div className="bg-white dark:bg-[#361a2a] rounded-2xl p-8 flex flex-col items-center justify-center gap-4 shadow-sm aspect-square row-span-2">
            <PenTool size={40} className="text-primary" />
            <span className="text-xs font-bold tracking-widest uppercase mt-4">DESIGN</span>
          </div>
          <div className="bg-primary rounded-2xl p-8 flex flex-col items-center justify-center gap-4 shadow-sm aspect-square text-white">
            <Box size={40} />
            <span className="text-xs font-bold tracking-widest uppercase mt-4">LOGIC</span>
          </div>
          <div className="bg-primary/10 dark:bg-[#361a2a] rounded-2xl p-8 flex flex-col items-center justify-center gap-4 shadow-sm aspect-square">
            <Box size={40} className="text-primary" />
          </div>
        </div>
      </div>

      {/* Education Journey */}
      {/* Education Journey */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          Education Journey
          <div className="h-px bg-black/10 dark:bg-white/10 flex-1"></div>
        </h2>

        <div className="relative pl-6 border-l-2 border-primary/20 space-y-16">

          {/* B.Tech */}
          <div className="relative">
            {/* Timeline Dot */}
            <div className="absolute w-4 h-4 rounded-full bg-primary -left-[25px] -translate-x-1/2 top-8"></div>

            <div className="glass-panel p-8 rounded-2xl max-w-2xl dark:bg-white/5 dark:border-white/10">
              <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
                2023 — 2027
              </span>

              <h3 className="text-2xl font-bold mb-1">
                B.Tech in Computer Science
              </h3>

              <p className="text-[#9a4c73] dark:text-[#d7a1ba] mb-1">
                VIT-AP University
              </p>

              <p className="text-sm font-semibold mb-4">
                CGPA: 8.6
              </p>

              <p className="text-sm text-[#9a4c73] dark:text-[#d7a1ba] leading-relaxed">
                Focusing on software engineering fundamentals, distributed systems,
                blockchain systems, and modern web architectures. Actively
                participating in leadership roles and research-driven technical
                initiatives.
              </p>
            </div>
          </div>

          {/* Intermediate */}
          <div className="relative">
            {/* Timeline Dot */}
            <div className="absolute w-4 h-4 rounded-full bg-primary -left-[25px] -translate-x-1/2 top-8"></div>

            <div className="glass-panel p-8 rounded-2xl max-w-2xl dark:bg-white/5 dark:border-white/10">
              <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
                2020 — 2022
              </span>

              <h3 className="text-2xl font-bold mb-1">
                Intermediate Education (Class 11 & 12)
              </h3>

              <p className="text-[#9a4c73] dark:text-[#d7a1ba] mb-1">
                9 Education
              </p>

              <p className="text-sm font-semibold mb-4">
                Percentage: 89.2%
              </p>

              <p className="text-sm text-[#9a4c73] dark:text-[#d7a1ba] leading-relaxed">
                Built strong foundations in mathematics and analytical reasoning,
                shaping my structured problem-solving approach in engineering.
              </p>
            </div>
          </div>

          {/* Schooling */}
          <div className="relative">
            {/* Timeline Dot */}
            <div className="absolute w-4 h-4 rounded-full bg-primary -left-[25px] -translate-x-1/2 top-8"></div>

            <div className="glass-panel p-8 rounded-2xl max-w-2xl dark:bg-white/5 dark:border-white/10">
              <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
                — 2020
              </span>

              <h3 className="text-2xl font-bold mb-1">
                Schooling (Till Class 10)
              </h3>

              <p className="text-[#9a4c73] dark:text-[#d7a1ba] mb-1">
                Slate The School
              </p>

              <p className="text-sm font-semibold mb-4">
                GPA: 10.0
              </p>

              <p className="text-sm text-[#9a4c73] dark:text-[#d7a1ba] leading-relaxed">
                Achieved academic excellence with a perfect GPA, establishing early
                discipline and strong conceptual clarity.
              </p>
            </div>
          </div>

        </div>
      </div>
      {/* Technical Arsenal */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-12">Technical Arsenal</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Core */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold tracking-widest uppercase text-primary flex items-center gap-2 mb-4">
              <Code2 size={16} /> THE CORE
            </h3>
            <div className="bg-white dark:bg-[#361a2a] rounded-xl p-4 flex items-center gap-4 shadow-sm border border-black/5 dark:border-white/10">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">J11</div>
              <div>
                <h4 className="font-bold">Java 11</h4>
                <p className="text-xs text-[#9a4c73] dark:text-[#d7a1ba]">Robust Backend Systems</p>
              </div>
            </div>
            <div className="bg-white dark:bg-[#361a2a] rounded-xl p-4 flex items-center gap-4 shadow-sm border border-black/5 dark:border-white/10">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                <LinkIcon size={20} />
              </div>
              <div>
                <h4 className="font-bold">Solidity</h4>
                <p className="text-xs text-[#9a4c73] dark:text-[#d7a1ba]">Smart Contract Dev</p>
              </div>
            </div>
            <div className="bg-white dark:bg-[#361a2a] rounded-xl p-4 flex items-center gap-4 shadow-sm border border-black/5 dark:border-white/10">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">JS</div>
              <div>
                <h4 className="font-bold">JavaScript</h4>
                <p className="text-xs text-[#9a4c73] dark:text-[#d7a1ba]">Logic & Functionality</p>
              </div>
            </div>
          </div>

          {/* Modern Web */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold tracking-widest uppercase text-primary flex items-center gap-2 mb-4">
              <Box size={16} /> MODERN WEB
            </h3>
            <div className="bg-white dark:bg-[#361a2a] rounded-xl p-4 flex items-center gap-4 shadow-sm border border-black/5 dark:border-white/10">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">Re</div>
              <div>
                <h4 className="font-bold">React</h4>
                <p className="text-xs text-[#9a4c73] dark:text-[#d7a1ba]">Dynamic Interfaces</p>
              </div>
            </div>
            <div className="bg-white dark:bg-[#361a2a] rounded-xl p-4 flex items-center gap-4 shadow-sm border border-black/5 dark:border-white/10">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">3D</div>
              <div>
                <h4 className="font-bold">Three.js</h4>
                <p className="text-xs text-[#9a4c73] dark:text-[#d7a1ba]">3D Web Experiences</p>
              </div>
            </div>
            <div className="bg-white dark:bg-[#361a2a] rounded-xl p-4 flex items-center gap-4 shadow-sm border border-black/5 dark:border-white/10">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">{'</>'}</div>
              <div>
                <h4 className="font-bold">HTML5/CSS3</h4>
                <p className="text-xs text-[#9a4c73] dark:text-[#d7a1ba]">Responsive Foundations</p>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold tracking-widest uppercase text-primary flex items-center gap-2 mb-4">
              <PenTool size={16} /> TOOLS
            </h3>
            <div className="bg-white dark:bg-[#361a2a] rounded-xl p-4 flex items-center gap-4 shadow-sm border border-black/5 dark:border-white/10">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">H</div>
              <div>
                <h4 className="font-bold">Hardhat</h4>
                <p className="text-xs text-[#9a4c73] dark:text-[#d7a1ba]">Ethereum Dev Env</p>
              </div>
            </div>
            <div className="bg-white dark:bg-[#361a2a] rounded-xl p-4 flex items-center gap-4 shadow-sm border border-black/5 dark:border-white/10">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">F</div>
              <div>
                <h4 className="font-bold">Figma</h4>
                <p className="text-xs text-[#9a4c73] dark:text-[#d7a1ba]">UI/UX Prototyping</p>
              </div>
            </div>
            <div className="bg-transparent border border-dashed border-black/20 dark:border-white/20 rounded-xl p-4 flex items-center justify-center gap-2 shadow-sm h-[82px] hover:bg-white/5 transition-colors">
              <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">+</span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#9a4c73] dark:text-[#d7a1ba]">LEARNING DAILY</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary rounded-[2rem] p-12 md:p-20 text-center text-white flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-6xl font-black mb-6">Ready to build something<br />extraordinary?</h2>
        <p className="text-white/80 text-lg max-w-2xl mb-10">
          Whether it's a secure blockchain protocol or a high-fidelity creative frontend, I'm ready to bring your vision to life.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#contact" className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
            Get in Touch
          </a>
          <a href="#projects" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
