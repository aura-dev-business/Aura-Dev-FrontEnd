import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="bg-indigo-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p>Skilled professionals dedicated to delivering top-quality solutions.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Customer Focused</h3>
            <p>We prioritize your goals to ensure success and satisfaction.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
            <p>Using modern tech to craft tailored, cutting-edge digital experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
