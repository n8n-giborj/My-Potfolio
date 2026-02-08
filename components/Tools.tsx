
import React from 'react';

const tools = [
  { name: 'GHL', logo: 'https://lh3.googleusercontent.com/d/1SDpeMrC2mmOkhyKCinwqWKHB7Y2asHUF', bgColor: 'bg-[#1a2e2a]' },
  { name: 'Make', logo: 'https://lh3.googleusercontent.com/d/1Xs6pzXWxaMS9SRZzquti6yOpiA9EvO7Z', bgColor: 'bg-[#7a8f85]' },
  { name: 'n8n', logo: 'https://lh3.googleusercontent.com/d/1i89LWEH0VSTIe5WMOzZYJPoTvmie5cji', bgColor: 'bg-[#153a2d]' },
  { name: 'Zapier', logo: 'https://lh3.googleusercontent.com/d/1-yeFbbCfNC6srKkNGFlnKbdIVY4CNyfL', bgColor: 'bg-[#111111]' },
  { name: 'Airtable', logo: 'https://lh3.googleusercontent.com/d/1ovFW9N3xp85tvSA3mQ5yb0qbE9dk9S0a', bgColor: 'bg-[#1a2e3a]' },
  { name: 'Slack', logo: 'https://lh3.googleusercontent.com/d/1q1DkEFeoIDJeQ1YJJ-y7ON8r8OmA0r0W', bgColor: 'bg-[#2e1a1a]' },
  { name: 'ManyChat', logo: 'https://lh3.googleusercontent.com/d/1K1cmS4sFEYhMnIoq8mtDLPNfRnKTdyr9', bgColor: 'bg-[#1a3a4a]' },
  { name: 'Google Sheets', logo: 'https://lh3.googleusercontent.com/d/1XHTPrsDPGiQz4nPVuaJtUfJl8YjSZygt', bgColor: 'bg-[#1a3a2a]' },
  { name: 'Calendly', logo: 'https://lh3.googleusercontent.com/d/1miUYBdHH7v7bRjgRjc_1j16nRFjpiWf5', bgColor: 'bg-[#1a1a2e]' },
  { name: 'ClickUp', logo: 'https://lh3.googleusercontent.com/d/10_1wRG6msfiemThB8oFamqzX9fdkhiNN', bgColor: 'bg-[#1a1a1a]' },
  { name: 'Claude', logo: 'https://lh3.googleusercontent.com/d/1qwgu6jfU9iJqElwU8V0Hnj1_wN_KqjYe', bgColor: 'bg-[#2e2a24]' },
  { name: 'OpenAI', logo: 'https://lh3.googleusercontent.com/d/1f7921o7mwKbtxLsSLE-1gWeDxIa7Ylbq', bgColor: 'bg-[#1a2e2a]' },
  { name: 'Notion', logo: 'https://lh3.googleusercontent.com/d/1sms0xpHmsPYSWg7DARfJBOM-Ndp3nHR2', bgColor: 'bg-[#1a1a1a]' },
  { name: 'Discord', logo: 'https://lh3.googleusercontent.com/d/1CSvAuttDOn0nFa1V1xPSaT5kZHw90yl3', bgColor: 'bg-[#242e4a]' },
  { name: 'Veed', logo: 'https://lh3.googleusercontent.com/d/1OnZQdxj7zDYCGRfpTpCY1qy9fKDgAZnr', bgColor: 'bg-[#2e1a2e]' }
];

// Duplicate tools for seamless loop
const carouselTools = [...tools, ...tools, ...tools];

const Tools: React.FC = () => {
  return (
    <section id="tools" className="py-24 bg-black overflow-hidden">
      <div className="flex flex-col items-center mb-12 px-6">
        <h2 className="text-3xl md:text-5xl font-black text-center uppercase tracking-tight relative">
          TOOLS AND EXPERTISE
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary"></span>
        </h2>
      </div>

      {/* Carousel - No longer wrapped in a constrained/bordered box */}
      <div className="relative w-full py-6 carousel-pause">
        {/* Fading edges */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-fit animate-infinite-scroll py-4">
          {carouselTools.map((tool, index) => (
            <div 
              key={index} 
              className="mx-3 md:mx-5 flex-none"
            >
              <div 
                className={`size-20 md:size-24 ${tool.bgColor} rounded-lg border border-white/5 flex items-center justify-center p-5 md:p-6 group cursor-pointer hover:border-primary/40 hover:scale-110 transition-all duration-300 shadow-lg`}
              >
                <img 
                  alt={tool.name} 
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" 
                  src={tool.logo}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skill Bars */}
      <div className="max-w-4xl mx-auto mt-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="group">
            <div className="flex justify-between text-[10px] md:text-xs font-black mb-3 uppercase tracking-[0.2em] text-white/70">
              <span>AUTOMATION WORKFLOWS</span>
              <span className="text-primary">95%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full shadow-[0_0_15px_rgba(255,105,51,0.5)] transition-all duration-1000 ease-out" style={{ width: '95%' }}></div>
            </div>
          </div>
          <div className="group">
            <div className="flex justify-between text-[10px] md:text-xs font-black mb-3 uppercase tracking-[0.2em] text-white/70">
              <span>CRM SYSTEM DESIGN</span>
              <span className="text-primary">90%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full shadow-[0_0_15px_rgba(255,105,51,0.5)] transition-all duration-1000 ease-out" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
