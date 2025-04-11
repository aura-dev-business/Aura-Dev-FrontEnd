import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl mb-6">Ready to Transform Your Digital Presence?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Let's create something extraordinary together.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-red-800 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          Get Started
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>
    </section>
  );
};

export default CTASection;