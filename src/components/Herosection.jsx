import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-20 mt-10">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-800 text-sm font-medium mb-6">
              <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-red-700"></span>
              Digital Solutions Company
            </div>
            
            <h1 className="font-extrabold tracking-tight mb-6">
              <span className="text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-red-600 leading-tight">
                Build Your
              </span>
              <br />
              <span className="text-5xl md:text-6xl lg:text-7xl text-gray-800 leading-tight">
                Digital Aura
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 2 }}
              className="text-xl text-gray-600 mb-8 max-w-lg font-light leading-relaxed"
            >
              Transform your business presence in the digital space with 
              <span className="font-medium"> cutting-edge solutions</span> and
              <span className="font-medium"> strategic innovation</span>.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-800 to-red-700 text-white font-medium rounded-lg shadow-lg shadow-red-700/20 hover:shadow-red-700/40 transition-all duration-300 transform hover:translate-y-[-2px] group"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-800 font-medium rounded-lg border border-gray-200 shadow-sm hover:bg-gray-50 transition-all duration-300"
                >
                  Contact Us
                  <ChevronRight className="ml-1" size={18} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Frame */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="absolute -top-10 -left-10 w-24 h-24  rounded-full opacity-20 blur-lg"></div>
            <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-blue-200 rounded-full opacity-20 blur-lg"></div>
            
            <motion.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="relative rounded-2xl bg-white p-3 shadow-2xl transform rotate-1 transition-transform duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-red-800/10 to-transparent rounded-2xl"></div>
              
              <div className="rounded-xl overflow-hidden border border-gray-100">
                <img
                  src={bg}
                  alt="Digital Aura Technologies"
                  className="w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
