import React from "react";

const WorkProcess = () => {
  return (
    <section className="bg-indigo-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Work Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Discover</h3>
            <p>Understanding your goals and needs.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Design</h3>
            <p>Crafting intuitive, engaging solutions.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Develop</h3>
            <p>Bringing ideas to life through code.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">4. Deliver</h3>
            <p>Ensuring successful project deployment.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
