import { Menu, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeHash, setActiveHash] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newValue = !prev;
      if (newValue) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newValue;
    });
  };

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    // Listen for hash changes from manual clicks
    window.addEventListener('hashchange', handleHashChange);

    // Set up intersection observer for scroll tracking
    const sections = document.querySelectorAll('section[id]');

    // We add a listener that updates active nav item when a section is at least 30% visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
            // Also optionally update the window hash without jumping, 
            // but usually just updating the UI state is preferred for scroll spy.
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px', // trigger when section is in the top/middle of viewport
        threshold: 0
      }
    );

    sections.forEach((section) => observer.observe(section));

    // Initial check just in case we load with a hash
    if (window.location.hash) {
      handleHashChange();
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'Projects', path: '#projects' },
    { name: 'About', path: '#about' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-0">
      <nav className="flex items-center justify-between w-full bg-white/80 dark:bg-[#1b0d14]/80 backdrop-blur-md border-b border-gray-100 dark:border-white/10 transition-colors duration-300">
        <div className="flex items-center w-full max-w-7xl mx-auto px-6 md:px-8 py-6 justify-between">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-black tracking-tighter text-primary italic">TR.</a>
          </div>

          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${activeHash === link.path || (link.path === '#home' && activeHash === '')
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-900 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={toggleDarkMode}
              className="text-gray-900 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="#contact" className="bg-primary text-white px-6 py-2 font-bold uppercase tracking-widest text-xs border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
              Let's Talk
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="text-gray-900 dark:text-gray-300"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="text-primary">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
