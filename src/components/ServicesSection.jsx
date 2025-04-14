import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Globe,
  Code,
  Palette,
  LineChart,
  MessageSquare,
  Smartphone,
  ArrowRight,
  ArrowLeft,
  Loader,
  AlertCircle,
} from "lucide-react";
import { motion } from 'framer-motion';
import './Scrolling.css';

const iconMap = {
  Globe,
  Code,
  Palette,
  LineChart,
  MessageSquare,
  Smartphone,
};

const getIconComponent = (iconName) => {
  if (!iconName) return null;
  const formatted = iconName.charAt(0).toUpperCase() + iconName.slice(1);
  return iconMap[formatted] || Globe; // Default to Globe if no match
};

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollContainerRef = useRef(null); // Ref for the scrollable container
  const [isAtStart, setIsAtStart] = useState(true); // Track if at the start of the list
  const [isAtEnd, setIsAtEnd] = useState(false); // Track if at the end of the list
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/services`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log("Starting");
        const data = await response.json();
        console.log(data);
        console.log("Ending");
        // Validate and format the data
        const formattedData = data.map(service => ({
          id: service.id,
          name: service.name || "Unnamed Service",
          description: service.description || "No description available.",
          imageUrl: service.imageUrl || "Globe",
          features: Array.isArray(service.features) ? service.features : []
        }));

        setServices(formattedData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching services:", err);
        setError("Failed to load services. Please try again later.");
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust the scroll amount as needed
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust the scroll amount as needed
        behavior: 'smooth',
      });
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center justify-center h-64">
            <Loader className="animate-spin text-red-800 mb-4" size={40} />
            <p className="text-gray-600">Loading our services...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 inline-flex items-start max-w-lg mx-auto">
            <AlertCircle className="text-red-600 mr-3 flex-shrink-0 mt-1" size={24} />
            <div className="text-left">
              <h3 className="text-red-800 font-semibold mb-2">Unable to load services</h3>
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="services">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-red-800 opacity-5"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-red-800 opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-center mb-16 font-extrabold"
        >
          <p className="text-red-800 font-extrabold mb-2 uppercase tracking-wide">What We Offer</p>
          <h2 className="text-5xl md:text-6xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-red-600 leading-tight">
            Our Services
          </h2>
          <div className="w-[200px] h-1 bg-red-800 mx-auto mt-5 mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer comprehensive digital solutions tailored to your business needs.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Left Button */}
          {!isAtStart && (
            <button
              onClick={scrollLeft}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-800 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition z-20"
            >
              <ArrowLeft size={24} />
            </button>
          )}

          {/* Scrollable Services Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto space-x-6 scrollbar-hide px-4"
            style={{ overflowY: 'hidden' }} // Prevent vertical scrolling
          >
            {services.map((service, index) => {
              const IconComponent = getIconComponent(service.imageUrl);

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 2 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:scale-110 hover:-rotate-1 hover:bg-red-50 transition-transform duration-300 flex-shrink-0 w-96"
                >
                  <div className="w-16 h-16 rounded-full bg-red-50 text-red-800 flex items-center justify-center mb-6">
                    {IconComponent ? <IconComponent size={28} /> : <Globe size={28} />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  {/* Features List */}
                  {service.features.length > 0 && (
                    <ul className="text-gray-700 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-red-800 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right Button */}
          {!isAtEnd && (
            <button
              onClick={scrollRight}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-800 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition z-20"
            >
              <ArrowRight size={24} />
            </button>
          )}

          {/* View All Services Button */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 2 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button
              onClick={() => navigate('/services')}
              className="px-8 py-4 bg-red-800 text-white rounded-lg hover:bg-red-700 transition-colors shadow-md hover:shadow-lg flex items-center mx-auto"
            >
              <span>View All Services</span>
              <ArrowRight size={18} className="ml-2" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
