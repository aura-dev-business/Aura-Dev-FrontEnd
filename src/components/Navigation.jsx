import React from 'react';

const Navigation = () => {
  return (
    <nav className="bg-white py-6 px-4 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-indigo-600">AuraDev</div>
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li className="hover:text-indigo-600 cursor-pointer">Home</li>
          <li className="hover:text-indigo-600 cursor-pointer">Services</li>
          <li className="hover:text-indigo-600 cursor-pointer">Projects</li>
          <li className="hover:text-indigo-600 cursor-pointer">Why Us</li>
          <li className="hover:text-indigo-600 cursor-pointer">Testimonials</li>
          <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
        </ul>
        <button className="md:hidden text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
