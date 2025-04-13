import React from 'react'
import { motion } from 'framer-motion';
import {MessageSquare } from 'lucide-react';

const FAQ = () => {

    const container = {
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15
          }
        }
      };

      const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
      };

    const faqData = [
        {
          q: "What is your typical response time?",
          a: "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please contact us directly by phone."
        },
        {
          q: "Do you offer free consultations?",
          a: "Yes, we offer a free 30-minute initial consultation to discuss your project needs and how we can help."
        },
        {
          q: "What information should I provide for a quote?",
          a: "To provide an accurate quote, please share your project scope, timeline, and specific requirements. The more details you provide, the more precise our estimate will be."
        },
        {
          q: "Do you work with international clients?",
          a: "Absolutely! We work with clients worldwide and have experience managing projects across different time zones."
        }
      ];
      
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Have questions about working with us? Find quick answers to common inquiries below.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md"
            variants={item}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-start">
              <MessageSquare size={20} className="mr-2 text-red-800 mt-1 flex-shrink-0" />
              {faq.q}
            </h4>
            <p className="text-gray-600">{faq.a}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>

    </div>
  )
}

export default FAQ
