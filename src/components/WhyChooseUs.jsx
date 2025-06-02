import React from 'react';
import { Globe, Zap, Users, Check, ArrowRight, Sparkles } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with audiences worldwide through strategic digital presence and localized solutions.",
      benefits: ["Multilingual support", "Cultural adaptation", "Global market insights"],
      gradient: "from-blue-500 to-cyan-400",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: Zap,
      title: "Innovative Solutions",
      description: "Stay ahead with cutting-edge technology and creative digital strategies tailored to your needs.",
      benefits: ["Latest technologies", "Future-proof systems", "Agile development"],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Work with passionate professionals dedicated to your digital success and business growth.",
      benefits: ["Certified developers", "Industry specialists", "Dedicated support"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 to-red-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-red-100/30 via-transparent to-blue-100/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 rounded-full text-red-800 text-sm font-bold mb-6 shadow-sm border border-red-200/50">
            <Sparkles className="w-4 h-4 mr-2 text-red-600" />
            Our Competitive Edge
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-600 via-red-800 to-orange-600">
              Why Choose
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500">
              AuraDev?
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed">
            We combine cutting-edge expertise, revolutionary innovation, and unwavering dedication to deliver extraordinary digital experiences that transform businesses and elevate brands.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative group hover:transform hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Card */}
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden h-full">
                {/* Hover Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <feature.icon className="text-white" size={32} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Benefits */}
                  <ul className="space-y-3 mb-8">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 shadow-sm flex-shrink-0">
                          <Check size={14} className="text-white" />
                        </div>
                        <span className="font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn More */}
                  <div className="pt-6 border-t border-gray-100">
                    <a 
                      href="#" 
                      className={`inline-flex items-center font-semibold text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient} hover:underline transition-all duration-200 group`}
                    >
                      Learn more 
                      <ArrowRight size={16} className="ml-2 text-red-600 group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a 
            href="/about-us" 
            className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-red-600 via-red-700 to-orange-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-red-500/50"
          >
            <span className="mr-3">Discover Our Process</span>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <ArrowRight size={18} className="text-white" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;