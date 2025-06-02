import React, { useState, useEffect } from 'react';
import {
  Globe,
  Code,
  Palette,
  LineChart,
  MessageSquare,
  Smartphone,
  ArrowRight,
  Sparkles,
  Star,
  Monitor,
  Zap
} from "lucide-react";

const iconMap = {
  Globe,
  Code,
  Palette,
  LineChart,
  MessageSquare,
  Smartphone,
  Monitor,
  Zap
};

const getIconComponent = (iconName) => {
  if (!iconName) return Globe;
  const formatted = iconName.charAt(0).toUpperCase() + iconName.slice(1);
  return iconMap[formatted] || Globe;
};

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/services`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setServices(data);
      } catch (err) {
        console.error('Error fetching services:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleServiceHover = (id) => {
    setActiveService(id);
  };

  if (loading) {
    return (
      <section className="py-20 relative overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="relative z-10 text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-white/80 text-lg">Loading our amazing services...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-900 to-slate-950"></div>
        <div className="relative z-10 text-center">
          <div className="text-red-400 text-6xl mb-4">⚠️</div>
          <h3 className="text-white text-2xl font-bold mb-2">Failed to Load Services</h3>
          <p className="text-white/80 text-lg mb-4">Error: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden min-h-screen py-24" id="services">
      {/* Animated Background SVG */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="50%" stopColor="#312e81" />
              <stop offset="100%" stopColor="#0f0f23" />
            </radialGradient>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#grad1)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="text-purple-400" size={16} />
            <span className="text-purple-300 font-medium text-sm uppercase tracking-wider">
              What We Offer
            </span>
          </div>
          
          <h2 className="text-6xl md:text-7xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight block">
              Our Services
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-slate-300 max-w-3xl mx-auto text-xl leading-relaxed">
            We craft exceptional digital experiences that transform your vision into reality, 
            combining cutting-edge technology with stunning design.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = getIconComponent(service.imageUrl || service.icon);
            const isActive = activeService === service.id;

            return (
              <div
                key={service.id}
                className={`group relative transform transition-all duration-500 hover:scale-105 ${
                  isActive ? 'scale-105' : ''
                }`}
                onMouseEnter={() => handleServiceHover(service.id)}
                onMouseLeave={() => handleServiceHover(null)}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Card Background with Glassmorphism */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full overflow-hidden">
                  {/* Icon */}
                  <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    isActive 
                      ? `bg-gradient-to-r ${
                          index % 4 === 0 ? 'from-purple-500 to-pink-500' :
                          index % 4 === 1 ? 'from-blue-500 to-cyan-500' :
                          index % 4 === 2 ? 'from-emerald-500 to-teal-500' :
                          'from-orange-500 to-red-500'
                        } text-white shadow-lg` 
                      : 'bg-white/10 text-white/70 group-hover:bg-white/20'
                  }`}>
                    {IconComponent && (
                      <IconComponent 
                        size={28} 
                        className={`transition-transform duration-300 ${
                          isActive ? 'scale-110' : 'group-hover:scale-105'
                        }`}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-400 group-hover:text-slate-300 transition-colors">
                          <div className={`w-2 h-2 rounded-full mr-3 ${
                            index % 4 === 0 ? 'bg-purple-400' :
                            index % 4 === 1 ? 'bg-blue-400' :
                            index % 4 === 2 ? 'bg-emerald-400' :
                            'bg-orange-400'
                          }`}></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Hover effect arrow */}
                  <div className={`absolute bottom-6 right-6 transition-all duration-300 ${
                    isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                  }`}>
                    <ArrowRight className="text-white/60" size={20} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {services.length === 0 && !loading && !error && (
          <div className="text-center py-20">
            <div className="text-white/40 text-6xl mb-4">📋</div>
            <h3 className="text-white text-2xl font-bold mb-2">No Services Available</h3>
            <p className="text-white/60">Services will appear here once they're added to the system.</p>
          </div>
        )}

        {/* Bottom decoration */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-2 text-slate-400">
            <Star className="w-4 h-4" />
            <span className="text-sm">Crafted with passion and precision</span>
            <Star className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;