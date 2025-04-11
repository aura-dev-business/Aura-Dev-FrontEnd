import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.jpg'; // Ensure the correct path to your image

const HeroSection = () => {
  return (
    <section className="py-20 bg-gray-50 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-5xl md:text-6xl text-red-800 mb-6">
            Build Your <span className="text-black">Digital Aura</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg">
            Transform your business presence in the digital space with cutting-edge solutions
            and strategic innovation.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 bg-red-800 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Explore Our Services
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>

        {/* Image Frame */}
        <div className="w-[250px] md:w-[550px] mx-auto">
          <div className="border-10 border-red-900 rounded-lg overflow-hidden shadow-lg h-50">
            <img
              src={bg} // Use the imported image
              alt="Digital Aura"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;