import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Process_section = () => {
    return (
        // Wrap comments in curly braces
        <>
            {/* Hero Section */}
            <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-16">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-800 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600">
                Understanding your goals, challenges, and vision
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-red-800 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategy</h3>
              <p className="text-gray-600">
                Developing a tailored plan for your success
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-red-800 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">
                Executing the plan with precision and expertise
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-red-800 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Optimization</h3>
              <p className="text-gray-600">
                Continuous improvement and refinement
              </p>
            </div>
          </div>
        </div>
      </section>
        </>
    );
};
export default Process_section;