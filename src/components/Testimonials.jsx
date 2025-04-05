import React from "react";
import { testimonials } from "../constants/data"; // Import testimonials data

const Testimonials = () => {
  return (
    <section className="bg-white py-16" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded shadow">
              <p className="mb-4">"{testimonial.quote}"</p>
              <h4 className="font-semibold">– {testimonial.name}, {testimonial.company}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
