import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Globe,
  Code,
  Palette,
  LineChart,
  MessageSquare,
  Smartphone,
  ArrowRight,
  Loader,
  AlertCircle
} from "lucide-react";
import { motion } from 'framer-motion';

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
  return iconMap[formatted] || null;
};

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const sampleServices = [
      { id: 1, name: "Web Development", description: "Custom websites and web applications...", imageUrl: "Code", features: ["Responsive Design", "CMS Integration", "E-commerce Solutions"] },
      { id: 2, name: "UI/UX Design", description: "User-centered design that enhances UX...", imageUrl: "Palette", features: ["User Research", "Wireframing", "Interactive Prototypes"] },
      { id: 3, name: "Data Analytics", description: "Transform your data into insights...", imageUrl: "LineChart", features: ["Data Visualization", "Performance Metrics", "Custom Dashboards"] },
      { id: 4, name: "Mobile Development", description: "Native and cross-platform mobile apps...", imageUrl: "Smartphone", features: ["iOS & Android", "Cross-Platform", "App Store Optimization"] },
      { id: 5, name: "Digital Marketing", description: "Strategic digital campaigns to boost visibility...", imageUrl: "Globe", features: ["SEO & SEM", "Content Strategy", "Social Media Marketing"] },
      { id: 6, name: "Consultation", description: "Expert advice to help you grow digitally...", imageUrl: "MessageSquare", features: ["Technology Assessment", "Digital Strategy", "Innovation Planning"] },
      { id: 7, name: "Consultation", description: "Expert advice to help you grow digitally...", imageUrl: "MessageSquare", features: ["Technology Assessment", "Digital Strategy", "Innovation Planning"] },
      { id: 8, name: "Consultation", description: "Expert advice to help you grow digitally...", imageUrl: "MessageSquare", features: ["Technology Assessment", "Digital Strategy", "Innovation Planning"] },
    ];

    setTimeout(() => {
      setServices(sampleServices);
      setLoading(false);
    }, 200);
  }, []);

  const handleServiceHover = (id) => {
    setActiveService(id);
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="services">
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
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="services">
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
    <motion.section
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      id="services"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-red-800 opacity-5"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-red-800 opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 font-extrabold tracking-tight">
          <p className="text-red-800 font-extrabold mb-2 uppercase tracking-wide">What We Offer</p>
          <h2 className="text-5xl md:text-6xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-red-600 leading-tight">Our Services</h2>
          <div className="w-32 h-1 mt-5 bg-red-800 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer comprehensive digital solutions tailored to your business needs, helping you stay ahead in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = getIconComponent(service.imageUrl);
            const isActive = activeService === service.id;

            return (
              <motion.div
                key={service.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                onMouseEnter={() => handleServiceHover(service.id)}
                onMouseLeave={() => handleServiceHover(null)}
                className={`bg-white p-8 rounded-xl shadow-md transition-all duration-300 ${
                  isActive ? 'shadow-xl' : ''
                }`}
              >
                <motion.div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                    isActive ? 'bg-red-800 text-white' : 'bg-red-50 text-red-800'
                  }`}
                  animate={{ rotate: isActive ? 360 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {IconComponent ? <IconComponent size={28} /> : <Globe size={28} />}
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {service.features && (
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-red-800 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href="#"
                  className={`inline-flex items-center text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-red-800' : 'text-gray-600 hover:text-red-800'
                  }`}
                >
                  Learn more
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
