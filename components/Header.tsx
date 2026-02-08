import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // 5rem fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'ABOUT ME', id: 'about' },
    { label: 'SERVICES I OFFER', id: 'services' },
    { label: 'TOOLS AND EXPERTISE', id: 'tools' },
    { label: 'MY PROJECTS', id: 'projects' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full flex items-center justify-between px-6 md:px-10 py-5 backdrop-blur-md bg-header-navy/80 border-b border-white/5">
      <div className="flex items-center">
        <button 
          className="text-white font-black tracking-tighter text-2xl uppercase hover:text-primary transition-colors bg-transparent border-none cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Gilbert B.
        </button>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <button 
            key={item.id}
            className="nav-link bg-transparent border-none cursor-pointer" 
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        ))}
        <button 
          className="nav-link px-5 py-2 border border-primary/50 rounded-full hover:bg-primary transition-all duration-300 bg-transparent cursor-pointer" 
          onClick={() => scrollToSection('contact')}
        >
          CONTACT ME
        </button>
      </nav>

      {/* Mobile Menu Toggle */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden flex items-center justify-center size-10 rounded-full bg-white/5 text-white border-none cursor-pointer"
        aria-label="Toggle Menu"
      >
        <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
      </button>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-header-navy border-b border-white/10 flex flex-col items-center py-8 gap-6 md:hidden animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <button 
              key={item.id}
              className="nav-link text-lg bg-transparent border-none cursor-pointer" 
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button 
            className="px-8 py-3 bg-primary text-white rounded-full font-bold uppercase tracking-wider border-none cursor-pointer" 
            onClick={() => scrollToSection('contact')}
          >
            CONTACT ME
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;