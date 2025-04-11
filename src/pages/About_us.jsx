import React from 'react';
import { Target, Award, Heart, Star, Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#0D0E17] text-white py-20 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl mb-6">
              About <span className="text-[#9F2225]">Auradev</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We are more than just a digital agency. We are your partners in transformation,
              dedicated to elevating your digital presence and creating lasting impact in the
              digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-6">
                <Target className="text-red-800 mr-4" size={40} />
                <h2 className="text-3xl ">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth,
                enhance visibility, and create lasting connections with their audience.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <Star className="text-red-800 mr-3 mt-1" size={20} />
                  <p className="text-gray-600">Driving digital transformation through innovation</p>
                </div>
                <div className="flex items-start">
                  <Star className="text-red-800 mr-3 mt-1" size={20} />
                  <p className="text-gray-600">Creating seamless user experiences</p>
                </div>
                <div className="flex items-start">
                  <Star className="text-red-800 mr-3 mt-1" size={20} />
                  <p className="text-gray-600">Building lasting digital solutions</p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-6">
                <Award className="text-red-800 mr-4" size={40} />
                <h2 className="text-3xl">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the leading force in digital transformation, setting new standards
                for excellence and innovation in the digital space.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <Star className="text-red-800 mr-3 mt-1" size={20} />
                  <p className="text-gray-600">Leading the digital revolution</p>
                </div>
                <div className="flex items-start">
                  <Star className="text-red-800 mr-3 mt-1" size={20} />
                  <p className="text-gray-600">Setting industry standards</p>
                </div>
                <div className="flex items-start">
                  <Star className="text-red-800 mr-3 mt-1" size={20} />
                  <p className="text-gray-600">Shaping the future of digital business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl  text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Passion */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="text-red-800" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Passion</h3>
              <p className="text-gray-600 text-center">
                We are driven by our passion for digital excellence and innovation.
              </p>
            </div>

            {/* Excellence */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield className="text-red-800" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Excellence</h3>
              <p className="text-gray-600 text-center">
                We strive for excellence in everything we do, from project planning
                to execution and beyond.
              </p>
            </div>

            {/* Collaboration */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="text-red-800" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Collaboration</h3>
              <p className="text-gray-600 text-center">
                We believe in the power of collaboration and partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl  mb-6">Join Our Journey</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to transform your digital presence? Let's work together to create
            something extraordinary that sets you apart in the digital landscape.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-red-800 text-white rounded-md hover:bg-red-700 transition-colors">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;