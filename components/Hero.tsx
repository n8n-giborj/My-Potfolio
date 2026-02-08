import React from 'react';

const Hero: React.FC = () => {
  const calendarUrl = "https://calendly.com/gilbertborja-virtual/book-a-call-with-me";
  const cvUrl = "https://drive.google.com/file/d/1gP1I-9y1y_idHvcLUNlczgAL6Ab51pl4/view?usp=drive_link";

  return (
    <section className="relative px-6 pt-32 pb-20 flex flex-col items-center min-h-[95vh] justify-center overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto relative z-10">
        {/* Refined Profile Circle Design */}
        <div className="relative mb-8">
          {/* Outer Decorative Rings */}
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 size-[120%] border border-white/5 rounded-full pointer-events-none"></div>
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 size-[140%] border border-white/[0.03] rounded-full pointer-events-none"></div>
          
          {/* Main Image Container */}
          <div className="size-48 md:size-64 rounded-full border-[6px] border-[#1a1a1a] overflow-hidden shadow-2xl relative z-10 bg-black">
            <img 
              alt="Gilbert Borja" 
              className="w-full h-full object-cover block" 
              src="https://lh3.googleusercontent.com/d/10mXLEr2rnKN3dxX0vriJ0MunnrFGUm9V"
            />
          </div>
          
          {/* Subtle Glow behind the circle */}
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        </div>

        <div className="text-center">
          {/* Prominent Branding Greeting */}
          <p className="text-primary font-black text-lg md:text-2xl mb-6 tracking-[0.4em] uppercase">
            Hey! I'm Gilbert Borja
          </p>
          
          {/* Balanced Main Heading */}
          <h1 className="text-4xl md:text-7xl font-black leading-[0.9] mb-10 uppercase tracking-tighter text-white">
            AUTOMATION <br /> SPECIALIST
          </h1>
          
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto mb-10 font-medium leading-relaxed">
            Transforming complexity into seamless automations that power business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white/5 hover:bg-white/10 text-white text-[11px] font-black uppercase tracking-widest rounded-lg border border-white/10 transition-all text-center min-w-[200px]"
            >
              Download CV
            </a>
            <a 
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-primary hover:bg-primary/90 text-white text-[11px] font-black uppercase tracking-widest rounded-lg transition-all shadow-lg shadow-primary/20 text-center min-w-[200px]"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;