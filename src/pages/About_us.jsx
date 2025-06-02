import React from 'react';
import { Target, Award, Heart, Star, Shield, Users, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// Animation Variants (simplified for this environment)
const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden">
      {/* Hero Section with Beautiful SVG Background */}
      <section className="relative bg-gradient-to-br from-slate-50 via-red-50/30 to-gray-50 py-24 mt-10 overflow-hidden">
        {/* Beautiful SVG Background */}
        <div className="absolute inset-0 z-0">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 800"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FEE2E2" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="#FECACA" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#FCA5A5" stopOpacity="0.4"/>
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DC2626" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#B91C1C" stopOpacity="0.05"/>
              </linearGradient>
              <filter id="blur">
                <feGaussianBlur stdDeviation="3"/>
              </filter>
            </defs>
            
            {/* Flowing organic shapes */}
            <path
              d="M0,100 C150,200 300,0 600,50 C900,100 1200,0 1440,80 L1440,0 L0,0 Z"
              fill="url(#gradient1)"
            />
            <path
              d="M0,200 C200,100 400,300 700,200 C1000,100 1200,250 1440,180 L1440,0 L0,0 Z"
              fill="url(#gradient2)"
              filter="url(#blur)"
            />
            
            {/* Decorative circles */}
            <circle cx="200" cy="150" r="80" fill="#FCA5A5" fillOpacity="0.1" filter="url(#blur)"/>
            <circle cx="1200" cy="200" r="120" fill="#DC2626" fillOpacity="0.08" filter="url(#blur)"/>
            <circle cx="800" cy="100" r="60" fill="#B91C1C" fillOpacity="0.12" filter="url(#blur)"/>
            
            {/* Geometric patterns */}
            <polygon
              points="100,300 150,250 200,300 150,350"
              fill="#DC2626"
              fillOpacity="0.05"
              transform="rotate(45 150 300)"
            />
            <polygon
              points="1300,150 1350,100 1400,150 1350,200"
              fill="#B91C1C"
              fillOpacity="0.06"
              transform="rotate(-30 1350 150)"
            />
            
            {/* Flowing lines */}
            <path
              d="M0,400 Q200,350 400,400 T800,380 T1440,400"
              stroke="#DC2626"
              strokeWidth="2"
              strokeOpacity="0.1"
              fill="none"
            />
            <path
              d="M0,450 Q300,400 600,450 T1200,430 T1440,450"
              stroke="#B91C1C"
              strokeWidth="1.5"
              strokeOpacity="0.08"
              fill="none"
            />
          </svg>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-red-400 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-red-500 rounded-full opacity-60 animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-red-600 rounded-full opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-60 right-20 w-1 h-1 bg-red-400 rounded-full opacity-70 animate-ping" style={{animationDelay: '0.5s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-extrabold tracking-tight">
          <div className="text-center">
            {/* Elegant badge */}
            <div className="inline-flex items-center px-6 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-red-100 shadow-lg mb-8">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-semibold text-red-700 tracking-wide">DIGITAL EXCELLENCE</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-red-800 via-red-600 to-red-700 leading-tight mb-8 drop-shadow-sm">
              About <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent">Auradev</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-700 max-w-4xl mt-6 mx-auto leading-relaxed font-medium">
              We are more than just a digital agency. We are your 
              <span className="text-red-700 font-semibold"> partners in transformation</span>,
              <br className="hidden md:block"/>
              dedicated to elevating your digital presence and creating lasting impact in the
              <span className="text-red-600 font-semibold"> digital landscape</span>.
            </p>

            {/* Enhanced feature badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <div className="flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-red-100 shadow-md hover:shadow-lg transition-shadow">
                <Star className="w-4 h-4 text-red-600 mr-2" />
                <span className="text-sm font-semibold text-slate-700">Award Winning</span>
              </div>
              <div className="flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-red-100 shadow-md hover:shadow-lg transition-shadow">
                <Shield className="w-4 h-4 text-red-600 mr-2" />
                <span className="text-sm font-semibold text-slate-700">Trusted Partner</span>
              </div>
              <div className="flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-red-100 shadow-md hover:shadow-lg transition-shadow">
                <Target className="w-4 h-4 text-red-600 mr-2" />
                <span className="text-sm font-semibold text-slate-700">Results Driven</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - Enhanced */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-slate-900 to-red-800 bg-clip-text text-transparent mb-6">
              Our Foundation
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built on strong principles that guide every decision we make
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative bg-white p-12 rounded-3xl shadow-xl border border-red-50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Target className="text-white" size={32} />
                  </div>
                  <h3 className="text-4xl font-bold text-slate-900">Our Mission</h3>
                </div>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  To empower businesses with innovative digital solutions that drive growth,
                  enhance visibility, and create lasting connections with their audience.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Driving digital transformation through innovation",
                    "Creating seamless user experiences",
                    "Building lasting digital solutions",
                  ].map((text, i) => (
                    <div className="flex items-start group/item" key={i}>
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover/item:bg-red-200 transition-colors">
                        <Star className="text-red-600" size={14} />
                      </div>
                      <p className="text-slate-600 group-hover/item:text-slate-900 transition-colors">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative bg-white p-12 rounded-3xl shadow-xl border border-red-50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Award className="text-white" size={32} />
                  </div>
                  <h3 className="text-4xl font-bold text-slate-900">Our Vision</h3>
                </div>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  To be the leading force in digital transformation, setting new standards
                  for excellence and innovation in the digital space.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Leading the digital revolution",
                    "Setting industry standards",
                    "Shaping the future of digital business",
                  ].map((text, i) => (
                    <div className="flex items-start group/item" key={i}>
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover/item:bg-red-200 transition-colors">
                        <Star className="text-red-600" size={14} />
                      </div>
                      <p className="text-slate-600 group-hover/item:text-slate-900 transition-colors">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Redesigned */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-red-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255,0,0) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-slate-900 to-red-800 bg-clip-text text-transparent mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that drive us forward and shape our culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: <Heart size={40} />, 
                title: 'Passion', 
                desc: 'We are driven by our passion for digital excellence and innovation that transforms businesses.',
                gradient: 'from-red-500 to-pink-500'
              },
              { 
                icon: <Shield size={40} />, 
                title: 'Excellence', 
                desc: 'We strive for excellence in everything we do, from project planning to execution and beyond.',
                gradient: 'from-red-600 to-red-700'
              },
              { 
                icon: <Users size={40} />, 
                title: 'Collaboration', 
                desc: 'We believe in the power of collaboration and partnership to achieve extraordinary results.',
                gradient: 'from-red-700 to-red-800'
              },
            ].map((value, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative bg-white p-10 rounded-3xl shadow-xl border border-red-50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full">
                  <div className={`w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-center text-slate-900">{value.title}</h3>
                  <p className="text-slate-600 text-center leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600 rounded-full opacity-10 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Sparkles className="w-5 h-5 text-red-400 mr-2" />
            <span className="text-sm font-medium text-white">Ready to Transform?</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
            Join Our Journey to
            <span className="block bg-gradient-to-r pb-3 from-red-400 to-red-600 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Let's work together to create
            something extraordinary that sets you apart in the digital landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to ="/Contact">
            <button className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
              <span className="text-lg font-semibold mr-3">Get in Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
            
            
            <button className="inline-flex items-center px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <span className="text-lg font-semibold">View Our Work</span>
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-4 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { number: '100+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;