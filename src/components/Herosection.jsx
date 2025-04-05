import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-28 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Building Innovative Digital Experiences
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          We are a creative web development agency focused on crafting elegant and functional web solutions.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
