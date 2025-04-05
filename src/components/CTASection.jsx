import React from "react";

const CTASection = () => {
  return (
    <section className="bg-indigo-600 text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
        <p className="mb-6">Let AuraDev help you build a powerful online presence today.</p>
        <a
          href="#contact"
          className="bg-white text-indigo-600 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CTASection;
