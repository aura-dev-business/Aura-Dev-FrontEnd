import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for nav bar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/About_us', label: 'About Us' },
    { path: '/services', label: 'Services', 
      // dropdown: [
      //   { path: '/services/web', label: 'Web Development' },
      //   { path: '/services/mobile', label: 'Mobile Apps' },
      //   { path: '/services/cloud', label: 'Cloud Solutions' }
      // ] 
    },
    { path: '/contact', label: 'Contact' },
  ];

  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="relative overflow-hidden rounded-lg mr-2">
                <img 
                  src={logo} 
                  alt="AuraDev Logo" 
                  className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-red-800 tracking-wide">Aura</span>
                  <span className="text-2xl font-bold text-gray-800 tracking-wide">Dev</span>
                </div>
                <span className="text-xs text-gray-500 font-medium">Build Your Digital Aura</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={item.path || index} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-red-50 ${
                        location.pathname.startsWith(item.path)
                          ? 'text-red-800 font-semibold'
                          : 'text-gray-700'
                      }`}
                    >
                      {item.label}
                      <ChevronDown 
                        size={16} 
                        className={`ml-1 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    {activeDropdown === index && (
                      <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-100">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-800"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md hover:bg-red-50 flex items-center ${
                      location.pathname === item.path
                        ? 'text-red-800 font-semibold'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.label}
                    {location.pathname === item.path && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-1/2 bg-red-800 rounded-full"></span>
                    )}
                  </Link>
                )}
              </div>
            ))}
            <button className="ml-4 px-6 py-2 bg-red-700 hover:bg-red-800 text-white font-medium rounded-full text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-md">
              Get Started
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-red-800 p-2 rounded-full hover:bg-red-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-20 bg-white shadow-lg border-t border-gray-100">
            <div className="py-3 px-2 max-h-[80vh] overflow-y-auto">
              {navItems.map((item, index) => (
                <div key={item.path || index} className="py-1">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className={`flex items-center justify-between w-full px-4 py-3 text-left text-base font-medium ${
                          location.pathname.startsWith(item.path)
                            ? 'text-red-800 bg-red-50'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {activeDropdown === index && (
                        <div className="pl-4 bg-gray-50 border-l-2 border-red-200 mt-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-800"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 text-base font-medium ${
                        location.pathname === item.path
                          ? 'text-red-800 bg-red-50'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-4 py-4">
                <button className="w-full px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-medium rounded-md text-sm transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;