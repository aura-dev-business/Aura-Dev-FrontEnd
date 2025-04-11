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

const iconMap = {
  Globe,
  Code,
  Palette,
  LineChart,
  MessageSquare,
  Smartphone,
};

// Helper function to handle casing issues
const getIconComponent = (iconName) => {
  if (!iconName) return null;
  const formatted = iconName.charAt(0).toUpperCase() + iconName.slice(1); // Capitalize
  return iconMap[formatted] || null;
};

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Sample data for demonstration
    const sampleServices = [
      {
        id: 1,
        name: "Web Development",
        description: "Custom websites and web applications built with the latest technologies for optimal performance and user experience.",
        imageUrl: "Code",
        features: ["Responsive Design", "CMS Integration", "E-commerce Solutions"]
      },
      {
        id: 2,
        name: "UI/UX Design",
        description: "User-centered design that enhances the user experience and creates visually stunning interfaces that drive engagement.",
        imageUrl: "Palette",
        features: ["User Research", "Wireframing", "Interactive Prototypes"]
      },
      {
        id: 3,
        name: "Data Analytics",
        description: "Transform your data into actionable insights with our comprehensive analytics and visualization services.",
        imageUrl: "LineChart",
        features: ["Data Visualization", "Performance Metrics", "Custom Dashboards"]
      },
      {
        id: 4,
        name: "Mobile Development",
        description: "Native and cross-platform mobile applications designed to deliver seamless experiences across all devices.",
        imageUrl: "Smartphone",
        features: ["iOS & Android", "Cross-Platform", "App Store Optimization"]
      },
      {
        id: 5,
        name: "Digital Marketing",
        description: "Strategic digital marketing campaigns that increase visibility, drive traffic, and generate leads for your business.",
        imageUrl: "Globe",
        features: ["SEO & SEM", "Content Strategy", "Social Media Marketing"]
      },
      {
        id: 6,
        name: "Consultation",
        description: "Expert advice and guidance to help you navigate the digital landscape and achieve your business goals.",
        imageUrl: "MessageSquare",
        features: ["Technology Assessment", "Digital Strategy", "Innovation Planning"]
      },
      {
        id: 7,
        name: "Consultation",
        description: "Expert advice and guidance to help you navigate the digital landscape and achieve your business goals.",
        imageUrl: "MessageSquare",
        features: ["Technology Assessment", "Digital Strategy", "Innovation Planning"]
      },
      {
        id: 8,
        name: "Consultation",
        description: "Expert advice and guidance to help you navigate the digital landscape and achieve your business goals.",
        imageUrl: "MessageSquare",
        features: ["Technology Assessment", "Digital Strategy", "Innovation Planning"]
      }
    ];

    // Simulate API fetch
    setTimeout(() => {
      setServices(sampleServices);
      setLoading(false);
    }, 200);
  }, []);

  // Show only first 4 services
  const displayedServices = services;
  
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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="services">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-red-800 opacity-5"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-red-800 opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-red-800 font-semibold mb-2 uppercase tracking-wide">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-red-800 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer comprehensive digital solutions tailored to your business needs, helping you stay ahead in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedServices.map((service) => {
            const IconComponent = getIconComponent(service.imageUrl);
            const isActive = activeService === service.id;
            
            return (
              <div
                key={service.id}
                className={`bg-white p-8 rounded-xl transition-all duration-300 transform ${
                  isActive ? 'shadow-xl -translate-y-2' : 'shadow-md hover:shadow-lg hover:-translate-y-1'
                }`}
                onMouseEnter={() => handleServiceHover(service.id)}
                onMouseLeave={() => handleServiceHover(null)}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 ${
                  isActive ? 'bg-red-800 text-white' : 'bg-red-50 text-red-800'
                }`}>
                  {IconComponent ? (
                    <IconComponent size={28} />
                  ) : (
                    <Globe size={28} />
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                {/* Features list */}
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
              </div>
            );
          })}
        </div>

        {/* Learn More Button */}
        {/* {services.length > 4 && (
          <div className="text-center mt-16">
            <button
              onClick={() => navigate('/services#services')}
              className="px-8 py-4 bg-red-800 text-white rounded-lg hover:bg-red-700 transition-colors shadow-md hover:shadow-lg flex items-center mx-auto"
            >
              <span>View All Services</span>
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        )} */}
        
        {/* Statistics section */}
        {/* <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "200+", label: "Projects Completed" },
            { value: "50+", label: "Expert Team Members" },
            { value: "10+", label: "Years of Experience" },
            { value: "95%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-red-800 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
         */}
        {/* Call to action */}
        {/* <div className="mt-24 bg-gradient-to-r from-red-800 to-red-700 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Ready to get started?</h3>
              <p className="text-white text-opacity-90">Contact our team for a free consultation today.</p>
            </div>
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-white text-red-800 rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-md"
            >
              Contact Us
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;