import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-800 rounded-full opacity-5 blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500 rounded-full opacity-5 blur-3xl -translate-x-1/2"></div>

      <motion.div 
        className="border-b border-gray-800" 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true }} 
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold">Stay updated with our latest news</h3>
              <p className="text-gray-400 text-sm">Subscribe to our newsletter</p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Enter your email" 
                  className="px-4 py-3 bg-gray-800 text-white rounded-l-lg focus:outline-none  focus:ring-red-500 w-full md:w-64 z-10"
                />
                <button className="bg-red-700 hover:bg-red-600 px-4 py-3 rounded-r-lg transition-colors duration-300 flex items-center z-10">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-baseline mb-6">
              <h3 className="text-3xl font-bold">
                <span className="text-red-500">Aura</span>
                <span>Dev</span>
              </h3>
              <span className="ml-1 text-xs text-red-500">™</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building exceptional digital presence for forward-thinking businesses worldwide.
            </p>
            <div className="flex space-x-4">
              {[Linkedin, Twitter, Instagram, Facebook].map((Icon, index) => (
                <a key={index} href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-700 flex items-center justify-center transition-colors duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

       <div>
  <h4 className="text-lg font-semibold mb-6 relative inline-block">
    Quick Links
    <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-red-500"></span>
  </h4>
  <ul className="space-y-3">
    {["Home Page", "About Us", "Services", "Contact Us"].map((item, index = {Home_page,About_us}) => {
      return (
        <li key={index}>
          <a
            href={[]}
            className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
          >
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
            {item}
          </a>
        </li>
      );
    })}
  </ul>
</div>


          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-red-500"></span>
            </h4>
            <ul className="space-y-3">
              {["Web Development", "Mobile Apps", "UI/UX Design"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-red-500"></span>
            </h4>
            <div className="space-y-4">
              {[{
                icon: <Mail size={18} className="mr-3 text-red-500 mt-1 flex-shrink-0" />,
                label: "Email Us:",
                content: <a href="mailto:auradevbusiness@gmail.com" className="hover:text-red-400 transition-colors">auradevbusiness@gmail.com</a>,
              }, {
                icon: <Phone size={18} className="mr-3 text-red-500 mt-1 flex-shrink-0" />,
                label: "Call Us:",
                content: <a href="tel:+919188296027" className="hover:text-red-400 transition-colors">+91 9188296027</a>,
              }, {
                icon: <MapPin size={18} className="mr-3 text-red-500 mt-1 flex-shrink-0" />,
                label: "Location:",
                content: <address className="not-italic">Bangalore<br />Karnataka, India</address>,
              }].map((item, index) => (
                <div key={index} className="flex items-start">
                  {item.icon}
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AuraDev. All rights reserved. <span className="mx-2">|</span>
            <a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-red-400 transition-colors">Terms of Service</a>
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;