import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <div className="relative bg-aura-darker overflow-hidden min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      </div>

      {/* Glow Blobs */}
      <div className="absolute top-1/4 -left-4 w-96 h-96 bg-aura-primary rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-aura-accent rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-aura-secondary rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-4000 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto text-center mt-20">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-aura-primary/30 text-sm font-medium mb-8 hover:bg-white/10 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 mr-2 text-aura-primary" />
            <span className="bg-gradient-to-r from-aura-primary to-aura-accent bg-clip-text text-transparent">
              Next Generation Digital Solutions
            </span>
            <div className="ml-2 w-2 h-2 bg-aura-accent rounded-full animate-pulse" />
          </motion.div>

          {/* Main Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-7xl font-black leading-none mb-6">
              <span className="block text-white">
                Build Your
              </span>
              <span className="block pb-4 bg-gradient-to-r from-aura-primary via-aura-secondary to-aura-accent bg-clip-text text-transparent transform hover:scale-[1.02] transition-transform duration-500">
                Digital Aura
              </span>
            </h1>
            
            {/* Animated underline */}
            <div className="flex justify-center mt-4">
              <div className="w-32 h-1 bg-gradient-to-r from-aura-primary to-aura-secondary rounded-full">
                <div className="w-full h-full bg-gradient-to-r from-aura-secondary to-aura-primary rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Experience the future of digital transformation with our{' '}
            <span className="text-aura-primary font-semibold">AI-powered solutions</span>,{' '}
            <span className="text-aura-secondary font-semibold">cutting-edge design</span>, and{' '}
            <span className="text-aura-accent font-semibold">strategic innovation</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-aura-primary to-aura-secondary text-white font-bold rounded-2xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] border border-white/10">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-white/10" />
              <div className="relative flex items-center">
                <span>Start Your Journey</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </div>
            </button>

            <button className="group flex items-center px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-medium rounded-2xl hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 shadow-lg">
              <Play className="mr-2 group-hover:scale-110 text-aura-accent transition-transform" size={20} />
              Watch Demo
            </button>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16 relative z-10"
          >
            {[
              { icon: "🚀", title: "Lightning Fast", desc: "Optimized performance" },
              { icon: "🎨", title: "Beautiful Design", desc: "Stunning user interfaces" },
              { icon: "🔒", title: "Secure & Reliable", desc: "Enterprise-grade security" }
            ].map((feature, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-aura-card backdrop-blur-md border border-aura-border hover:bg-white/10 hover:border-aura-primary/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)]">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated dots */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-float shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;