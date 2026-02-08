import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Footer from './components/Footer';
import FAB from './components/FAB';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section, footer');
    sections.forEach((section) => {
      section.classList.add('reveal');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-gradient-to-b from-[#1a1a1a] via-[#0a0a0a] to-[#000000] overflow-x-hidden font-display text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Tools />
        <Projects />
      </main>
      <Footer />
      <FAB />
    </div>
  );
};

export default App;