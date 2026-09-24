import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? savedTheme === 'dark' : true;
    }
    return true;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-950/80 dark:bg-dark-950/80 light:bg-white/90 backdrop-blur-md border-b border-dark-800 dark:border-dark-800 border-slate-200/80 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-white dark:text-white text-slate-900 tracking-tighter">
              Dev<span className="text-primary">Zope</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-300 dark:text-slate-300 text-slate-700 hover:text-white dark:hover:text-white hover:text-slate-900 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}

            {/* Dark / Light Theme Switcher */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full bg-dark-800/80 dark:bg-dark-800/80 text-yellow-400 dark:text-yellow-400 text-slate-700 hover:bg-dark-700 transition-all border border-dark-700/60 dark:border-dark-700/60"
            >
              {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-600" />}
            </button>

            <a 
              href="#contact" 
              className="px-5 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-blue-600 transition-colors bg-glow"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile Menu & Theme Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full bg-dark-800/80 dark:bg-dark-800 text-amber-400 transition-all border border-dark-700/60"
            >
              {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-600" />}
            </button>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 dark:text-slate-300 text-slate-800 hover:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-dark-950/95 backdrop-blur-lg border-b border-dark-800 shadow-xl"
        >
          <div className="px-4 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-dark-800/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-5 py-3 text-sm font-semibold text-white bg-primary rounded-xl hover:bg-blue-600 transition-colors bg-glow"
              >
                Hire Me
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
