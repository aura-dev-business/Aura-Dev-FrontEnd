import React from 'react';
import { Globe, Zap, Users } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-16">Why Choose Auradev?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
              <Globe className="text-red-800" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Global Reach</h3>
            <p className="text-gray-600">
              Connect with audiences worldwide through strategic digital presence and
              localized solutions.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
              <Zap className="text-red-800" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Innovative Solutions</h3>
            <p className="text-gray-600">
              Stay ahead with cutting-edge technology and creative digital strategies.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
              <Users className="text-red-800" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
            <p className="text-gray-600">
              Work with passionate professionals dedicated to your digital success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;