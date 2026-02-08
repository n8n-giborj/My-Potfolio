import React from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

const FAB: React.FC = () => {
  const handleBookingClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/gilbertborja-virtual/book-a-call-with-me'
      });
    } else {
      // Fallback if script hasn't loaded yet
      window.open('https://calendly.com/gilbertborja-virtual/book-a-call-with-me', '_blank');
    }
  };

  return (
    <div className="fixed bottom-10 right-6 md:right-10 z-[60]">
      <button 
        className="size-14 md:size-16 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_10px_40px_rgba(255,105,51,0.4)] hover:scale-110 active:scale-95 transition-all"
        onClick={handleBookingClick}
        title="Schedule a Call"
      >
        <span className="material-symbols-outlined text-3xl">calendar_month</span>
      </button>
    </div>
  );
};

export default FAB;