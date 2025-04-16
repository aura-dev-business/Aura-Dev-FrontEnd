import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      phone: null, // Other fields set to null
      subject: null,
      service: null,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Automatically hide the success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Error submitting the form:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-10 font-extrabold"
        >
          <h3 className="capitalize text-5xl md:text-6xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-red-600 leading-tight">
            Get in touch
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow space-y-8"
          >
            <div className="flex items-start space-x-3">
              <div className="bg-indigo-100 p-2 rounded-full text-black">
                <Mail size={16} />
              </div>
              <div>
                <p className="text-xs font-medium text-black">Email</p>
                <a href="mailto:auradevbusiness@gmail.com" className="text-sm text-black hover:text-indigo-800 transition-colors">
                  auradevbusiness@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-indigo-100 p-2 rounded-full text-black">
                <Phone size={16} />
              </div>
              <div>
                <p className="text-xs font-medium text-black">Phone</p>
                <a href="tel:+919188296027" className="text-sm text-black hover:text-indigo-800 transition-colors">
                  (+91) 9188296027
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-indigo-100 p-2 rounded-full text-black">
                <MapPin size={16} />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">Address</p>
                <p className="text-sm text-gray-700">
                  Bangalore, Karnataka, India
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="bg-green-50 border border-green-200 rounded-lg p-4 text-center"
              >
                <p className="text-green-700 text-sm">Thanks for reaching out! We'll be in touch soon.</p>
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-3"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.2 }}
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows="2"
                  className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  required
                ></textarea>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-br from-red-800 to-red-700 hover:from-red-700 hover:to-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
