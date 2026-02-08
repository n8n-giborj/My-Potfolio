import React from 'react';

const Footer: React.FC = () => {
  const linkedinUrl = "https://www.linkedin.com/in/gilbertborjabva";

  const socialLinks = [
    {
      url: "https://web.facebook.com/profile.php?id=61577798783830",
      icon: "https://lh3.googleusercontent.com/d/1NbQEsU8NYXknyPr2mtgrGZ4F39ah-XT9",
      alt: "Facebook",
      needsInvert: false
    },
    {
      url: "https://www.instagram.com/bvacovirtual",
      icon: "https://lh3.googleusercontent.com/d/1V-DxVsL7cByeLZC-jEAdBwiVCi_yBIBE",
      alt: "Instagram",
      needsInvert: true
    },
    {
      url: "https://x.com/BVAcovirtual",
      icon: "https://lh3.googleusercontent.com/d/14jTUuZEwj1ePDccHBMoHS6YisXOjepdd",
      alt: "X",
      needsInvert: true
    }
  ];

  return (
    <footer id="contact" className="mt-auto px-6 py-24 bg-black scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
            READY TO <span className="text-primary">AUTOMATE?</span>
          </h2>
          <p className="text-white/30 text-lg uppercase tracking-widest font-bold">Your next big business upgrade starts here.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
          {/* Email Card - Fully Clickable mailto link */}
          <a 
            className="flex items-center gap-6 p-6 glass-card rounded-xl border border-white/5 hover:border-primary/40 hover:bg-white/[0.03] transition-all group overflow-hidden" 
            href="mailto:gilbertborja.virtual@gmail.com"
          >
            <div className="size-14 min-w-[3.5rem] rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
              <span className="material-symbols-outlined text-primary text-2xl">mail</span>
            </div>
            <div className="text-left overflow-hidden">
              <p className="text-xs text-white/40 uppercase font-bold tracking-widest mb-1">Email</p>
              <p className="text-base md:text-lg font-black tracking-tight break-all group-hover:text-primary transition-colors">
                gilbertborja.virtual@gmail.com
              </p>
            </div>
          </a>
          
          <a 
            className="flex items-center gap-6 p-6 glass-card rounded-xl border border-white/5 hover:border-primary/40 hover:bg-white/[0.03] transition-all group overflow-hidden" 
            href={linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="size-14 min-w-[3.5rem] rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
              <span className="material-symbols-outlined text-primary text-2xl">link</span>
            </div>
            <div className="text-left overflow-hidden">
              <p className="text-xs text-white/40 uppercase font-bold tracking-widest mb-1">LinkedIn</p>
              <p className="text-base md:text-lg font-black tracking-tight uppercase group-hover:text-primary transition-colors">Gilbert Borja</p>
            </div>
          </a>
        </div>

        {/* Updated Social Logos Section */}
        <div className="flex justify-center items-center gap-8 mb-16">
          {socialLinks.map((social, i) => (
            <a 
              key={i} 
              className="opacity-60 hover:opacity-100 transition-all hover:scale-125 flex items-center justify-center" 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={social.icon} 
                alt={social.alt} 
                className={`size-7 md:size-8 object-contain ${social.needsInvert ? 'invert brightness-200' : ''}`}
              />
            </a>
          ))}
        </div>
        
        <div className="flex flex-col items-center justify-center gap-4 text-center">
           <p className="text-white/10 text-[10px] tracking-[0.5em] font-black uppercase">
            © 2024 <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GILBERT BORJA</a> — BUILT WITH INTELLIGENCE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;