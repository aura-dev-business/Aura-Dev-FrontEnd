import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, Users, Check, ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with audiences worldwide through strategic digital presence and localized solutions.",
      benefits: ["Multilingual support", "Cultural adaptation", "Global market insights"]
    },
    {
      icon: Zap,
      title: "Innovative Solutions",
      description: "Stay ahead with cutting-edge technology and creative digital strategies tailored to your needs.",
      benefits: ["Latest technologies", "Future-proof systems", "Agile development"]
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Work with passionate professionals dedicated to your digital success and business growth.",
      benefits: ["Certified developers", "Industry specialists", "Dedicated support"]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
      <div className="absolute right-0 top-0 h-40 w-40 bg-red-50 rounded-full blur-3xl opacity-60 -translate-y-1/2"></div>
      <div className="absolute left-0 bottom-0 h-64 w-64 bg-red-50 rounded-full blur-3xl opacity-70 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-3 py-1 bg-red-50 rounded-full text-red-800 text-sm font-medium mb-3">
            Our Advantages
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
            Why Choose AuraDev?
          </h2>
          <p className="text-lg text-gray-600">
            We combine expertise, innovation, and dedication to deliver exceptional digital experiences that transform businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="relative group bg-white p-8 rounded-2xl border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-all duration-300 hover:border-red-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center shadow-inner group-hover:bg-gradient-to-br group-hover:from-red-100 group-hover:to-red-200 transition-all duration-300">
                  <feature.icon className="text-red-800" size={28} />
                </div>
                <h3 className="text-xl font-bold ml-4 text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">
                {feature.description}
              </p>
              <ul className="space-y-2 mb-8">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <Check size={16} className="text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-gray-100">
                <a 
                  href="#" 
                  className="inline-flex items-center text-red-800 font-medium text-sm group-hover:underline"
                >
                  Learn more 
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-800 opacity-0 group-hover:opacity-100 rounded-bl-xl rounded-tr-xl transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <a 
            href="/about-us" 
            className="inline-flex items-center px-6 py-3 bg-red-800 text-white font-medium rounded-lg hover:bg-red-900 transition-colors"
          >
            Discover Our Process
            <ArrowRight size={16} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;