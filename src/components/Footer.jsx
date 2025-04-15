import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/auradev' },
    { icon: Twitter, href: 'https://twitter.com/auradev' },
    { icon: Instagram, href: 'https://www.instagram.com/auradevco/?igsh=MXFwMGcxamw0Ymdvcw%3D%3D#' },
    { icon: Facebook, href: 'https://facebook.com/auradev' },
  ];
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ submitting: false, success: false, error: false });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });


    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setStatus({ submitting: false, success: true, error: false });
      setEmail(''); // Clear the input field
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setStatus({ submitting: false, success: false, error: true });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Newsletter Subscription */}
      <motion.div
        className="border-b border-gray-800"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold">Stay updated with our latest news</h3>
              <p className="text-gray-400 text-sm">Subscribe to our newsletter</p>
            </div>
            <div className="w-full md:w-auto">
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-red-500 w-full md:w-64 z-10"
                  required
                />
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="bg-red-700 hover:bg-red-600 px-4 py-3 rounded-r-lg transition-colors duration-300 flex items-center z-10"
                >
                  {status.submitting ? 'Subscribing...' : <Send size={18} />}
                </button>
              </form>
              {status.success && (
                <p className="text-green-500 text-sm mt-2">Subscribed successfully!</p>
              )}
              {status.error && (
                <p className="text-red-500 text-sm mt-2">Failed to subscribe. Please try again.</p>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Other Footer Content */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-baseline mb-6">
              <h3 className="text-3xl font-bold">
                <span className="text-red-500 font-aspal">Aura</span>
                <span className='font-aspal'>Dev</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-6">
              Building exceptional digital presence for forward-thinking businesses worldwide.
            </p>


<div className="flex space-x-4">
  {socialLinks.map(({ icon: Icon, href }, index) => (
    <a
      key={index}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-700 flex items-center justify-center transition-colors duration-300"
    >
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
  {[
    { name: "Home Page", link: "/" },
    { name: "About Us", link: "/About_us" },
    { name: "Services", link: "/services" },
    { name: "Contact Us", link: "/contact" }
  ].map((item, index) => {
    return (
      <li key={index}>
        <a
          href={item.link}
          className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
        >
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
          {item.name}
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
                content: <address className="not-italic">Bangalore,Karnataka, India</address>,
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

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
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