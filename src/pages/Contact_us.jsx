import React, { useState, useEffect } from 'react';
import {Mail,Phone,MapPin,MessageSquare,Clock,Send,Check,AlertCircle } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import SuccessModal from '../components/SuccessModal'; // Import the modal component
import FAQ from '../components/FAQ';
import { motion } from 'framer-motion';

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

const ContactPage = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  });
  const icons = {
    facebook: <FaFacebookF />,
    twitter: <FaTwitter />,
    linkedin: <FaLinkedinIn />,
    instagram: <FaInstagram />,
  };
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const [services, setServices] = useState([]); // State to store services
  const [loadingServices, setLoadingServices] = useState(true); // State to handle loading
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/services"); // Fetch services from backend
        const data = await response.json();
        const formattedServices = data.map(service => ({
          value: service.name.toLowerCase().replace(/\s+/g, '-'),
          label: service.name
        }));
        setServices(formattedServices);
        setLoadingServices(false);
      } catch (error) {
        console.error("Failed to fetch services:", error);
        setLoadingServices(false);
      }
    };
  
    // Check if services are already in localStorage (cache)
    const cachedServices = localStorage.getItem("services");
    if (cachedServices) {
      setServices(JSON.parse(cachedServices));
      setLoadingServices(false);
    } else {
      fetchServices();
    }
  }, []);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, info: { error: false, msg: null } });

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      const result = await response.json();

      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Message sent successfully!" },
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        service: "",
      });

      // Open the success modal
      setIsModalOpen(true);

      // Automatically close the modal after 5 seconds
      setTimeout(() => {
        setIsModalOpen(false);
      }, 5000);
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "Something went wrong. Please try again later." },
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-20">
      {/* Success Modal */}
      <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero Section */}


    <section className="relative bg-red-800 text-white py-24 md:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-red-500"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-red-600"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Get in Touch
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            We'd love to hear from you. Let's start a conversation about your digital needs.
          </motion.p>
        </div>
      </div>
    </section>
  


      {/* Main Content */}
      <motion.section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <motion.div
        className="bg-white rounded-xl shadow-xl overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Contact Info Panel */}
          <motion.div
            className="lg:col-span-2 bg-gradient-to-br from-red-800 to-red-900 text-white p-8 lg:p-12"
            variants={fadeUp}
          >
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="opacity-80 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <motion.div className="flex items-start" variants={fadeUp}>
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm opacity-70">Email</p>
                    <a href="mailto:contact@auradev.com" className="hover:underline">
                      auradevbusiness@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div className="flex items-start" variants={fadeUp}>
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm opacity-70">Phone</p>
                    <a href="tel:+91" className="hover:underline">
                      +91 9188296027
                    </a>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div className="flex items-start" variants={fadeUp}>
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm opacity-70">Address</p>
                    <address className="not-italic">
                      Bangalore <br />
                      Karnataka, India
                    </address>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div className="flex items-start" variants={fadeUp}>
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-sm opacity-70">Business Hours</p>
                    <p>Monday - Friday: 9AM - 5PM</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Socials */}
            <motion.div variants={fadeUp}>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="bg-white/10 hover:bg-white/20 transition-colors w-10 h-10 rounded-full flex items-center justify-center text-white text-xl"
                    aria-label={platform}
                  >
                    {icons[platform]}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="lg:col-span-3 p-8 lg:p-12" variants={fadeUp}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>

            {/* Success or Error Message */}
            {status.info.msg && (
              <motion.div
                className={`mb-6 p-4 rounded-lg flex items-start ${
                  status.info.error ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'
                }`}
                variants={fadeUp}
              >
                {status.info.error ? (
                  <AlertCircle size={20} className="mr-3 flex-shrink-0 mt-0.5" />
                ) : (
                  <Check size={20} className="mr-3 flex-shrink-0 mt-0.5" />
                )}
                <span>{status.info.msg}</span>
              </motion.div>
            )}

            {/* Contact Form */}
            <motion.form onSubmit={handleSubmit} variants={fadeUp}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* Full Name */}
                <motion.div variants={fadeUp}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter Your Name"
                  />
                </motion.div>

                {/* Email */}
                <motion.div variants={fadeUp}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="john@gmail.com"
                  />
                </motion.div>

                {/* Phone */}
                <motion.div variants={fadeUp}>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="+91 123456789"
                  />
                </motion.div>

                {/* Service Dropdown */}
                <motion.div variants={fadeUp}>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {loadingServices ? (
                      <option disabled>Loading services...</option>
                    ) : (
                      services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))
                    )}
                  </select>
                </motion.div>
              </div>

              {/* Subject */}
              <motion.div className="mb-6" variants={fadeUp}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </motion.div>

              {/* Message */}
              <motion.div className="mb-6" variants={fadeUp}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status.submitting}
                variants={fadeUp}
                className={`inline-flex items-center justify-center px-6 py-3 rounded-lg bg-red-800 text-white font-medium transition-all duration-300 
                  ${status.submitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-red-700 hover:shadow-lg'}`}
              >
                {status.submitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="ml-2" />
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  

      
      {/* Map Section */}
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <MapPin size={24} className="mr-2 text-red-800" />
            Our Location
          </h3> */}
          
          {/* Map placeholder - in real implementation, replace with actual map component */}
      
      
      {/* FAQs Section */}
      
      <FAQ/>
    </div>
  );
};

export default ContactPage;