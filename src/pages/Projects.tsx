import { ArrowRight, X, Github, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

type Category = 'Leadership' | 'dApps' | 'Full-stack';

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string[];
  tags: string[];
  image: string;
  linkText: string;
  category: Category;
  client?: string;
  duration?: string;
  role?: string;
  githubUrl?: string;
  websiteUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'CHARITY DONATION TRACKER',
    description: 'A transparent Ethereum-based donation platform ensuring traceable contributions and restricted withdrawals.',
    longDescription: [
      'The Charity Donation Tracker enables users to donate ETH to verified causes while ensuring full transparency of fund flow. Each donation is logged on-chain, and individual contributor balances are publicly verifiable.',
      'The contract architecture uses mappings to track donor balances and restricts withdrawals exclusively to a predefined verified charity address. Deployment was performed on the Sepolia Testnet using Hardhat, while the frontend integrates MetaMask for transaction signing.',
      'The system enforces accountability through immutable transaction records. It highlights how smart contracts can eliminate misuse of funds by removing discretionary control from intermediaries.'
    ],
    tags: ['SOLIDITY', 'HARDHAT', 'SEPOLIA'],
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop',
    linkText: 'VIEW DETAILS',
    role: 'Full-stack Web3 Developer',
    duration: '4 Weeks',
    category: 'dApps',
    githubUrl: 'https://github.com/tanishqarana/Charity-Tracker',
    websiteUrl: 'https://charity-tracker-ten.vercel.app'
  },
  {
    id: 2,
    title: 'PERSONAL PORTFOLIO V1',
    description: 'My first venture into full-stack development, focusing on responsive design and subtle animations.',
    longDescription: [
      'This was my first attempt at building a complete web application from scratch. The goal was to create a digital home for my projects that reflected my design sensibilities.',
      'I focused heavily on performance and responsive design, ensuring the site looked great on both mobile and desktop. I used React for component architecture and Tailwind CSS for rapid, maintainable styling.',
      'While I have since upgraded my portfolio (to the one you are looking at now!), V1 remains a proud milestone in my journey as a developer.'
    ],
    tags: ['REACT', 'TAILWIND'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop',
    linkText: 'VIEW ARCHIVE',
    category: 'Full-stack',
    role: 'Frontend Developer',
    duration: '3 Weeks',
    githubUrl: 'https://github.com/tanishqa/portfolio-v1',
    websiteUrl: 'https://tanishqa-v1.vercel.app/'
  },
  {
    id: 3,
    title: 'MEN AND THE MENSTRUAL MYSTERY',
    description: 'An immersive empathy-driven campus event using TENS-based period pain simulations to foster menstrual awareness among men.',
    longDescription: [
      'Men and the Menstrual Mystery was an open university event designed to bridge the empathy gap around menstruation. Using a TENS (Transcutaneous Electrical Nerve Stimulation) machine, we simulated period-like cramps for male participants while engaging them in interactive trivia and open conversations about menstrual health.',
      'I was actively involved throughout the event lifecycle — from on-ground operations to moderating discussions and ensuring smooth execution of the simulation experience. We created a psychologically safe environment where participants could openly express discomfort, curiosity, and reflection. Dark chocolate was distributed symbolically, reinforcing coping mechanisms often associated with menstrual care.',
      'The outcome was deeply impactful. Participants experienced varying levels of simulated pain, highlighting how menstrual pain differs across individuals. Many men expressed a transformed perspective, acknowledging the physical and emotional difficulty women endure during their cycles. The event didn’t just inform — it shifted attitudes and built genuine empathy.'
    ],
    tags: ['LEADERSHIP', 'AWARENESS', 'EVENT MGMT'],
    image: 'https://images.unsplash.com/photo-1529336953121-ad3ef1d3b6d6?q=80&w=2070&auto=format&fit=crop',
    linkText: 'VIEW EVENT SUMMARY',
    category: 'Leadership',
    role: 'Event Lead & Operations Coordinator',
    duration: '1 Month (Planning + Execution)'
  },
  {
    id: 4,
    title: 'IDEASPRINT 2026',
    description: 'A multi-university startup competition hosted in collaboration with IIT Tirupati, enabling cross-campus innovation and merit-based advancement.',
    longDescription: [
      'IdeaSprint 2026 was a competitive ideation challenge conducted in collaboration with IIT Tirupati. As President, I oversaw both administrative structuring and end-to-end operational execution, ensuring transparency, fairness, and cross-campus participation.',
      'The competition consisted of two major rounds. The first round was hosted at VIT-AP, inviting participation from multiple regional universities. To maintain impartiality, one winning team from each participating institution was selected to advance to the final round at IIT Tirupati.',
      'The final round concluded with a VIT-AP student securing the top prize and earning an internship opportunity at NIF IIT Tirupati. The event strengthened inter-university collaboration and demonstrated how structured evaluation frameworks can elevate student innovation to institutional recognition.'
    ],
    tags: ['LEADERSHIP', 'STARTUP ECOSYSTEM', 'OPERATIONS'],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop',
    linkText: 'EXPLORE EVENT DETAILS',
    category: 'Leadership',
    role: 'President & Chief Organizer',
    duration: '15 Days (Planning + Execution)'
  },
  {
    id: 5,
    title: 'CODE4CHANGE',
    description: 'A social-impact hackathon empowering students to solve NGO-facing real-world problems through research-driven innovation.',
    longDescription: [
      'Code4Change was a social hackathon initiative focused on addressing real-world challenges faced by NGOs. Participants were given six distinct social impact themes and encouraged to deeply research, analyze, and propose implementable solutions.',
      'The hackathon was structured across three rigorous stages: solution proposal submission, an online hackathon development phase, and a final pitch deck presentation round. This phased structure ensured participants moved beyond surface-level ideas toward research-backed execution strategies.',
      'The initiative resulted in one winner and two runner-up teams, all awarded cash prizes, while every participant received certification. More importantly, the event exposed students to pressing societal issues, encouraging empathy-driven innovation and practical problem-solving rooted in contemporary social needs.'
    ],
    tags: ['LEADERSHIP', 'HACKATHON', 'SOCIAL IMPACT'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    linkText: 'VIEW HACKATHON INSIGHTS',
    category: 'Leadership',
    role: 'Initiative Lead & Strategic Head',
    duration: '2 Months (Planning + Execution)'
  },
  {
    id: 6,
    title: 'DECENTRALIZED VOTING SYSTEM',
    description: 'A blockchain-based voting platform ensuring transparency, immutability, and prevention of double voting.',
    longDescription: [
      'The Decentralized Voting System was designed to eliminate tampering and double-voting in traditional digital election systems. Each vote is permanently recorded on the Ethereum blockchain, creating an immutable public ledger of election activity.',
      'The smart contract was developed in Solidity using mappings to track voter participation and prevent duplicate submissions. A require() validation ensures that each wallet address can only cast a vote once. The frontend connects via Web3.js and MetaMask, enabling secure wallet-based authentication.',
      'This project deepened my understanding of blockchain as a trust-minimization tool. By shifting authority from centralized servers to cryptographic verification, the system demonstrates how elections can be transparent without compromising security.'
    ],
    tags: ['SOLIDITY', 'WEB3', 'ETHEREUM'],
    image: 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=2070&auto=format&fit=crop',
    linkText: 'VIEW DAPP DETAILS',
    role: 'Smart Contract & Frontend Developer',
    duration: '3 Weeks',
    category: 'dApps',
    githubUrl: 'https://github.com/tanishqarana/decentralized-voting-system'
  },
  {
    id: 7,
    title: 'LOGITRACK – DIGITAL PRODUCT PASSPORT SYSTEM',
    description: 'A logistics-focused DApp enabling bulk issuance of blockchain-indexed product passports with IPFS-backed certification.',
    longDescription: [
      'LogiTrack is a decentralized product authentication system designed for logistics coordinators to bulk-issue digital passports using Excel manifests. Each product’s quality certificate is uploaded to IPFS (via Pinata), and its identity is permanently indexed on the Ethereum Sepolia Testnet.',
      'The system integrates SheetJS for parsing Excel data and Web3.js for automated contract interactions. For every row in the manifest, the frontend triggers registerProduct() transactions, storing product metadata and IPFS CIDs on-chain. Consumers can verify authenticity globally using a Unique Tracking ID.',
      'The architecture incorporates integrity validation by re-hashing IPFS documents and comparing them with on-chain CIDs. For high-security environments, encrypted IPFS hashes can be stored to ensure confidentiality. The project demonstrates scalable Web3 automation, bulk minting workflows, and real-time blockchain verification.'
    ],
    tags: ['SOLIDITY', 'WEB3', 'IPFS', 'SHEETJS'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    linkText: 'EXPLORE LOGITRACK',
    role: 'Blockchain Architect & Automation Developer',
    duration: '6 Weeks',
    category: 'dApps'
  },
  {
    id: 8,
    title: 'LEDGELAND – DECENTRALIZED LAND REGISTRY',
    description: 'A blockchain-based land registry enabling immutable land ownership records with IPFS-backed digital deeds.',
    longDescription: [
      'LedgeLand is a decentralized land registry system designed to migrate physical property records into an immutable digital ledger. Government registrars upload Excel-based historical land data, and each land plot receives a unique blockchain identity.',
      'The system integrates Web3.js and SheetJS to automate bulk record migration onto the Sepolia Testnet. Each deed PDF is uploaded to IPFS, generating a CID stored alongside the Land ID and owner address on-chain. Ownership transfers update the ledger while preserving full chain-of-custody history.',
      'To address security concerns such as registrar key compromise, the architecture proposes multi-signature authorization requiring multiple officials to approve land transfers. Integrity validation re-verifies IPFS document hashes against on-chain CIDs, ensuring tamper detection and public auditability.'
    ],
    tags: ['SOLIDITY', 'IPFS', 'WEB3', 'MULTISIG'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop',
    linkText: 'VIEW REGISTRY SYSTEM',
    role: 'Smart Contract Developer & System Designer',
    duration: '8 Weeks',
    category: 'dApps',
    githubUrl: 'https://github.com/tanishqarana/Global-LogiTrack-Automated-Provenance-Ledger'
  },
  {
    id: 9,
    title: 'PERSONALIZED LEARNING PATH GENERATOR',
    description: 'An adaptive learning system combining Genetic Algorithms and Reinforcement Learning to generate evolving, personalized study pathways.',
    longDescription: [
      'The Learning Path Generator is a soft computing–based system designed to move beyond rigid, one-size-fits-all study plans. It dynamically constructs personalized learning sequences based on a learner’s strengths, weaknesses, and performance patterns. The objective is to optimize knowledge retention while minimizing cognitive overload.',
      'The system integrates Genetic Algorithms (GA) for path optimization and Reinforcement Learning (RL) for adaptive feedback loops. GA evolves optimal topic sequences by evaluating fitness functions such as difficulty progression, prerequisite mapping, and retention probability. RL continuously refines the path in real time by learning from user performance signals, similar to how navigation systems reroute based on live traffic conditions.',
      'This project demonstrates how soft computing techniques can replicate human-like adaptability in educational systems. It highlights the intersection of optimization theory, machine intelligence, and pedagogy — creating scalable infrastructure for e-learning platforms, universities, and corporate training ecosystems.'
    ],
    tags: ['PYTHON', 'GENETIC ALGORITHM', 'REINFORCEMENT LEARNING', 'SOFT COMPUTING'],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop',
    linkText: 'VIEW RESEARCH PROJECT',
    role: 'Algorithm Designer & System Developer',
    duration: 'Ongoing',
    category: 'Full-stack',
    githubUrl: 'https://github.com/tanishqarana/Learning-Path-Generator'
  },
  {
    id: 10,
    title: 'REAL-TIME SYSTEM HEALTH DASHBOARD',
    description: 'A WebSocket-powered monitoring dashboard visualizing live CPU, RAM, Disk, and Network metrics with zero refresh latency.',
    longDescription: [
      'The Real-Time System Health Dashboard is a Python-based web application that monitors system performance metrics including CPU usage, memory utilization, disk consumption, and network throughput. Built using Flask and Flask-SocketIO, the system streams live updates to the frontend without requiring manual page refreshes.',
      'System data is collected using the psutil library and transmitted via WebSockets to ensure low-latency, real-time synchronization across multiple connected clients. The frontend leverages Chart.js to render dynamic visualizations with smooth transitions, enabling intuitive interpretation of system health trends.',
      'The architecture emphasizes asynchronous event-driven design, lightweight threading for backend efficiency, and multi-client broadcasting. This project strengthened my understanding of real-time data streaming, WebSocket protocols, and full-stack synchronization between server-side processes and interactive UI components.'
    ],
    tags: ['PYTHON', 'FLASK', 'WEBSOCKETS', 'REAL-TIME SYSTEMS'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    linkText: 'VIEW LIVE DASHBOARD',
    role: 'Full-stack Developer',
    duration: '3 Weeks',
    category: 'Full-stack',
    githubUrl: 'https://github.com/tanishqarana/Real-Time-System-Health-Checker'
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Category | 'All Projects'>('All Projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  // Cleanup effect in case component unmounts while modal is open
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const filteredProjects = activeFilter === 'All Projects'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="flex flex-col w-full pt-16">
      <div className="mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">PORTFOLIO 2026</span>
        <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter uppercase">
          SELECTED<br />
          <span className="text-primary italic">WORKS.</span>
        </h1>
        <p className="text-lg text-[#9a4c73] dark:text-[#d7a1ba] max-w-2xl mt-6">
          A curated collection of digital experiences, smart contracts, and leadership initiatives. Blending technical precision with creative storytelling.
        </p>
      </div>

      <div className="flex gap-6 mb-12 overflow-x-auto pb-4">
        {['All Projects', 'dApps', 'Leadership', 'Full-stack'].map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter as Category)}
            className={`px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-colors ${activeFilter === filter
              ? 'bg-white text-primary shadow-sm dark:bg-primary dark:text-white'
              : 'hover:bg-white/50 dark:text-gray-300 dark:hover:bg-white/10'
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-panel rounded-[2rem] p-6 flex flex-col group hover:shadow-xl transition-all duration-300 cursor-pointer dark:bg-white/5 dark:border-white/10"
            onClick={() => openModal(project)}
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-gray-100 dark:bg-[#361a2a]">
              <div className="absolute top-4 left-4 flex gap-2 z-10">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase">
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-3 uppercase tracking-tight">{project.title}</h3>
            <p className="text-[#9a4c73] dark:text-[#d7a1ba] mb-8 flex-1">{project.description}</p>

            <div className="flex items-center justify-between mt-auto">
              <span className="flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase group/link">
                {project.linkText}
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </span>
              <div className="flex gap-4 text-black/40 dark:text-white/40">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-black dark:hover:text-white transition-colors" title="View GitHub">
                    <Github size={20} />
                  </a>
                )}
                {project.websiteUrl && (
                  <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-primary transition-colors" title="Visit Website">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-white/40 dark:bg-black/60 backdrop-blur-md"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-[#1b0d14] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl flex flex-col border-4 border-black dark:border-white/20 animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent clicking inside modal from closing it
          >
            {/* Modal Header/Image */}
            <div className="relative w-full h-[30vh] sm:h-[40vh] border-b-4 border-black dark:border-white/20 shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 w-12 h-12 bg-white dark:bg-[#1b0d14] border-2 border-black dark:border-white/20 flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors z-10 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 md:p-12 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter">{selectedProject.title}</h2>

              <div className="flex flex-wrap gap-12 mb-10 pb-10 border-b border-gray-200 dark:border-white/10">
                {selectedProject.role && (
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-1">Role</span>
                    <span className="font-semibold text-lg">{selectedProject.role}</span>
                  </div>
                )}
                {selectedProject.duration && (
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-1">Timeline</span>
                    <span className="font-semibold text-lg">{selectedProject.duration}</span>
                  </div>
                )}

                {/* External Links */}
                {(selectedProject.githubUrl || selectedProject.websiteUrl) && (
                  <div className="flex flex-wrap gap-4 items-center mt-2 md:mt-0 md:ml-auto w-full md:w-auto">
                    {selectedProject.githubUrl && (
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                        <Github size={18} />
                        <span>View Source</span>
                      </a>
                    )}
                    {selectedProject.websiteUrl && (
                      <a href={selectedProject.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20 dark:shadow-none">
                        <ExternalLink size={18} />
                        <span>Live Preview</span>
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="prose prose-lg max-w-none prose-p:text-[#9a4c73] dark:prose-p:text-[#d7a1ba] prose-p:leading-relaxed">
                {selectedProject.longDescription.map((paragraph, index) => (
                  <p key={index} className="mb-6 text-lg">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
