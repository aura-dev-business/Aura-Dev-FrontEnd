import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Heart, Star, Shield, Users } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  }),
};

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-br from-gray-50 to-gray-100 text-white py-20 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-extrabold tracking-tight">
          <motion.div className="text-center" variants={fadeInUp}>
            <h1 className="text-5xl md:text-6xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-red-600 leading-tight ">
              About <span className="text-[#9F2225]">Auradev</span>
            </h1>
            <p className="text-xl text-black max-w-3xl mt-5 mx-auto leading-relaxed">
              We are more than just a digital agency. We are your partners in transformation,
              dedicated to elevating your digital presence and creating lasting impact in the
              digital landscape.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Mission */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
              custom={1}
              variants={fadeInUp}
            >
              <div className="flex items-center mb-6">
                <Target className="text-red-800 mr-4" size={40} />
                <h2 className="text-3xl">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth,
                enhance visibility, and create lasting connections with their audience.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  "Driving digital transformation through innovation",
                  "Creating seamless user experiences",
                  "Building lasting digital solutions",
                ].map((text, i) => (
                  <div className="flex items-start" key={i}>
                    <Star className="text-red-800 mr-3 mt-1" size={20} />
                    <p className="text-gray-600">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
              custom={2}
              variants={fadeInUp}
            >
              <div className="flex items-center mb-6">
                <Award className="text-red-800 mr-4" size={40} />
                <h2 className="text-3xl">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the leading force in digital transformation, setting new standards
                for excellence and innovation in the digital space.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  "Leading the digital revolution",
                  "Setting industry standards",
                  "Shaping the future of digital business",
                ].map((text, i) => (
                  <div className="flex items-start" key={i}>
                    <Star className="text-red-800 mr-3 mt-1" size={20} />
                    <p className="text-gray-600">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <motion.section
        className="bg-gray-50 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <h2 className="text-5xl md:text-6xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-red-600 leading-tight text-center mb-10 font-extrabold">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Heart className="text-red-800" size={32} />, title: 'Passion', desc: 'We are driven by our passion for digital excellence and innovation.' },
              { icon: <Shield className="text-red-800" size={32} />, title: 'Excellence', desc: 'We strive for excellence in everything we do, from project planning to execution and beyond.' },
              { icon: <Users className="text-red-800" size={32} />, title: 'Collaboration', desc: 'We believe in the power of collaboration and partnership.' },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                custom={index + 1}
                variants={fadeInUp}
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-extrabold">
          <h2 className="text-5xl md:text-6xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-red-600 leading-tight mb-5">Join Our Journey</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to transform your digital presence? Let's work together to create
            something extraordinary that sets you apart in the digital landscape.
          </p>
          <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center px-8 py-4 bg-red-800 text-white rounded-md hover:bg-red-700 transition-colors"
      onClick={() => navigate('/contact')}
    >
      Get in Touch
    </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
