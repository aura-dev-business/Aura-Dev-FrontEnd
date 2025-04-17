import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-[65px] right-5 z-50 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="group bg-gray-800 hover:bg-red-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 shadow-md"
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} className="group-hover:animate-bounce text-white" />
      </button>
    </div>
  );
};

export default TopButton;
