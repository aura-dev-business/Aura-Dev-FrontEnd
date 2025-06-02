import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Star, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);



  return (
    <div className="relative  bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
      {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center  px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mt-32">
          
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-purple-200 text-sm font-medium mb-8 hover:bg-white/15 transition-all duration-300">
            <Sparkles className="w-4 h-4 mr-2 text-purple-300" />
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Next Generation Digital Solutions
            </span>
            <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>

          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-7xl font-black leading-none mb-6">
              <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Build Your
              </span>
              <span className="block pb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Digital Aura
              </span>
            </h1>
            
            {/* Animated underline */}
            <div className="flex justify-center mt-4">
              <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                <div className="w-full h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Experience the future of digital transformation with our{' '}
            <span className="text-purple-300 font-semibold">AI-powered solutions</span>,{' '}
            <span className="text-pink-300 font-semibold">cutting-edge design</span>, and{' '}
            <span className="text-cyan-300 font-semibold">strategic innovation</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group relative px-8 py-4 border text-white font-bold rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/25">
              <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center">
                <span>Start Your Journey</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </div>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>

            <button className="group flex items-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-2xl hover:bg-white/15 transition-all duration-300">
              <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Watch Demo
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[
              { icon: "🚀", title: "Lightning Fast", desc: "Optimized performance" },
              { icon: "🎨", title: "Beautiful Design", desc: "Stunning user interfaces" },
              { icon: "🔒", title: "Secure & Reliable", desc: "Enterprise-grade security" }
            ].map((feature, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated dots */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;