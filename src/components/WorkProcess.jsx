import React from "react";
import { Search, PenTool, Code, Rocket, ChevronRight } from "lucide-react";

const WorkProcess = () => {
  const processes = [
    {
      step: 1,
      title: "Discover",
      description: "Understanding your goals and needs to create a strong foundation for your project.",
      icon: Search,
      color: "red"
    },
    {
      step: 2,
      title: "Design",
      description: "Crafting intuitive, engaging, and visually appealing solutions tailored to your brand.",
      icon: PenTool,
      color: "purple"
    },
    {
      step: 3,
      title: "Develop",
      description: "Bringing ideas to life through clean, efficient, and future-proof code implementation.",
      icon: Code,
      color: "blue"
    },
    {
      step: 4,
      title: "Deliver",
      description: "Ensuring successful deployment, thorough testing, and continuous support.",
      icon: Rocket,
      color: "green"
    }
  ];

  return (
    <section className=" py-24 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-lg animate-bounce"></div>
      <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-xl animate-bounce"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20">
            <div className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></div>
            How We Work
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Our Work
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Our proven methodology ensures quality results, timely delivery, and exceptional client satisfaction through every step of the journey.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {processes.map((process, index) => (
              <div
                key={index}
                className="relative group"
              >
                
               
                {/* Card */}
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 h-full flex flex-col relative overflow-hidden group-hover:bg-white/15 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-white/10">
                  

                  {/* Decorative gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                    process.color === 'red' ? 'from-red-500/20 to-pink-500/20' :
                    process.color === 'purple' ? 'from-purple-500/20 to-indigo-500/20' :
                    process.color === 'blue' ? 'from-blue-500/20 to-cyan-500/20' :
                    'from-emerald-500/20 to-teal-500/20'
                  } flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10`}>
                    <process.icon className={`${
                      process.color === 'red' ? 'text-red-400' :
                      process.color === 'purple' ? 'text-purple-400' :
                      process.color === 'blue' ? 'text-blue-400' :
                      'text-emerald-400'
                    }`} size={28} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300 relative z-10">
                    {process.title}
                  </h3>
                  
                  <p className="text-gray-300 flex-grow mb-6 leading-relaxed relative z-10">
                    {process.description}
                  </p>

                  {/* Learn more link */}
                  <div className="mt-auto relative z-10">
                    <a href="#" className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white group-hover:underline transition-colors duration-300">
                      Learn more <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>

                  {/* Hover effect corner */}
                  <div className={`absolute bottom-0 right-0 w-0 h-0 transition-all duration-300 ${
                    process.color === 'red' ? 'border-b-red-500/30 border-r-red-500/30' :
                    process.color === 'purple' ? 'border-b-purple-500/30 border-r-purple-500/30' :
                    process.color === 'blue' ? 'border-b-blue-500/30 border-r-blue-500/30' :
                    'border-b-emerald-500/30 border-r-emerald-500/30'
                  } group-hover:border-b-[40px] group-hover:border-r-[40px] border-b-transparent border-r-transparent`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-20">
          <a href="/process" className="group relative px-12 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-full hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-2xl shadow-red-500/25 hover:shadow-red-500/40 hover:scale-105 transform">
            <span className="relative z-10">Learn More About Our Process</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
};

export default WorkProcess;