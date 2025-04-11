import React from "react";

const WorkProcess = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl text-red-800 mb-12">Our Work Process</h2>
        <div className="grid md:grid-cols-4 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold text-red-800 mb-4">1. Discover</h3>
            <p className="text-gray-600">
              Understanding your goals and needs to create a strong foundation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold text-red-800 mb-4">2. Design</h3>
            <p className="text-gray-600">
              Crafting intuitive, engaging, and visually appealing solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold text-red-800 mb-4">3. Develop</h3>
            <p className="text-gray-600">
              Bringing ideas to life through clean and efficient code.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold text-red-800 mb-4">4. Deliver</h3>
            <p className="text-gray-600">
              Ensuring successful deployment and ongoing support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;