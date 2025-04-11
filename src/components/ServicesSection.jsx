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
    }, 1000);
  }, []);

  const displayedServices = services.slice(0, 4);

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
          <h2 className="text-5xl md:text-6xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-red-600 leading-tight">Our Services</h2>
          <div className="w-[200px] h-1 bg-red-800 mx-auto mt-5 mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer comprehensive digital solutions tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedServices.map((service, index) => {
            const IconComponent = getIconComponent(service.imageUrl);
            const isActive = activeService === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 2 }}
                viewport={{ once: true }}
                className={`bg-white p-8 rounded-xl transition-all duration-300 transform ${
                  isActive ? 'shadow-xl -translate-y-2' : 'shadow-md hover:shadow-lg hover:-translate-y-1'
                }`}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                    isActive ? 'bg-red-800 text-white' : 'bg-red-50 text-red-800'
                  }`}
                >
                  {IconComponent ? <IconComponent size={28} /> : <Globe size={28} />}
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-red-800 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {services.length > 4 && (
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 2 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button
              onClick={() => navigate('/services#services')}
              className="px-8 py-4 bg-red-800 text-white rounded-lg hover:bg-red-700 transition-colors shadow-md hover:shadow-lg flex items-center mx-auto"
            >
              <span>View All Services</span>
              <ArrowRight size={18} className="ml-2" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
