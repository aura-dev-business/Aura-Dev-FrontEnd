import React from "react";
import { ArrowRight, Star } from "lucide-react";

const CTASection = () => {
  // Custom SVG components
  const LightningIcon = ({ className, size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <path 
        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" 
        fill="url(#lightning-gradient)"
        className="drop-shadow-lg"
      />
      <path 
        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" 
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="0.5"
        fill="none"
      />
    </svg>
  );

  const MessageIcon = ({ className, size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="message-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <path 
        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" 
        fill="url(#message-gradient)"
        className="drop-shadow-lg"
      />
      <circle cx="12" cy="12" r="1" fill="white" opacity="0.9" />
      <circle cx="8" cy="12" r="1" fill="white" opacity="0.7" />
      <circle cx="16" cy="12" r="1" fill="white" opacity="0.7" />
    </svg>
  );

  const SparkleIcon = ({ className, size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="sparkle-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <path 
        d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" 
        fill="url(#sparkle-gradient)"
        className="animate-pulse"
      />
      <path 
        d="M12 4l1.8 5.4L19 12l-5.2 1.9L12 20l-1.8-5.1L5 12l5.2-1.9L12 4z" 
        fill="rgba(255,255,255,0.4)"
      />
    </svg>
  );

  const FloatingIcon = ({ className, size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <defs>
        <linearGradient id="float-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" opacity="0.6" />
          <stop offset="100%" stopColor="#EC4899" opacity="0.3" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="14" fill="url(#float-gradient)" className="animate-pulse" />
      <circle cx="16" cy="16" r="8" fill="rgba(255,255,255,0.2)" />
      <circle cx="16" cy="16" r="4" fill="rgba(255,255,255,0.4)" />
    </svg>
  );

  return (
    <section className="py-24 relative overflow-hidden flex items-center ">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      </div>
      
      {/* Enhanced animated orbs with better positioning */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-full blur-2xl animate-bounce delay-500"></div> t
      <div className="absolute top-1/5 right-1/5 w-32 h-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-full blur-xl animate-pulse delay-2000"></div>
      
      {/* Floating icons with custom SVGs */}
      <div className="absolute top-20 left-20 animate-bounce delay-300">
        <SparkleIcon size={28} className="text-yellow-300/70" />
      </div>
      <div className="absolute bottom-32 right-32 animate-pulse delay-700">
        <SparkleIcon size={24} className="text-pink-300/70" />
      </div>
      <div className="absolute top-1/3 right-20 animate-bounce delay-1200">
        <SparkleIcon size={20} className="text-blue-300/70" />
      </div>
      <div className="absolute top-16 right-1/2 animate-pulse delay-1500">
        <FloatingIcon size={20} />
      </div>
      <div className="absolute bottom-20 left-1/3 animate-bounce delay-800">
        <FloatingIcon size={24} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Enhanced main CTA Card */}
        <div className="relative group">
      
          
          <div className="relative bg-white/10 backdrop-blur-3xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
            
            
            <div className="flex flex-col lg:flex-row relative z-10">
              {/* Enhanced Left Content */}
              <div className="w-full lg:w-3/5 p-12 md:p-16 lg:p-20">
                <div className="mb-8">
                  <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-white border border-purple-400/40 backdrop-blur-sm shadow-lg hover:scale-105 transition-transform duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 animate-pulse shadow-lg"></div>
                    ✨ Transform Your Business
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent drop-shadow-lg">
                    Ready to Create
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-rose-300 bg-clip-text text-transparent drop-shadow-lg">
                    Something Amazing?
                  </span>
                </h2>

                <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-xl font-light">
                  Let's build extraordinary digital experiences that captivate your audience and drive real business results. Your vision, our expertise, unlimited possibilities.
                </p>

                {/* Enhanced Features */}
                <div className="space-y-8 mb-12">
                  <div className="flex items-center group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-all duration-300 border border-purple-400/30 shadow-lg backdrop-blur-sm">
                      <LightningIcon size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Lightning Fast Results</h4>
                      <p className="text-gray-300">From concept to launch in record time with cutting-edge technology</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-all duration-300 border border-blue-400/30 shadow-lg backdrop-blur-sm">
                      <MessageIcon size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">24/7 Expert Support</h4>
                      <p className="text-gray-300">Always here when you need us most with dedicated assistance</p>
                    </div>
                  </div>
                </div>

                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <a
                    href="/contact"
                    className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white  rounded-2xl transform hover:scale-105 transition-all duration-300  border "
                  >
                    <span className="relative z-10">Start Your Project</span>
                    <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -inset-1  rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </a>
                  
                  <a
                    href="/portfolio"
                    className="group inline-flex items-center justify-center px-10 py-5 text-xl font-semibold text-white bg-white/10 rounded-2xl border border-white/30 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm shadow-xl hover:scale-105"
                  >
                    View Portfolio
                    <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
                  </a>
                </div>
              </div>

              {/* Enhanced Right Content - Testimonial */}
              <div className="w-full lg:w-2/5 p-12 md:p-16 lg:p-20 bg-gradient-to-br from-white/10 to-transparent border-l border-white/10">
                <div className="h-full flex flex-col justify-center">
                  {/* Enhanced Rating */}
                  <div className="flex items-center mb-8">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current drop-shadow-lg animate-pulse" style={{animationDelay: `${i * 200}ms`}} />
                      ))}
                    </div>
                    <span className="ml-4 text-gray-200 font-semibold">5.0 • 150+ reviews</span>
                  </div>

                  {/* Enhanced Quote */}
                  <blockquote className="text-2xl text-gray-100 mb-10 leading-relaxed italic font-light relative">
                    <div className="absolute -top-4 -left-4 text-6xl text-purple-400/30 font-serif">"</div>
                    Working with this team was incredible. They transformed our vision into reality and exceeded every expectation. Our conversion rate increased by 300%!
                    <div className="absolute -bottom-8 -right-4 text-6xl text-purple-400/30 font-serif">"</div>
                  </blockquote>

                  {/* Enhanced Author */}
                  <div className="flex items-center mb-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-xl mr-5 shadow-lg border-2 border-white/20">
                      SJ
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">Sarah Johnson</div>
                      <div className="text-gray-300">CEO, TechFlow Solutions</div>
                    </div>
                  </div>

                  {/* Enhanced testimonials link */}
                  <a href="/testimonials" className="group inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors duration-300 font-semibold">
                    <span className="border-b-2 border-purple-300/50 group-hover:border-purple-200 transition-colors duration-300">
                      Read more success stories
                    </span>
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default CTASection;