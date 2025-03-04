
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled ? "bg-darker/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="animate-fade-in flex items-center">
          <a href="#" className="text-white text-2xl font-semibold flex items-center">
            <span className="text-purple-light">AKM</span>
          </a>
        </div>
        
        <nav className="hidden md:flex space-x-10 animate-fade-in">
          <a href="#" className="text-white hover:text-purple-light transition-colors duration-300 link-hover">Home</a>
          <a href="#about" className="text-white hover:text-purple-light transition-colors duration-300 link-hover">About</a>
          <a href="#skills" className="text-white hover:text-purple-light transition-colors duration-300 link-hover">Skills</a>
          <a href="#projects" className="text-white hover:text-purple-light transition-colors duration-300 link-hover">Projects</a>
          <a href="#journey" className="text-white hover:text-purple-light transition-colors duration-300 link-hover">Journey</a>
          <a href="#contact" className="text-white hover:text-purple-light transition-colors duration-300 link-hover">Contact</a>
        </nav>
        
        <div className="md:hidden">
          <button className="text-white hover:text-purple-light transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
