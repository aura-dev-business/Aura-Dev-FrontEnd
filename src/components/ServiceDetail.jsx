import React, { useEffect, useState } from 'react';
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
  Gift 
} from "lucide-react";
import { motion } from 'framer-motion';
import Footer from './Footer'; // Assuming you have a Footer component
import Navigation from './Navigation'; // Assuming you have a Navigation component
import logo from '../assets/bg.webp';

const ServiceDetail = () => {
  const { id } = useParams(); // Get the service ID from the URL
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

  // Function to determine icon based on feature text or index
  const getFeatureIcon = (feature, index) => {
    const featureText = feature.toLowerCase();
    
    // Array of available icons with their corresponding colors
    const icons = [
      { Icon: Check, color: "text-green-700", bg: "bg-green-100" },
      { Icon: Shield, color: "text-blue-700", bg: "bg-blue-100" },
      { Icon: Zap, color: "text-yellow-700", bg: "bg-yellow-100" },
      { Icon: Clock, color: "text-purple-700", bg: "bg-purple-100" },
      { Icon: Star, color: "text-amber-700", bg: "bg-amber-100" },
      { Icon: Award, color: "text-red-700", bg: "bg-red-100" },
      { Icon: ThumbsUp, color: "text-teal-700", bg: "bg-teal-100" },
      { Icon: Heart, color: "text-pink-700", bg: "bg-pink-100" },
      { Icon: Gift, color: "text-indigo-700", bg: "bg-indigo-100" }
    ];
    
    // Choose icon based on keywords in the feature text
    if (featureText.includes('quality') || featureText.includes('premium')) {
      return icons[4]; // Star
    } else if (featureText.includes('secure') || featureText.includes('safe') || featureText.includes('protection')) {
      return icons[1]; // Shield
    } else if (featureText.includes('fast') || featureText.includes('quick') || featureText.includes('speed')) {
      return icons[2]; // Zap
    } else if (featureText.includes('time') || featureText.includes('hour') || featureText.includes('duration')) {
      return icons[3]; // Clock
    } else if (featureText.includes('award') || featureText.includes('certified') || featureText.includes('best')) {
      return icons[5]; // Award
    } else if (featureText.includes('recommend') || featureText.includes('popular')) {
      return icons[6]; // ThumbsUp
    } else if (featureText.includes('care') || featureText.includes('support')) {
      return icons[7]; // Heart
    } else if (featureText.includes('bonus') || featureText.includes('free') || featureText.includes('extra')) {
      return icons[8]; // Gift
    }
    
    // Use a cyclic pattern for features without specific keywords
    return icons[index % icons.length];
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <Loader className="animate-spin text-red-800 mb-4" size={40} />
        <p className="text-gray-600">Loading service details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50 ">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 inline-flex items-start max-w-lg shadow-md">
          <AlertCircle className="text-red-600 mr-3 flex-shrink-0 mt-1" size={24} />
          <div className="text-left">
            <h3 className="text-red-800 font-semibold mb-2">Unable to load service</h3>
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>

      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="py-12 mt-10 md:py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Hero Section with Image */}
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden mb-12">
            <div className="flex flex-col lg:flex-row">
              {/* Content Section */}
              <div className="lg:w-3/5 p-6 md:p-10">
                <div className="bg-red-700  text-white inline-block px-4 py-1 rounded-full text-sm font-medium mb-4">
                  {service.category || 'Professional Service'}
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-red-700  mb-6 leading-tight">
                  {service.name}
                </h1>
                <p className="text-lg text-gray-700 font-extrabold leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>
              
              {/* Image Section */}
              <div className="lg:w-2/5 relative">
                <div className="h-30">
                  {service.imageUrl ? (
                    <img 
                      src={tech} 
                      alt={service.name}
                      div className="w-[70vh] h-[40vh] mt-8 border-[10px]   border-black hover:scale-105 hover:  transition-transform duration-500" 
                      />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center p-8">
                      <img 
                        src={tech} 
                        alt={`${service.name} illustration`}
                        className="w-full h-full object-contain opacity-70"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Features Section with Different Icons */}
          {service.features && service.features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-xl p-6 md:p-10 border border-gray-100"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                <span className="inline-block pb-2 border-b-4 border-red-700">Key Features</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.features.map((feature, index) => {
                  const { Icon, color, bg } = getFeatureIcon(feature, index);
                  
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-gray-200 hover:border-l-4 hover:border-red-600"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center shadow-sm`}>
                            <Icon className={color} size={20} />
                          </div>
                        </div>
                        <div>
                          <p className="text-lg font-medium text-gray-800">{feature}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
          
          {/* Pricing or Additional Info Section */}
          {service.pricing && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 bg-white shadow-lg rounded-xl p-6 md:p-10"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-center">
                <span className="inline-block pb-2 border-b-4 border-red-700">Pricing Options</span>
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-inner">
                <p className="text-xl font-medium text-gray-900 mb-2">{service.pricing.title || 'Standard Package'}</p>
                <p className="text-3xl font-bold text-red-800 mb-4">
                  {service.pricing.price || 'Contact for Quote'}
                </p>
                <p className="text-gray-700">{service.pricing.description || 'Custom solutions tailored to your specific needs.'}</p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default ServiceDetail;