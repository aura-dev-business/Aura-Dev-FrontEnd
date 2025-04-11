import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Send, 
  Check, 
  AlertCircle 
} from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';



const ContactPage = () => {
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

  const services = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile App Development' },
    { value: 'ui-ux', label: 'UI/UX Design' },
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'consulting', label: 'IT Consulting' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, info: { error: false, msg: null } });

    try {
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success simulation
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Message sent successfully!' }
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null }
        });
      }, 5000);
      
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'Something went wrong. Please try again later.' }
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-20">
      {/* Hero Section */}
      <section className="relative bg-red-800 text-white py-24 md:py-32 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-red-500"></div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-red-600"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              We'd love to hear from you. Let's start a conversation about your digital needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Contact Info Panel */}
            <div className="lg:col-span-2 bg-gradient-to-br from-red-800 to-red-900 text-white p-8 lg:p-12">
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="opacity-80 mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-full mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm opacity-70">Email</p>
                      <a href="mailto:contact@auradev.com" className="hover:underline">
                        auradevbusiness@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-full mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm opacity-70">Phone</p>
                      <a href="tel:+15551234567" className="hover:underline">
                        +1 9188296027
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
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
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-full mr-4">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-sm opacity-70">Business Hours</p>
                      <p>Monday - Friday: 9AM - 5PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div>
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
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3 p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
              
              {status.info.msg && (
                <div className={`mb-6 p-4 rounded-lg flex items-start ${status.info.error ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}`}>
                  {status.info.error ? (
                    <AlertCircle size={20} className="mr-3 flex-shrink-0 mt-0.5" />
                  ) : (
                    <Check size={20} className="mr-3 flex-shrink-0 mt-0.5" />
                  )}
                  <span>{status.info.msg}</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
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
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
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
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
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
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
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
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
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
                </div>
                
                <div className="mb-6">
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
                </div>
                
                <button
                  type="submit"
                  disabled={status.submitting}
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
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* {Map Section} */}
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <MapPin size={24} className="mr-2 text-red-800" />
            Our Location
          </h3>
          
          Map placeholder - in real implementation, replace with actual map component */}
          {/* <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-4 text-red-800" />
                <p className="text-gray-500">Map would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
       */}
      {/* FAQs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about working with us? Find quick answers to common inquiries below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
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
          ].map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-start">
                <MessageSquare size={20} className="mr-2 text-red-800 mt-1 flex-shrink-0" />
                {faq.q}
              </h4>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;