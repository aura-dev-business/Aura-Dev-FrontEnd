import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import tech from '../assets/tech.jpg'
import { 
  Loader, 
  AlertCircle, 
  Check, 
  Star, 
  Shield, 
  Clock, 
  Zap, 
  Award, 
  ThumbsUp, 
  Heart, 
  Gift,
  Sparkles,
  ChevronRight,
  Play
} from "lucide-react";
import { motion } from 'framer-motion';
import Footer from './Footer';
import Navigation from './Navigation';
import logo from '../assets/bg.webp';

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/services/${id}`);   
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setService(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching service:", err);
        setError("Failed to load service details. Please try again later.");
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  const getFeatureIcon = (feature, index) => {
    const featureText = feature.toLowerCase();
    
    const icons = [
      { Icon: Check, color: "text-emerald-600", bg: "bg-emerald-50", shadow: "shadow-emerald-100" },
      { Icon: Shield, color: "text-blue-600", bg: "bg-blue-50", shadow: "shadow-blue-100" },
      { Icon: Zap, color: "text-amber-600", bg: "bg-amber-50", shadow: "shadow-amber-100" },
      { Icon: Clock, color: "text-purple-600", bg: "bg-purple-50", shadow: "shadow-purple-100" },
      { Icon: Star, color: "text-yellow-600", bg: "bg-yellow-50", shadow: "shadow-yellow-100" },
      { Icon: Award, color: "text-rose-600", bg: "bg-rose-50", shadow: "shadow-rose-100" },
      { Icon: ThumbsUp, color: "text-teal-600", bg: "bg-teal-50", shadow: "shadow-teal-100" },
      { Icon: Heart, color: "text-pink-600", bg: "bg-pink-50", shadow: "shadow-pink-100" },
      { Icon: Gift, color: "text-indigo-600", bg: "bg-indigo-50", shadow: "shadow-indigo-100" }
    ];
    
    if (featureText.includes('quality') || featureText.includes('premium')) {
      return icons[4];
    } else if (featureText.includes('secure') || featureText.includes('safe') || featureText.includes('protection')) {
      return icons[1];
    } else if (featureText.includes('fast') || featureText.includes('quick') || featureText.includes('speed')) {
      return icons[2];
    } else if (featureText.includes('time') || featureText.includes('hour') || featureText.includes('duration')) {
      return icons[3];
    } else if (featureText.includes('award') || featureText.includes('certified') || featureText.includes('best')) {
      return icons[5];
    } else if (featureText.includes('recommend') || featureText.includes('popular')) {
      return icons[6];
    } else if (featureText.includes('care') || featureText.includes('support')) {
      return icons[7];
    } else if (featureText.includes('bonus') || featureText.includes('free') || featureText.includes('extra')) {
      return icons[8];
    }
    
    return icons[index % icons.length];
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-100 to-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        </div>
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center"
        >
          <div className="relative">
            <Loader className="animate-spin text-red-600 mb-6 mx-auto" size={48} />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-4 border-transparent border-t-red-200 rounded-full"
            />
          </div>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-600 text-lg font-medium"
          >
            Loading service details...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex flex-col items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-sm border border-red-200 rounded-2xl p-8 shadow-2xl max-w-lg mx-auto relative overflow-hidden"
        >
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-100 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
          
          <div className="relative z-10 flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="text-red-600" size={24} />
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-red-800 font-bold text-xl mb-3">Unable to load service</h3>
              <p className="text-red-600 leading-relaxed">{error}</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
                onClick={() => window.location.reload()}
              >
                Try Again
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section with Enhanced Gradient Background */}
      <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ 
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-red-100/40 to-pink-100/40 rounded-full mix-blend-multiply filter blur-xl"
          />
          <motion.div 
            animate={{ 
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full mix-blend-multiply filter blur-xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 py-16 md:py-24"
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            {/* Main Hero Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden mb-16 border border-white/20 relative"
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-blue-500/5 pointer-events-none"></div>
              
              <div className="flex flex-col lg:flex-row relative z-10">
                {/* Content Section */}
                <div className="lg:w-3/5 p-8 md:p-12">
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg"
                  >
                    <Sparkles size={16} />
                    {service.category || 'Professional Service'}
                  </motion.div>
                  
                  <motion.h1 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-4xl md:text-6xl font-black bg-gradient-to-r from-slate-800 via-red-700 to-slate-800 bg-clip-text text-transparent mb-8 leading-tight"
                  >
                    {service.name}
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-xl text-slate-700 leading-relaxed mb-10 font-medium"
                  >
                    {service.description}
                  </motion.p>
                  
                  {/* CTA Button */}
                  <Link to="/contact">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex  items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <Play size={20} />
                    Get Started
                    <ChevronRight size={20} />
                  </motion.button></Link>
                </div>
                
                {/* Enhanced Image Section */}
                <div className="lg:w-2/5 relative p-8">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-200/50 to-blue-200/50 rounded-3xl transform rotate-6 scale-105"></div>
                    <div className="relative bg-white rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                      <img 
                        src={tech} 
                        alt={service.name}
                        className="w-full h-80 object-cover rounded-xl"
                      />
                      {/* Floating badges */}
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 }}
                        className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-xl border border-red-100"
                      >
                        <Star className="text-yellow-500" size={24} />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Enhanced Features Section */}
            {service.features && service.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative"
              >
                {/* Section Header */}
                <div className="text-center mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20 mb-6"
                  >
                    <Sparkles className="text-red-600" size={20} />
                    <span className="text-slate-700 font-semibold">Key Features</span>
                  </motion.div>
                  
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-800 to-red-700 bg-clip-text text-transparent"
                  >
                    Why Choose Us?
                  </motion.h2>
                </div>
                
                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {service.features.map((feature, index) => {
                    const { Icon, color, bg, shadow } = getFeatureIcon(feature, index);
                    
                    return (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 * index + 0.8 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group relative"
                      >
                        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 relative overflow-hidden">
                          {/* Gradient background on hover */}
                          <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Content */}
                          <div className="relative z-10 flex items-start">
                            <motion.div 
                              whileHover={{ rotate: 12, scale: 1.1 }}
                              className="flex-shrink-0 mr-6"
                            >
                              <div className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center shadow-lg ${shadow} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                                <Icon className={`${color} group-hover:scale-110 transition-transform duration-300`} size={24} />
                              </div>
                            </motion.div>
                            <div className="flex-1">
                              <p className="text-lg font-semibold text-slate-800 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                {feature}
                              </p>
                            </div>
                          </div>
                          
                          {/* Decorative element */}
                          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br from-red-100/30 to-transparent rounded-full transform translate-x-10 translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
            
            {/* Enhanced Pricing Section */}
            {service.pricing && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-20"
              >
                <div className="text-center mb-12">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-800 to-red-700 bg-clip-text text-transparent mb-4"
                  >
                    Pricing That Works
                  </motion.h2>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="max-w-2xl mx-auto"
                >
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden relative">
                    {/* Premium badge */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                        ⭐ Premium Package
                      </div>
                    </div>
                    
                    <div className="p-12 text-center">
                      <h3 className="text-2xl font-bold text-slate-800 mb-4">
                        {service.pricing.title || 'Standard Package'}
                      </h3>
                      <div className="mb-6">
                        <span className="text-5xl font-black bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                          {service.pricing.price || 'Contact for Quote'}
                        </span>
                      </div>
                      <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        {service.pricing.description || 'Custom solutions tailored to your specific needs.'}
                      </p>
                      
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                      >
                        Get Quote Now
                        <ChevronRight size={20} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ServiceDetail;