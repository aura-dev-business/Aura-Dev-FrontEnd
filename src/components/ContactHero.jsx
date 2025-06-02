import { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitted(false);
    setError(false);

    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      phone: null,
      subject: null,
      service: null,
    };

    try {
      const response = await fetch('http://localhost:8080/api/contact', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      setSubmitted(true);

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting the form:", error);
      setIsSubmitting(false);
      setError(true);
      
      setTimeout(() => setError(false), 5000);
    }
  };

  return (
    <div className=" relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 to-slate-900">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>


      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center  p-8">
        <div className="max-w-6xl w-full">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Get in <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-gray-300 text-xl font-light max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's start a conversation and create something extraordinary together.
            </p>
          </div>

          {/* Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10">
                <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a href="mailto:auradevbusiness@gmail.com" className="text-white hover:text-purple-300 transition-colors">
                        auradevbusiness@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a href="tel:+919188296027" className="text-white hover:text-blue-300 transition-colors">
                        (+91) 9188296027
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white">Bangalore, Karnataka, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={32} className="text-black" />
                    </div>
                    <h4 className="text-2xl font-semibold text-white mb-4">Message Sent Successfully!</h4>
                    <p className="text-gray-300">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                ) : error ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <AlertCircle size={32} className="text-white" />
                    </div>
                    <h4 className="text-2xl font-semibold text-white mb-4">Something went wrong</h4>
                    <p className="text-gray-300">Please try again later or contact us directly via email.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Full Name"
                        className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell Us About Your Project..."
                        rows={5}
                        className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                        required
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full border hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={20} />
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}