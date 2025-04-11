import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Zap } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full opacity-60 blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-50 rounded-full opacity-80 blur-3xl -translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            {/* Left Content */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-red-800 to-red-700 p-12 md:p-16 text-white">
              <motion.h2
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
              >
                Ready to Transform Your Digital Presence?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-lg md:text-xl opacity-90 mb-8 font-light"
              >
                Let's create something extraordinary together that captivates your audience and drives results.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4 mb-8"
              >
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-full mr-4">
                    <Zap size={20} className="text-yellow-300" />
                  </div>
                  <div>
                    <h4 className="font-medium">Accelerate Your Growth</h4>
                    <p className="text-sm opacity-80">Strategic solutions tailored to your business goals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-full mr-4">
                    <MessageSquare size={20} className="text-yellow-300" />
                  </div>
                  <div>
                    <h4 className="font-medium">Dedicated Support</h4>
                    <p className="text-sm opacity-80">Expert team committed to your success</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-red-800 font-medium rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
                >
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </Link>
              </motion.div>
            </div>

            {/* Right Content - Testimonial */}
            <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mb-8"
              >
                <svg className="h-10 w-10 text-red-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
              </motion.div>

              <motion.blockquote
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-xl font-light text-gray-600 italic mb-6"
              >
                AuraDev transformed our online presence completely. Their team delivered beyond our expectations with a beautiful website that's driving real business results.
              </motion.blockquote>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center"
              >
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Marketing Director, TechFirm Inc.</p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-10 flex items-center justify-end"
              >
                <Link to="/testimonials" className="text-red-800 hover:text-red-700 font-medium text-sm flex items-center">
                  Read more success stories
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;