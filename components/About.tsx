import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="px-6 py-24 bg-[#0a0a0a] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-center uppercase tracking-tight relative pb-4">
            ABOUT ME
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary"></span>
          </h2>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Time-Saving Card */}
          <div className="p-10 glass-card rounded-2xl flex flex-col items-center text-center hover:bg-white/[0.04] transition-all border border-white/5">
            <div className="size-14 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 shadow-xl">
              <span className="material-symbols-outlined text-3xl text-primary">schedule</span>
            </div>
            <h3 className="font-black text-xl mb-3 uppercase tracking-tight text-white">Time-Saving</h3>
            <p className="text-sm text-white/50 leading-relaxed max-w-[240px]">
              Eliminating repetitive tasks so you can focus on strategic work.
            </p>
          </div>
          
          {/* Client Focused Card */}
          <div className="p-10 glass-card rounded-2xl flex flex-col items-center text-center hover:bg-white/[0.04] transition-all border border-white/5">
            <div className="size-14 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 shadow-xl">
              <span className="material-symbols-outlined text-3xl text-primary">group</span>
            </div>
            <h3 className="font-black text-xl mb-3 uppercase tracking-tight text-primary">Client Focused</h3>
            <p className="text-sm text-white/50 leading-relaxed max-w-[240px]">
              Understanding your business needs to create tailored automation solutions.
            </p>
          </div>
          
          {/* Growth Oriented Card */}
          <div className="p-10 glass-card rounded-2xl flex flex-col items-center text-center hover:bg-white/[0.04] transition-all border border-white/5">
            <div className="size-14 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 shadow-xl">
              <span className="material-symbols-outlined text-3xl text-primary">trending_up</span>
            </div>
            <h3 className="font-black text-xl mb-3 uppercase tracking-tight text-white">Growth-Oriented</h3>
            <p className="text-sm text-white/50 leading-relaxed max-w-[240px]">
              Building scalable systems that grow with your business.
            </p>
          </div>
        </div>

        {/* Detailed Summary Box */}
        <div className="p-10 md:p-14 glass-card rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent max-w-5xl mx-auto shadow-2xl">
          <h4 className="text-2xl md:text-3xl font-black mb-8 uppercase leading-tight text-white">
            I'M AN <span className="text-primary">AUTOMATION SPECIALIST</span> PASSIONATE ABOUT HELPING BUSINESSES WORK SMARTER.
          </h4>
          <p className="text-white/60 text-lg leading-relaxed font-medium">
            I design workflows that reduce repetitive work, cut down errors, and keep operations running smoothly. My focus is on building scalable and reliable automations that save time, boost productivity, and allow businesses to focus on what truly matters: growth and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;