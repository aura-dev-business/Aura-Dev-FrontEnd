import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-aspal mb-4">
              <span className="text-red-500">Aura</span>
              <span>Dev</span>
            </h3>
            <p className="text-gray-400">
              Building exceptional digital presence for forward-thinking businesses.
            </p>
          </div>
          
          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-red-500" />
                <span>contact@auradev.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-red-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-2 text-red-500" />
                <span>123 Digital Avenue, Tech City</span>
              </div>
            </div>
          </div>
          
          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Auradev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;