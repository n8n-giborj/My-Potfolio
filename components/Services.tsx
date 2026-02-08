
import React from 'react';

const services = [
  {
    icon: 'bolt',
    title: 'No Code Automation',
    features: [
      'Smart automations tailored to business needs',
      'Built with tools like Zapier, Make, and n8n',
      'Keep operations running on autopilot'
    ],
    highlight: true
  },
  {
    icon: 'analytics',
    title: 'CRM Management',
    features: [
      'Set up & optimize CRM systems',
      'Organize pipelines for smoother sales flow',
      'Strengthen relationships & close deals faster'
    ]
  },
  {
    icon: 'forum',
    title: 'Chatbot Set Up',
    features: [
      '24/7 AI customer support',
      'Lead qualification bots',
      'Integration with CRM'
    ]
  },
  {
    icon: 'language',
    title: 'Wordpress Website',
    features: [
      'Custom responsive design',
      'SEO optimization',
      'Speed & performance tuning'
    ]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-20 orange-underline uppercase">Services I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`p-8 glass-card rounded-xl text-center hover:translate-y-[-8px] transition-transform duration-300 ${service.highlight ? 'border-t-2 border-t-primary/50' : ''}`}
            >
              <span className="material-symbols-outlined text-4xl text-primary mb-6">{service.icon}</span>
              <h3 className="font-bold text-xl mb-6 uppercase">{service.title}</h3>
              <ul className="text-sm text-white/50 space-y-3 text-left list-disc list-inside">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
