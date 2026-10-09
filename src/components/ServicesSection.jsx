import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Globe, Code, Palette, LineChart, MessageSquare, Smartphone, Loader, AlertCircle, ChevronLeft, ChevronRight, ExternalLink, Sparkles, Zap } from 'lucide-react';

const PremiumAnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aura-primary/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aura-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-aura-accent/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
  </div>
);

const ICON_MAP = { Globe, Code, Palette, LineChart, MessageSquare, Smartphone };

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoScrollTimerRef = useRef(null);

  const getIconComponent = useCallback((iconName) => {
    if (!iconName) return Globe;
    const formatted = iconName.charAt(0).toUpperCase() + iconName.slice(1);
    return ICON_MAP[formatted] || Globe;
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/services`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setServices(data);
      } catch (err) {
        console.error('Error fetching services:', err);
        setError('Unable to load services. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const navigateToCard = useCallback((index) => {
    if (isTransitioning || index === currentIndex || !services.length) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [currentIndex, isTransitioning, services.length]);

  useEffect(() => {
    if (!autoScroll || services.length <= 1) return;
    const startAutoScroll = () => {
      autoScrollTimerRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % services.length);
      }, 6000);
    };
    startAutoScroll();
    return () => {
      if (autoScrollTimerRef.current) clearInterval(autoScrollTimerRef.current);
    };
  }, [autoScroll, services.length]);

  const handlePrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    navigateToCard(newIndex);
    setAutoScroll(false);
  }, [currentIndex, services.length, navigateToCard]);

  const handleNext = useCallback(() => {
    const newIndex = (currentIndex + 1) % services.length;
    navigateToCard(newIndex);
    setAutoScroll(false);
  }, [currentIndex, services.length, navigateToCard]);

  if (loading) {
    return (
      <section className="py-12 md:py-20 relative bg-aura-darker overflow-hidden">
        <PremiumAnimatedBackground />
        <div className="relative z-10 flex flex-col items-center justify-center h-64 md:h-96 px-4">
          <div className="bg-aura-card backdrop-blur-2xl rounded-2xl md:rounded-3xl p-8 md:p-12 text-center border border-aura-border shadow-2xl max-w-sm md:max-w-none">
            <div className="relative mb-6 md:mb-8">
              <div className="relative">
                <Loader className="text-white mb-4 mx-auto animate-spin" size={40} />
                <div className="absolute inset-0 bg-gradient-to-r from-aura-primary/20 to-aura-secondary/20 rounded-full blur-xl"></div>
              </div>
              <Sparkles className="absolute -top-2 -right-2 md:-top-3 md:-right-3 text-aura-primary animate-bounce" size={20} />
              <Zap className="absolute -bottom-1 -left-1 md:-left-2 text-aura-secondary animate-pulse" size={16} />
            </div>
            <h3 className="text-white font-black text-xl md:text-2xl mb-2 md:mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Loading Our Services
            </h3>
            <p className="text-gray-300 text-base md:text-lg">Preparing something great for you...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 md:py-20 relative bg-aura-darker overflow-hidden">
        <PremiumAnimatedBackground />
        <div className="relative z-10 max-w-lg mx-auto px-4 flex items-center justify-center h-64 md:h-96">
          <div className="bg-aura-card backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-red-500/30 shadow-2xl">
            <div className="flex items-start">
              <AlertCircle className="text-red-400 mr-3 md:mr-4 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-black text-lg md:text-xl mb-2 md:mb-3">Service Unavailable</h3>
                <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">{error}</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg md:rounded-xl hover:from-red-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-sm md:text-base"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!services.length && !loading && !error) {
    return (
      <section className="py-12 md:py-20 relative bg-aura-darker overflow-hidden">
        <PremiumAnimatedBackground />
        <div className="relative z-10 max-w-lg mx-auto px-4 flex items-center justify-center h-64 md:h-96">
          <div className="bg-aura-card backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-aura-border shadow-2xl">
            <div className="flex items-start">
              <AlertCircle className="text-aura-accent mr-3 md:mr-4 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-black text-lg md:text-xl mb-2 md:mb-3">No Services Available</h3>
                <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">We couldn't find any services to display at this time.</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-aura-primary to-aura-secondary text-white rounded-lg md:rounded-xl hover:from-aura-primary/80 hover:to-aura-secondary/80 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-sm md:text-base"
                >
                  Refresh
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentService = services[currentIndex];

  return (
    <section className="py-12 md:py-20 relative bg-aura-darker overflow-hidden">
      <PremiumAnimatedBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-aura-primary/20 via-white/5 to-aura-secondary/20 rounded-full border border-aura-border mb-6 md:mb-8 backdrop-blur-xl">
            <Zap className="text-aura-primary" size={16} />
            <span className="text-white font-bold text-xs md:text-sm uppercase tracking-wider bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Our Services
            </span>
            <Sparkles className="text-aura-secondary" size={14} />
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-aura-primary/50 to-white bg-clip-text text-transparent drop-shadow-lg">
              Innovative
            </span>
            <br />
            <span className="bg-gradient-to-r from-aura-primary via-aura-secondary to-aura-accent bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          
          <div className="w-24 md:w-32 h-1 md:h-1.5 bg-gradient-to-r from-aura-primary via-aura-secondary to-aura-accent mx-auto mb-6 md:mb-8 rounded-full shadow-lg" />
          
          <p className="text-gray-300 max-w-2xl md:max-w-3xl mx-auto text-base md:text-xl leading-relaxed px-4 md:px-0">
            Transform your business with our comprehensive suite of digital services, 
            designed to help you succeed in today's competitive landscape.
          </p>
        </div>

        <div className="relative">
          <button 
            onClick={handlePrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-xl md:rounded-2xl border border-white/10 text-white hover:from-white/20 hover:to-white/10 transition-all duration-300 shadow-xl hover:shadow-2xl group"
            disabled={isTransitioning}
          >
            <ChevronLeft size={20} className="md:size-7 group-hover:-translate-x-1 transition-transform duration-300 text-aura-primary" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-xl md:rounded-2xl border border-white/10 text-white hover:from-white/20 hover:to-white/10 transition-all duration-300 shadow-xl hover:shadow-2xl group"
            disabled={isTransitioning}
          >
            <ChevronRight size={20} className="md:size-7 group-hover:translate-x-1 transition-transform duration-300 text-aura-primary" />
          </button>

          <div className="flex justify-center items-center min-h-[500px] md:min-h-[600px] px-12 md:px-20">
            <div 
              className={`relative transition-all duration-700 ease-out ${
                isTransitioning ? 'opacity-40 scale-95 blur-sm' : 'opacity-100 scale-100 blur-none'
              }`}
            >
              {currentService && (
                <div className="relative bg-aura-card backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-16 border border-aura-border shadow-2xl hover:shadow-3xl transition-all duration-700 max-w-5xl mx-auto group">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div className="text-center md:text-left order-1 md:order-1">
                      <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-2xl md:rounded-3xl bg-gradient-to-br from-aura-primary via-aura-secondary to-aura-accent p-5 md:p-8 shadow-2xl mb-6 md:mb-10 mx-auto md:mx-0 transform hover:scale-110 hover:rotate-6 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]">
                        <div className="absolute inset-0 bg-white/20 rounded-2xl md:rounded-3xl blur-sm"></div>
                        {React.createElement(getIconComponent(currentService.imageUrl), {
                          size: window.innerWidth < 768 ? 32 : 48,
                          className: "text-white relative z-10"
                        })}
                        <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 bg-aura-accent rounded-full flex items-center justify-center">
                          <Sparkles size={window.innerWidth < 768 ? 8 : 12} className="text-white" />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl md:text-4xl lg:text-6xl font-black text-white mb-4 md:mb-8 leading-tight">
                        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          {currentService.name}
                        </span>
                      </h3>
                      
                      <p className="text-gray-300 text-center md:text-left text-base md:text-xl leading-relaxed mb-6 md:mb-10">
                        {currentService.description}
                      </p>
                      
                      <button className="group/btn inline-flex items-center gap-2 md:gap-4 px-6 md:px-10 py-3 md:py-5 bg-gradient-to-r from-aura-primary to-aura-secondary text-white rounded-xl md:rounded-2xl transition-all duration-500 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] font-black text-base md:text-xl transform hover:-translate-y-1">
                        <Zap size={18} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span>Learn More</span>
                        <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      </button>
                    </div>
                    
                    <div className="space-y-4 md:space-y-8 order-2 md:order-2">
                      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-8 justify-center md:justify-start">
                        <h4 className="text-xl md:text-3xl font-black text-white">Key Features</h4>
                        <Sparkles className="text-aura-accent" size={20} />
                      </div>
                      <div className="grid gap-3 md:gap-6">
                        {currentService.features?.map((feature, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center gap-3 md:gap-5 p-3 md:p-5 bg-white/5 rounded-xl md:rounded-2xl border border-aura-border hover:bg-white/10 transition-all duration-500 group/feature backdrop-blur-xl"
                            style={{ 
                              animationDelay: `${idx * 150}ms`,
                            }}
                          >
                            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r from-aura-primary to-aura-secondary shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover/feature:scale-125 transition-transform duration-300" />
                            <span className="text-gray-300 font-semibold text-sm md:text-lg group-hover/feature:text-white transition-colors duration-300 flex-1">
                              {feature}
                            </span>
                            <Zap size={14} className="text-aura-primary/50 group-hover/feature:text-aura-primary transition-colors duration-300" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center mt-8 md:mt-16 gap-2 md:gap-4">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  navigateToCard(index);
                  setAutoScroll(false);
                }}
                className={`transition-all duration-500 rounded-full border-2 ${
                  index === currentIndex 
                    ? 'w-10 md:w-16 h-3 md:h-4 bg-gradient-to-r from-aura-primary to-aura-secondary border-aura-primary/50 shadow-[0_0_10px_rgba(168,85,247,0.5)]' 
                    : 'w-3 md:w-4 h-3 md:h-4 bg-white/10 border-white/20 hover:bg-white/30 hover:scale-125 hover:border-aura-primary/50'
                }`}
                disabled={isTransitioning}
              />
            ))}
          </div>

          <div className="text-center mt-6 md:mt-10">
            <span className="text-gray-400 font-bold text-sm md:text-lg bg-white/5 px-4 md:px-6 py-1 md:py-2 rounded-full border border-aura-border backdrop-blur-xl">
              {currentIndex + 1} of {services.length} Services
            </span>
          </div>
        </div>

        <div className="text-center mt-16 md:mt-24">
          <a href="/services">
          <button className="group/cta inline-flex items-center gap-3 md:gap-5 px-8 md:px-10 py-4 md:py-8 bg-aura-card backdrop-blur-2xl text-white rounded-2xl md:rounded-3xl border border-aura-border hover:bg-white/10 transition-all duration-700 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] font-black text-lg md:text-2xl transform hover:scale-105">
            <Sparkles className="group-hover/cta:rotate-12 transition-transform duration-500 text-aura-primary" size={24} />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover/cta:text-white transition-colors">
              Explore All Services
            </span>
            <ChevronRight size={24} className="group-hover/cta:translate-x-3 transition-transform duration-500 text-aura-primary" />
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;