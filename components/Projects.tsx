import React, { useState, useEffect } from 'react';

interface ProjectImage {
  url: string;
  caption: string;
}

interface Project {
  title: string;
  desc: string;
  icon: string;
  color: string;
  longDesc?: string;
  solutionTitle?: string;
  images?: (string | ProjectImage)[];
  tags?: string[];
}

const projects: Project[] = [
  {
    title: 'ZAPIER',
    desc: 'Workflow Automation',
    icon: 'https://lh3.googleusercontent.com/d/19WSfB6_jnH1dQnowyikgmEntaJtCdnXb',
    color: 'from-[#1a2e2a] to-[#0a0a0a]',
    solutionTitle: 'Zapier Automation Workflow',
    longDesc: 'Designed and built automated workflows using Zapier to connect forms, CRMs, email platforms, and document systems. These automations reduce manual work, improve data accuracy, and ensure smooth handoffs between tools.',
    images: [
      { url: 'https://lh3.googleusercontent.com/d/19WSfB6_jnH1dQnowyikgmEntaJtCdnXb', caption: 'Asana Folder Creation and Subtask Automation' },
      { url: 'https://lh3.googleusercontent.com/d/1Cr20JgWxI-eB49vI7emzJQ2nu6gkL9CP', caption: 'Leads Enrichment Automation' },
      { url: 'https://lh3.googleusercontent.com/d/1EDIIZqw1qIQHgaBkKWkc78_RH4kV_tLk', caption: 'CLIO New Matter Automation' },
      { url: 'https://lh3.googleusercontent.com/d/1hItnSa7RFkQ3WZn4v0pKxyBAE4HAQ6m5', caption: 'Auto-sending Links and Folder Creation For Patient' },
      { url: 'https://lh3.googleusercontent.com/d/1bMISI_JGkFsk6qnvyhTYNGueG8DCPXjR', caption: 'Patient Intake Form Automation' },
      { url: 'https://lh3.googleusercontent.com/d/1ihvNK3gYuZIOVnKSFBjWEOFveNGqWuaV', caption: 'Medication & Consent Form Automation using AI' },
      { url: 'https://lh3.googleusercontent.com/d/1YVGhlcVkxEXO9Ii0SHCwsrADdk7PU5lU', caption: 'Arbitration Form Automation' },
      { url: 'https://lh3.googleusercontent.com/d/18ZoINHr014AdkdmiTtnYi6IVngY_-wKx', caption: 'Notification for Email Delivery Failed' },
      { url: 'https://lh3.googleusercontent.com/d/1ZnVTlTLVAbVRpLClfcwlsy9MMHiqx9mW', caption: 'Resending Email and Notification Automation' }
    ],
    tags: ['Zapier', 'Asana', 'Google Workspace', 'CLIO', 'OpenAI', 'Typeform']
  },
  {
    title: 'MAKE.COM',
    desc: 'Advanced Logic Flows',
    icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuFdX0Ms-j0Se5OFuvhy0dwNjme5vD0JW18xAMtSmEugb8tp499MxN1KivScKJIQ0yQXHKHFnpsNCRk9X8Pu1dn4DkKy0HUm8eqGyJ43fLwCZGsWam8JU3EiN50uQ8xCr6fOlrdORIWVyVz7iIWYMC9Cpc8D6EYtwRyeNVec2pjOu5tQQDisdlQzpmudo2zznAWCn1Y4AvUHkCntLlXSXhL4FBCM46z2feIli331GxtHo_KpwniJz2BRURw-YB2PvMcrzmRaOaTUw',
    color: 'from-[#2e1a2e] to-[#0a0a0a]',
    solutionTitle: 'Advanced Make.com Scenarios',
    longDesc: 'Architected sophisticated multi-step scenarios on Make.com to handle complex data routing, API integrations, and business logic execution. This approach allows for granular control over every aspect of the automation flow.',
    images: [
      { url: 'https://lh3.googleusercontent.com/d/1qHaZpfZfwauDBZlCwaLae7QMH475SnZo', caption: 'Accounting Automation' },
      { url: 'https://lh3.googleusercontent.com/d/1apBnkU47ilOsRKDp6_DO2naRrrrG-BQM', caption: 'Auto-Sort Gmail' }
    ],
    tags: ['Make', 'Asana', 'XERO', 'Google Workspace', 'OpenAI']
  },
  {
    title: 'GHL',
    desc: 'CRM & Sales Automation',
    icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBh7Y4c8-kp7Czjhpvmc2LQoyjCpW5jI-ngsrcLjdTmn8YSUlRgdXfNSytqWiyPqoYrVdij8fQ4bsklGvCz2RAMwUtpvlwoK0Q-ZYo3Mky7HXL8NPA0C0Z-e-s4yyruZu01vwoxOTnk47GWjpThl1xCBq_BnyX4mFzkOz1_AG1ItKxvcdc-KxXUEF4v8qaNlQ3LZMSpkxk3tvtkagaI-HQzOm8l3ITaZvAl-CEUY8FMkwaOYKPvkjxFjQOCT0oM9WhAIo1mQTlttNjzM',
    color: 'from-[#1a1e2e] to-[#0a0a0a]',
    solutionTitle: 'HighLevel CRM Optimization',
    longDesc: 'Implementing high-performance GHL workflows to streamline business operations. This solution reduces manual data entry, prevents synchronization errors, and ensures a single source of truth across your entire software stack.',
    images: [
      { url: 'https://lh3.googleusercontent.com/d/1Kh0TZpjIdF0HzD25xHZE9268nZe20rfU', caption: 'Lead Capture with Instant Follow up' },
      { url: 'https://lh3.googleusercontent.com/d/1kJoOb2EayHCzvTwF9ITtngP2kb36KZ5r', caption: 'Client Appointment Booking' },
      { url: 'https://lh3.googleusercontent.com/d/1LpP4fNJz566Tw6Ufve83dduJGkdp5Dum', caption: 'Chat Bot Appointment' },
      { url: 'https://lh3.googleusercontent.com/d/1CRTCHwsMKU9AfiGkEv9UegvCCSbso44g', caption: 'Service Quote Automation' },
      { url: 'https://lh3.googleusercontent.com/d/1rj8iT3jDqO5qfeyrkUjEcw9p5lyIeyb0', caption: 'Outbound AI Voice Automation' },
      { url: 'https://lh3.googleusercontent.com/d/1VIpmduaGvutuoDTJzFpuX0tn7yefZO_u', caption: 'Inbound AI Voice Automation' },
      { url: 'https://lh3.googleusercontent.com/d/1vBfMV6bR5kV8o85UASve0XyV3okBIL9z', caption: 'Instagram Ads Automation' },
      { url: 'https://lh3.googleusercontent.com/d/140LtWlwEiUylMAuEO42GmqZiruTSPgKF', caption: 'Facebook ADS Automation' },
      { url: 'https://lh3.googleusercontent.com/d/1MwX8egiX-DqgmmZ32cXjkwKSPO0QHUY6', caption: 'End of Call Report Automation' },
      { url: 'https://lh3.googleusercontent.com/d/1akF6AV89lIkjhaCRlpF26SQCUK-P9VBp', caption: 'GHL Funnel' },
      { url: 'https://lh3.googleusercontent.com/d/15khWDa8kHDsQzdOHjLRK6WS98pSuln22', caption: 'GHL Website' }
    ],
    tags: ['GoHighLevel', 'Sales', 'CRM']
  },
  {
    title: 'N8N',
    desc: 'Technical Flow Automation',
    icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBA7iIpyc_wZUVOTOzKhcc-6-DFiRxAhu3-0ayg_20omGlvcx9_RKHCpJp878Z_abNZCnuBpP0amrGbXc2tHVph9OJ38aOyizVwB0PyUqp1yJ-j5YURigWMGAL9u-u7FUnZkdChXUCxXhKSOgetRovuoywv6DMGqf7DTJgRjNH4hxKyfDNEKePpqSYZbv2we9yJDCORmHfM99voRf0RvBHGECZTE-q9AmJvmHoufPhtTkrg_xDqQaGqrXBGUJUkEEsFrZpMJyMqCw',
    color: 'from-[#2e2a1a] to-[#0a0a0a]',
    solutionTitle: 'Technical Flow Automation',
    longDesc: 'Implementing high-performance N8N workflows to streamline business operations. This solution reduces manual data entry, prevents synchronization errors, and ensures a single source of truth across your entire software stack.',
    images: [
      { url: 'https://lh3.googleusercontent.com/d/1bvp7VQP8rgExPmD2PdDafMaBPAQixSb9', caption: 'AI Voice Appointment Setter' },
      { url: 'https://lh3.googleusercontent.com/d/1qLRCE7JG8aogQJiChDDYGLzWe5gBf98_', caption: 'AI Voice Appointment Setter' },
      { url: 'https://lh3.googleusercontent.com/d/115mupj6UUrAPb9acBWVoFj7tsvH-HFG7', caption: 'Messenger Chat-Bot' },
      { url: 'https://lh3.googleusercontent.com/d/18qXz2XJHn0YW_LwyRQhmFtcIGSGzM4z9', caption: 'Airtable AI Agent' },
      { url: 'https://lh3.googleusercontent.com/d/1Uo4MHkqG7VNhw9sLGhe3NEVyK5n3qtvc', caption: 'Auto Draft Email for Customer Inquiry' },
      { url: 'https://lh3.googleusercontent.com/d/1xTmaqNFFJ8wOIzPqgay8VQS49BJNZsTt', caption: 'Auto-sending Email with labels to Customer Inquiry' }
    ],
    tags: ['n8n', 'VAPI', 'Airtable', 'Gemini', 'DevOps', 'Backend']
  },
  {
    title: 'CHAT-BOT',
    desc: 'Intelligent AI Agents',
    icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBA7iIpyc_wZUVOTOzKhcc-6-DFiRxAhu3-0ayg_20omGlvcx9_RKHCpJp878Z_abNZCnuBpP0amrGbXc2tHVph9OJ38aOyizVwB0PyUqp1yJ-j5YURigWMGAL9u-u7FUnZkdChXUCxXhKSOgetRovuoywv6DMGqf7DTJgRjNH4hxKyfDNEKePpqSYZbv2we9yJDCORmHfM99voRf0RvBHGECZTE-q9AmJvmHoufPhtTkrg_xDqQaGqrXBGUJUkEEsFrZpMJyMqCw',
    color: 'from-[#1e3a5f] to-[#0a0a0a]',
    solutionTitle: 'Conversational AI Solutions',
    longDesc: 'Designing and deploying intelligent chatbots that leverage advanced NLP to provide 24/7 customer engagement, lead qualification, and automated support across multiple platforms.',
    images: [
      { url: 'https://lh3.googleusercontent.com/d/1w6t74kvNWlaM4grDl3IKknZkg7zVt4mD', caption: 'Microsoft Co-Pilot' },
      { url: 'https://lh3.googleusercontent.com/d/1kdgFxSJ1ANk0a_mX7YKXpvqNDGos_vKP', caption: 'Landbot Chat Bot' }
    ],
    tags: ['AI', 'Chatbot', 'Landbot', 'Microsoft co-pilot', 'Airtable']
  },
  {
    title: 'VOICE-AI',
    desc: 'TEAM NOTIFICATION BOTS',
    icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuFdX0Ms-j0Se5OFuvhy0dwNjme5vD0JW18xAMtSmEugb8tp499MxN1KivScKJIQ0yQXHKHFnpsNCRk9X8Pu1dn4DkKy0HUm8eqGyJ43fLwCZGsWam8JU3EiN50uQ8xCr6fOlrdORIWVyVz7iIWYMC9Cpc8D6EYtwRyeNVec2pjOu5tQQDisdlQzpmudo2zznAWCn1Y4AvUHkCntLlXSXhL4FBCM46z2feIli331GxtHo_KpwniJz2BRURw-YB2PvMcrzmRaOaTUw',
    color: 'from-[#3e1a47] to-[#0a0a0a]',
    solutionTitle: 'Advanced Voice AI Integration',
    longDesc: 'Implementing high-performance VOICE-AI workflows to streamline business operations. This solution reduces manual data entry, prevents synchronization errors, and ensures a single source of truth across your entire software stack.',
    images: [
      { url: 'https://lh3.googleusercontent.com/d/1c1P2BIIQqoLDGspEDL83rp0BVuPW7Yh8', caption: 'AI Voice Appointment Setter' },
      { url: 'https://lh3.googleusercontent.com/d/1MzkMbiyvYAjtB8saNFRYPR3hl1ygGXGw', caption: 'VAPI Inbound Voice Agent' },
      { url: 'https://lh3.googleusercontent.com/d/1zLtIuCFsajWt5KUz4r2CBJR1NLdb9pz1', caption: 'VAPI Outbound Voice Agent' }
    ],
    tags: ['VOICE', 'VAPI', 'AI']
  },
  {
    title: 'SHOPIFY',
    desc: 'E-COM ORDER FULFILLMENT',
    icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBh7Y4c8-kp7Czjhpvmc2LQoyjCpW5jI-ngsrcLjdTmn8YSUlRgdXfNSytqWiyPqoYrVdij8fQ4bsklGvCz2RAMwUtpvlwoK0Q-ZYo3Mky7HXL8NPA0C0Z-e-s4yyruZu01vwoxOTnk47GWjpThl1xCBq_BnyX4mFzkOz1_AG1ItKxvcdc-KxXUEF4v8qaNlQ3LZMSpkxk3tvtkagaI-HQzOm8l3ITaZvAl-CEUY8FMkwaOYKPvkjxFjQOCT0oM9WhAIo1mQTlttNjzM',
    color: 'from-[#2e4a1a] to-[#0a0a0a]',
    solutionTitle: 'E-commerce Automation',
    longDesc: 'Streamlining Shopify store operations through automated order fulfillment, inventory management, and customer notification systems. This integration ensures that your e-commerce platform communicates perfectly with your shipping and inventory tools.',
    images: [
      { url: 'https://lh3.googleusercontent.com/d/1mS5oxzfYEkuso9gCmHw-GVq63-PXRkuW', caption: 'Shopify Product' },
      { url: 'https://lh3.googleusercontent.com/d/1cIdZcSwSLBTCglajnDYWEUVbychQChwa', caption: 'Shopify Product' },
      { url: 'https://lh3.googleusercontent.com/d/1KFlVdLwV73g-u-oFaT1j60stvAevDUiM', caption: 'Shopify Product' }
    ],
    tags: ['Shopify', 'E-commerce', 'Auto']
  },
  {
    title: 'MONDAY.COM',
    desc: 'PROJECT MANAGEMENT FLOW',
    icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBA7iIpyc_wZUVOTOzKhcc-6-DFiRxAhu3-0ayg_20omGlvcx9_RKHCpJp878Z_abNZCnuBpP0amrGbXc2tHVph9OJ38aOyizVwB0PyUqp1yJ-j5YURigWMGAL9u-u7FUnZkdChXUCxXhKSOgetRovuoywv6DMGqf7DTJgRjNH4hxKyfDNEKePpqSYZbv2we9yJDCORmHfM99voRf0RvBHGECZTE-q9AmJvmHoufPhtTkrg_xDqQaGqrXBGUJUkEEsFrZpMJyMqCw',
    color: 'from-[#0073e6]/20 to-[#0a0a0a]',
    solutionTitle: 'Team Productivity Workflows',
    longDesc: 'Implementing high-performance MONDAY.COM workflows to streamline business operations. This solution reduces manual data entry, prevents synchronization errors, and ensures a single source of truth across your entire software stack through automated dashboard reporting.',
    images: [
      { url: 'https://lh3.googleusercontent.com/d/1TbTF5X05Um-scMSmn66E4cbYfKO6YmxL', caption: 'Monday Dashboard' }
    ],
    tags: ['Monday', 'PM', 'Business']
  },
  {
    title: 'CRM',
    desc: 'MARKETING & CRM SYNC',
    icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbSSKxhgcX_zGMbbsA8puTxc7YEgsu4PkPfbfFK4B6TrKXTHIyQ1bZOrHHDjam6SboHHXB168tPygmhorSd8I_NMLgADDA_Uq7lXhfaQxF4XC9gam_iB7W4oBL_jnUoPuSsKmNBUeM5mpbQ6au7G-ID1UeKThRVwg3X2xHcoU7rceCJgU-k_v6oYPRr2jo4NCFPcIojVjAZaCuGPSxgObFApocNsAjZmmngYgaRw56f43e-eriUe_t7frS6Ar3TkEeNFwwXrszs1c',
    color: 'from-[#ff7a59]/20 to-[#0a0a0a]',
    solutionTitle: 'The Solution',
    longDesc: 'Implementing high-performance CRM workflows to streamline business operations. This solution reduces manual data entry, prevents synchronization errors, and ensures a single source of truth across your entire software stack.',
    images: [
      { url: 'https://lh3.googleusercontent.com/d/1S6MLdlpvN191SZ4tzMD4Vtcwy6fyZJH3', caption: 'Hubspot' },
      { url: 'https://lh3.googleusercontent.com/d/1cnU9r2WtbWKOhRGFJ1xBiY31fGUzpsAB', caption: 'Airtable' },
      { url: 'https://lh3.googleusercontent.com/d/12thr1GyaTkgnkQ-0qtmwajpDBtKKpT9z', caption: 'Airtable' }
    ],
    tags: ['CRM', 'HUBSPOT', 'AIRTABLE']
  },
  {
    title: 'FUNNELS',
    desc: 'LEAD GENERATION ENGINES',
    icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuFdX0Ms-j0Se5OFuvhy0dwNjme5vD0JW18xAMtSmEugb8tp499MxN1KivScKJIQ0yQXHKHFnpsNCRk9X8Pu1dn4DkKy0HUm8eqGyJ43fLwCZGsWam8JU3EiN50uQ8xCr6fOlrdORIWVyVz7iIWYMC9Cpc8D6EYtwRyeNVec2pjOu5tQQDisdlQzpmudo2zznAWCn1Y4AvUHkCntLlXSXhL4FBCM46z2feIli331GxtHo_KpwniJz2BRURw-YB2PvMcrzmRaOaTUw',
    color: 'from-[#7b68ee]/20 to-[#0a0a0a]',
    solutionTitle: 'The Solution',
    longDesc: 'Implementing high-performance LANDING PAGE workflows to streamline business operations. This solution reduces manual data entry, prevents synchronization errors, and ensures a single source of truth across your entire software stack.',
    images: [
      { url: 'https://lh3.googleusercontent.com/d/1YttwaAeka-Ea7NmVqZnoOJDC80HPKJ1p', caption: 'Medical Weight Loss Clinic Funnel' },
      { url: 'https://lh3.googleusercontent.com/d/1vLpPGALz5GXXHQDiLEAI3RG3s56vbGpS', caption: 'Weight Loss Clinic Funnel' },
      { url: 'https://lh3.googleusercontent.com/d/1q6WWbnhJWCdmHd70gcNVEwtV-JzGZVxw', caption: 'Landing Page' },
      { url: 'https://lh3.googleusercontent.com/d/1tO4m2wfTBAxwvz-HNTY_b3qEvdq0AtCY', caption: 'Landing Page Lead Magnet' },
      { url: 'https://lh3.googleusercontent.com/d/18sk3SaQ-n6gWC276UPsQY0ZyJtCuZEki', caption: 'Landing Page' }
    ],
    tags: ['MAILCHIMP', 'ACTIVE CAMPAIGN']
  },
  {
    title: 'WEBSITES',
    desc: 'Website Design',
    icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBh7Y4c8-kp7Czjhpvmc2LQoyjCpW5jI-ngsrcLjdTmn8YSUlRgdXfNSytqWiyPqoYrVdij8fQ4bsklGvCz2RAMwUtpvlwoK0Q-ZYo3Mky7HXL8NPA0C0Z-e-s4yyruZu01vwoxOTnk47GWjpThl1xCBq_BnyX4mFzkOz1_AG1ItKxvcdc-KxXUEF4v8qaNlQ3LZMSpkxk3tvtkagaI-HQzOm8l3ITaZvAl-CEUY8FMkwaOYKPvkjxFjQOCT0oM9WhAIo1mQTlttNjzM',
    color: 'from-[#1a2e2a] to-[#0a0a0a]',
    solutionTitle: 'Website Design Showcase',
    longDesc: 'Crafting high-end, responsive websites tailored for business conversions and user experience. Leveraging modern design principles and tools like Wordpress and Elementor to build scalable online presences that stand out and drive growth.',
    images: [
      { url: 'https://lh3.googleusercontent.com/d/1Tdv-gpveefIkE7SAuPdJHq82MuCbLUWu', caption: 'Website Re-Design' },
      { url: 'https://lh3.googleusercontent.com/d/18e0MX6NfoA03-ZwlzE00TC8PcMzfjHQ4', caption: 'Portfolio Website' }
    ],
    tags: ['Wordpress', 'Elementor']
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Reset image index when modal opens
  useEffect(() => {
    if (selectedProject) {
      setActiveImageIndex(0);
    }
  }, [selectedProject]);

  const handleNextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!selectedProject?.images) return;
    setActiveImageIndex((prev) => (prev + 1) % selectedProject.images!.length);
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!selectedProject?.images) return;
    setActiveImageIndex((prev) => (prev - 1 + selectedProject.images!.length) % selectedProject.images!.length);
  };

  const handleDiscussClick = () => {
    const calendarUrl = 'https://calendly.com/gilbertborja-virtual/book-a-call-with-me';
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendarUrl });
    } else {
      window.open(calendarUrl, '_blank');
    }
    // Optionally close the modal
    setSelectedProject(null);
  };

  const getCurrentImgData = () => {
    if (!selectedProject?.images || !selectedProject.images[activeImageIndex]) return null;
    const item = selectedProject.images[activeImageIndex];
    return {
      url: typeof item === 'string' ? item : item.url,
      caption: typeof item === 'string' ? 'Project Overview' : item.caption
    };
  };

  const currentImg = getCurrentImgData();

  return (
    <section id="projects" className="px-6 py-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-center uppercase tracking-tighter flex flex-col items-center">
            MY <span className="relative">
              PROJECTS
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary"></span>
            </span>
          </h2>
        </div>

        <div className="border border-blue-400/30 rounded-lg p-6 md:p-12 bg-black/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedProject(project)}
                className={`group relative overflow-hidden rounded-xl border border-white/10 aspect-[4/3] bg-gradient-to-br ${project.color} hover:border-primary/50 transition-all duration-500 cursor-pointer shadow-2xl active:scale-95 transform-gpu`}
              >
                {/* Background Icon Decor */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 p-8 md:p-12">
                  <img 
                    src={project.icon} 
                    alt="" 
                    className="w-full h-full object-contain grayscale invert brightness-200"
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                  />
                </div>
                
                {/* Hover Reveal Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-5 py-2 bg-black rounded-full text-[10px] font-black tracking-widest uppercase border border-white/10">Explore Detail</span>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent">
                  <h3 className="font-black text-lg md:text-xl uppercase mb-1 tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.desc && (
                    <p className="text-[10px] md:text-xs text-white/50 font-medium leading-tight line-clamp-2 uppercase">
                      {project.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl animate-fade-in"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="relative w-full max-w-6xl bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col max-h-[90vh] animate-scale-in">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/5 bg-black/40">
              <div className="flex items-center gap-4">
                <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">dynamic_feed</span>
                </div>
                <div>
                  <h3 className="font-black text-xl uppercase tracking-tight">{selectedProject.title}</h3>
                  {selectedProject.desc && <p className="text-[10px] text-white/50 uppercase tracking-[0.2em]">{selectedProject.desc}</p>}
                </div>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group"
              >
                <span className="material-symbols-outlined text-white/50 group-hover:text-white">close</span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 no-scrollbar bg-gradient-to-br from-transparent to-primary/[0.03]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Text Info */}
                <div className="flex flex-col">
                  <h4 className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-4">
                    {selectedProject.solutionTitle || 'The Solution'}
                  </h4>
                  <p className="text-white/80 text-lg leading-relaxed mb-10 font-medium">
                    {selectedProject.longDesc || `Implementing high-performance ${selectedProject.title} workflows to streamline business operations. This solution reduces manual data entry, prevents synchronization errors, and ensures a single source of truth across your entire software stack.`}
                  </p>
                  
                  <div className="space-y-8 mt-auto">
                    <div>
                      <h5 className="font-bold text-xs uppercase tracking-[0.2em] text-white/40 mb-4">Tech Stack</h5>
                      <div className="flex flex-wrap gap-3">
                        {(selectedProject.tags || ['Automation', 'Logic', 'Scaling']).map((tag, i) => (
                          <span key={i} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase font-black text-primary/80 tracking-widest">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Compilation Gallery */}
                <div className="space-y-8">
                  <div className="flex justify-between items-end">
                    <h4 className="text-primary font-black text-xs uppercase tracking-[0.3em]">Visual Proof Compilation</h4>
                  </div>
                  
                  <div className="flex flex-col gap-6">
                    {/* Main Image View - Click opens Pop Out */}
                    <div 
                      className="group/img relative rounded-xl overflow-hidden border border-white/10 bg-white shadow-2xl cursor-zoom-in aspect-video md:aspect-auto min-h-[300px] flex items-center justify-center transition-all duration-300 hover:shadow-primary/10"
                      onClick={() => setIsLightboxOpen(true)}
                    >
                      {currentImg ? (
                        <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
                          <img 
                            key={`${selectedProject.title}-${activeImageIndex}`}
                            src={currentImg.url} 
                            alt="Compilation Step" 
                            className="w-full h-full object-contain animate-in fade-in zoom-in-95 slide-in-from-right-4 duration-500 ease-out"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000';
                            }}
                          />
                          {/* Hover Hint Overlay */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                             <div className="flex flex-col items-center gap-2">
                                <span className="material-symbols-outlined text-4xl text-white">zoom_in</span>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Click to Pop Out Screen</span>
                             </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center text-white/20">
                           <span className="material-symbols-outlined text-6xl mb-4">image_not_supported</span>
                           <p className="text-xs uppercase font-black tracking-widest">No visual preview available</p>
                        </div>
                      )}
                    </div>

                    {/* Step Caption Display */}
                    <div className="text-center py-4 bg-white/5 rounded-xl border border-white/5 transition-all duration-300 overflow-hidden min-h-[3.5rem] flex items-center justify-center">
                      <h5 
                        key={`caption-${selectedProject.title}-${activeImageIndex}`}
                        className="text-primary font-black text-xs md:text-sm uppercase tracking-[0.3em] leading-relaxed px-4 animate-in fade-in slide-in-from-bottom-2 duration-500"
                      >
                        {currentImg?.caption || 'Project Overview'}
                      </h5>
                    </div>

                    {/* Navigation Bar */}
                    <div className="flex items-center justify-center gap-4">
                      <button 
                        onClick={handlePrevImage}
                        className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all active:scale-90"
                      >
                        <span className="material-symbols-outlined text-white/50">arrow_back</span>
                      </button>
                      <div className="flex gap-2 items-center">
                        {selectedProject.images?.map((_, idx) => (
                          <button 
                            key={idx}
                            onClick={() => setActiveImageIndex(idx)}
                            className={`size-2 rounded-full transition-all duration-500 transform-gpu ${idx === activeImageIndex ? 'w-8 bg-primary scale-110 shadow-[0_0_8px_rgba(255,105,51,0.6)]' : 'bg-white/10 hover:bg-white/30 hover:scale-125'}`}
                          />
                        ))}
                      </div>
                      <button 
                        onClick={handleNextImage}
                        className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all active:scale-90"
                      >
                        <span className="material-symbols-outlined text-white/50">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-6 border-t border-white/5 bg-black/40 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-[9px] text-white/20 uppercase tracking-[0.5em] font-black uppercase">Project Ref: {selectedProject.title}-MOD-01</p>
              <div className="flex gap-4 w-full sm:w-auto">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 sm:flex-none px-8 py-3 text-[10px] font-black uppercase tracking-widest border border-white/10 rounded-xl hover:bg-white/5 transition-colors"
                >
                  Return
                </button>
                <button 
                  onClick={handleDiscussClick}
                  className="flex-1 sm:flex-none px-8 py-3 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-xl shadow-primary/10 hover:shadow-primary/30 transition-all hover:-translate-y-1 text-center cursor-pointer border-none"
                >
                  Discuss This Flow
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pop Out Screen (Lightbox) */}
      {isLightboxOpen && selectedProject && currentImg && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/98 backdrop-blur-3xl animate-fade-in">
          <button 
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 size-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all z-[120] border-none text-white active:scale-90 shadow-xl"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          {/* Previous Button inside Lightbox */}
          <button 
            onClick={handlePrevImage}
            className="absolute left-6 size-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-all text-white/50 hover:text-white z-50 hidden md:flex border-none active:scale-90"
          >
            <span className="material-symbols-outlined text-3xl">chevron_left</span>
          </button>
          
          <div className="max-w-7xl w-full max-h-[90vh] flex flex-col items-center animate-scale-in">
            <div className="relative group/pop cursor-pointer w-full flex justify-center" onClick={handleNextImage}>
              <img 
                key={`pop-${selectedProject.title}-${activeImageIndex}`}
                src={currentImg.url} 
                alt={currentImg.caption} 
                className="w-full h-full max-h-[75vh] object-contain rounded-lg shadow-[0_0_100px_rgba(255,105,51,0.15)] animate-in fade-in zoom-in-95 slide-in-from-right-8 duration-500 ease-out"
              />
              {/* Clicking the image in popout also advances slideshow */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/pop:opacity-100 transition-opacity pointer-events-none">
                 <div className="px-6 py-3 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">play_arrow</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">Click to Next Step</span>
                 </div>
              </div>
            </div>
            
            {/* Step Label in Lightbox */}
            <div className="mt-8 overflow-hidden min-h-[3.5rem] flex items-center">
              <div 
                key={`pop-caption-${selectedProject.title}-${activeImageIndex}`}
                className="px-10 py-4 bg-[#ff6933]/10 backdrop-blur-xl border border-[#ff6933]/20 rounded-full text-xs md:text-sm font-black uppercase tracking-[0.4em] text-primary shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                {currentImg.caption}
              </div>
            </div>
          </div>

          {/* Next Button inside Lightbox */}
          <button 
            onClick={handleNextImage}
            className="absolute right-6 size-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-all text-white/50 hover:text-white z-50 hidden md:flex border-none active:scale-90"
          >
            <span className="material-symbols-outlined text-3xl">chevron_right</span>
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;