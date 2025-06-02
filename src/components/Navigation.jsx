import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Loader2 } from 'lucide-react';
import logo from '../assets/logo.png';
import QuoteModal from './QuoteComponent';

// 🪄 Custom Hook for Typewriter Effect
function useTypewriter(words, delay = 150, pause = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    
    const currentWord = words[wordIndex];
    let timeout;

    if (!deleting) {
      // Typing
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setText((prev) => prev + currentWord[charIndex]);
          setCharIndex((i) => i + 1);
        }, delay);
      } else {
        timeout = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      // Deleting
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setCharIndex((i) => i - 1);
        }, delay / 2);
      } else {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, delay, pause]);

  return `Search ${text}`;
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [services, setServices] = useState([]);
  const [isLoadingServices, setIsLoadingServices] = useState(true);
  const [allData, setAllData] = useState([]); // Store all searchable data

  // Fetch services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setIsLoadingServices(true);
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/services`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Extract service names for typewriter effect
        const serviceNames = data.map(service => service.name || service.title || service.serviceName);
        setServices(serviceNames.filter(Boolean)); // Remove any undefined/null values
        
        // Store all data for search functionality
        setAllData(data);
        
      } catch (error) {
        console.error('Error fetching services:', error);
        // Fallback to default services if API fails
        setServices(['Web Development', 'Mobile Apps', 'Cloud Solutions', 'UI/UX Design', 'Consulting']);
      } finally {
        setIsLoadingServices(false);
      }
    };

    fetchServices();
  }, []);

  const typewriterPlaceholder = useTypewriter(services, 120, 1500);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // API-based search functionality
  useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      const timer = setTimeout(async () => {
        try {
          // First, search through local data (services)
          const localResults = allData.filter(item => 
            (item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (item.serviceName && item.serviceName.toLowerCase().includes(searchQuery.toLowerCase()))
          ).map(item => ({
            title: item.name || item.title || item.serviceName,
            description: item.description || item.shortDescription || 'Service details',
            path: `/services/${item.id || item.slug}` // Adjust path based on your routing
          }));

          // Add static pages to search results
          const staticPages = [
            { title: 'About Our Team', description: 'Meet the talented developers behind AuraDev', path: '/About_Us' },
            { title: 'Contact Us', description: 'Get in touch for your next project', path: '/contact' },
            { title: 'Home', description: 'Welcome to AuraDev - Build Your Digital Aura', path: '/' },
          ].filter(page => 
            page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            page.description.toLowerCase().includes(searchQuery.toLowerCase())
          );

          // Combine results
          const combinedResults = [...localResults, ...staticPages];

          // Optional: Make additional API call for more comprehensive search
          // You can uncomment and modify this if you have a dedicated search endpoint
          /*
          try {
            const searchResponse = await fetch(`http://localhost:8080/api/search?q=${encodeURIComponent(searchQuery)}`);
            if (searchResponse.ok) {
              const searchData = await searchResponse.json();
              // Process and add search API results to combinedResults
            }
          } catch (searchError) {
            console.error('Search API error:', searchError);
          }
          */

          setSearchResults(combinedResults);
        } catch (error) {
          console.error('Search error:', error);
          setSearchResults([]);
        } finally {
          setIsSearching(false);
        }
      }, 300); // Reduced delay for better UX

      return () => clearTimeout(timer);
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }
  }, [searchQuery, allData]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/About_us', label: 'About Us' },
    {
      path: '/services',
      label: 'Services',
      // dropdown: [
      //   { path: '/services/web', label: 'Web Development' },
      //   { path: '/services/mobile', label: 'Mobile Apps' },
      //   { path: '/services/cloud', label: 'Cloud Solutions' }
      // ]
    },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const openQuoteModal = () => {
    setQuoteModalOpen(true);
    if (isOpen) setIsOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search submission - navigate to search results page or perform search
      console.log('Searching for:', searchQuery);
      // You can navigate to a search results page here
      // navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const isHomePageOrService = location.pathname === '/' || location.pathname === '/services' || location.pathname === '/contact';

  return (
    <>
      <style>{`
        .typewriter-placeholder::placeholder {
          animation: typewriter-blink 1s steps(2, start) infinite;
        }
        @keyframes typewriter-blink {
          50% {
            opacity: 0.5;
          }
        }
      `}</style>

      <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
        isHomePageOrService 
          ? scrolled 
            ? 'bg-gradient-to-r from-slate-900/95 via-gray-900/95 to-slate-900/95   ' 
            : 'bg-transparent backdrop-blur-sm'
          : 'bg-gradient-to-r from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center z-20">
              <Link to="/" className="flex items-center group">
                <div className="relative overflow-hidden rounded-xl mr-3 p-1">
                  {!isLogoLoaded && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-xl"></div>
                  )}
                  <img 
                    src={logo} 
                    alt="AuraDev Logo" 
                    className={`w-10 h-10 object-contain  transition-opacity  ${
                      isLogoLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setIsLogoLoaded(true)}
                    onError={() => {
                      console.error('Failed to load logo');
                      setIsLogoLoaded(true); // Show error state
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-0">
                    <span className={`text-2xl font-bold font-aspal ${
                      isHomePageOrService 
                        ? (scrolled ? 'text-red-400' : 'text-white drop-shadow-lg')
                        : 'text-red-400'
                    }`}>Aura</span>
                    <span className={`text-2xl font-bold font-aspal ${
                      isHomePageOrService 
                        ? (scrolled ? 'text-white' : 'text-white/90 drop-shadow-lg')
                        : 'text-white'
                    }`}>Dev</span>
                  </div>
                  <span className={`text-xs font-medium mt-[-6px] ${
                    isHomePageOrService 
                      ? (scrolled ? 'text-gray-300' : 'text-white/80 drop-shadow-sm')
                      : 'text-gray-300'
                  }`}>Build Your Digital Aura</span>
                </div>
              </Link>
            </div>

            <div className="hidden md:flex items-center flex-1 justify-center max-w-2xl mx-8">
              {/* Search Bar with Typewriter Effect */}
              <div className="relative w-full max-w-md">
                <form onSubmit={handleSearchSubmit} className="relative">
                  <div className={`relative flex items-center transition-all duration-300 ${
                    isSearchFocused ? 'transform scale-105' : ''
                  }`}>
                    <Search 
                      size={18} 
                      className={`absolute left-4 z-10 transition-colors duration-300 ${
                        isHomePageOrService
                          ? (scrolled
                            ? (isSearchFocused ? 'text-red-400' : 'text-gray-400')
                            : (isSearchFocused ? 'text-red-400' : 'text-white/70'))
                          : (isSearchFocused ? 'text-red-400' : 'text-gray-400')
                      }`}
                    />
                    <input
                      type="text"
                      placeholder={!isSearchFocused && !searchQuery ? 
                        (isLoadingServices ? 'Loading services...' : `${typewriterPlaceholder}|`) 
                        : 'Search services, projects...'}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setIsSearchFocused(true)}
                      onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                      className={`typewriter-placeholder w-full pl-12 pr-12 py-3 text-sm font-medium rounded-2xl backdrop-blur-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400/50 ${
                        isHomePageOrService
                          ? (scrolled
                            ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 hover:bg-white/15 focus:bg-white/20 focus:border-red-400/50'
                            : 'bg-white/20 border-white/30 text-white placeholder-white/60 hover:bg-white/25 focus:bg-white/30 focus:border-red-400/50')
                          : 'bg-white/10 border-white/20 text-white placeholder-gray-400 hover:bg-white/15 focus:bg-white/20 focus:border-red-400/50'
                      }`}
                    />
                    {(isSearching || isLoadingServices) && (
                      <Loader2 
                        size={18} 
                        className="absolute right-4 text-red-400 animate-spin"
                      />
                    )}
                  </div>
                </form>

                {/* Search Results Dropdown */}
                {(isSearchFocused || searchQuery) && (
                  <div className="absolute top-full mt-2 w-full bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 py-2 z-50 max-h-80 overflow-y-auto">
                    {isSearching ? (
                      <div className="px-4 py-6 text-center">
                        <Loader2 size={24} className="mx-auto text-red-400 animate-spin mb-2" />
                        <p className="text-gray-400 text-sm">Searching...</p>
                      </div>
                    ) : searchResults.length > 0 ? (
                      <div className="space-y-1">
                        {searchResults.map((result, index) => (
                          <Link
                            key={index}
                            to={result.path}
                            className="block px-4 py-3 hover:bg-white/10 transition-colors duration-200 group"
                            onClick={() => {
                              setSearchQuery('');
                              setIsSearchFocused(false);
                            }}
                          >
                            <div className="flex items-start space-x-3">
                              <Search size={16} className="text-red-400 mt-1 flex-shrink-0" />
                              <div>
                                <h4 className="text-white font-medium text-sm group-hover:text-red-400 transition-colors">
                                  {result.title}
                                </h4>
                                <p className="text-gray-400 text-xs mt-1">
                                  {result.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : searchQuery ? (
                      <div className="px-4 py-6 text-center">
                        <Search size={24} className="mx-auto text-gray-600 mb-2" />
                        <p className="text-gray-400 text-sm">No results found for "{searchQuery}"</p>
                      </div>
                    ) : (
                      <div className="px-4 py-6 text-center">
                        <Search size={24} className="mx-auto text-gray-600 mb-2" />
                        <p className="text-gray-400 text-sm">Start typing to search...</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="hidden md:flex items-center">
              {/* Navigation Links Container */}
              <div className="flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <div key={index} className="relative group">
                    {item.dropdown ? (
                      <div className="relative">
                        <button
                          onClick={() => toggleDropdown(index)}
                          className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-xl backdrop-blur-sm border border-transparent hover:border-white/20 ${
                            isHomePageOrService
                              ? (scrolled
                                ? 'text-gray-200 hover:bg-white/10 hover:text-white'
                                : 'text-white/90 hover:bg-white/15 hover:text-white')
                              : 'text-gray-200 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          {item.label}
                          <ChevronDown 
                            size={16} 
                            className={`ml-1 ${activeDropdown === index ? 'rotate-180' : ''}`} 
                          />
                        </button>
                        {activeDropdown === index && item.dropdown && (
                          <div className="absolute mt-2 w-52 bg-slate-900/95 backdrop-blur-xl rounded-xl shadow-2xl py-2 z-20 border border-white/10">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className="block px-4 py-2.5 text-sm text-gray-200 hover:bg-white/10 hover:text-white mx-1 rounded-lg"
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
                        className={`relative px-4 py-2.5 text-sm font-medium rounded-xl backdrop-blur-sm border border-transparent hover:border-white/20 flex items-center group ${
                          isHomePageOrService
                            ? (scrolled
                              ? 'text-gray-200 hover:bg-white/10 hover:text-white'
                              : 'text-white/90 hover:bg-white/15 hover:text-white')
                            : 'text-gray-200 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Separator with better spacing */}
              <div className="mx-6 h-6 w-px bg-white/20"></div>
              
              {/* CTA Button */}
              <button 
                onClick={openQuoteModal}
                className={`px-6 py-2.5 font-medium rounded-full text-sm backdrop-blur-sm border transition-all duration-300 ${
                  isHomePageOrService
                    ? (scrolled 
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-red-500 shadow-lg hover:shadow-xl transform hover:scale-105'
                      : 'bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 shadow-lg hover:shadow-xl transform hover:scale-105')
                    : 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-red-500 shadow-lg hover:shadow-xl transform hover:scale-105'
                }`}
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative w-10 h-10 rounded-xl backdrop-blur-sm border border-transparent transition-all duration-300 flex items-center justify-center ${
                  isHomePageOrService
                    ? (scrolled 
                      ? 'text-gray-200 hover:text-white hover:bg-white/10 hover:border-white/20'
                      : 'text-white hover:text-white hover:bg-white/15 hover:border-white/20')
                    : 'text-gray-200 hover:text-white hover:bg-white/10 hover:border-white/20'
                }`}
                aria-label="Toggle menu"
              >
                {/* Hamburger Lines */}
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className="relative w-full">
                    <div className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                      isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                    }`}></div>
                    <div className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}></div>
                    <div className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                      isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                    }`}></div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Background Overlay with animated blur */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-slate-900/80 via-gray-900/90 to-slate-800/80 backdrop-blur-md transition-all duration-500 ${
            isOpen ? 'opacity-100 backdrop-blur-md' : 'opacity-0 backdrop-blur-none'
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Mobile Menu Panel with improved design */}
        <div className={`absolute top-20 left-4 right-4 bottom-[120px] bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-800/95 backdrop-blur-xl border border-white/10 shadow-2xl transform transition-all duration-500 ease-out ${
          isOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-8 opacity-0 scale-95'
        }`}>
          <div className="h-full overflow-y-auto">
            {/* Decorative header gradient */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-red-500/10 via-orange-500/5 to-transparent"></div>
            
            {/* Mobile Search Bar with Typewriter */}
            <div className="relative px-6 pt-8 pb-4">
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={isLoadingServices ? 'Loading services...' : `${typewriterPlaceholder}|`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="typewriter-placeholder w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400/50 focus:border-red-400/50 backdrop-blur-sm"
                />
                {(isSearching || isLoadingServices) && (
                  <Loader2 
                    size={18} 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-400 animate-spin"
                  />
                )}
              </div>
              
              {/* Mobile Search Results */}
              {searchQuery && (
                <div className="mt-4 bg-white/5 rounded-2xl border border-white/10 max-h-48 overflow-y-auto">
                  {isSearching ? (
                    <div className="px-4 py-6 text-center">
                      <Loader2 size={20} className="mx-auto text-red-400 animate-spin mb-2" />
                      <p className="text-gray-400 text-sm">Searching...</p>
                    </div>
                  ) : searchResults.length > 0 ? (
                    <div className="space-y-1 p-2">
                      {searchResults.map((result, index) => (
                        <Link
                          key={index}
                          to={result.path}
                          className="block px-3 py-2 hover:bg-white/10 transition-colors duration-200 rounded-lg"
                          onClick={() => {
                            setSearchQuery('');
                            setIsOpen(false);
                          }}
                        >
                          <h4 className="text-white font-medium text-sm">
                            {result.title}
                          </h4>
                          <p className="text-gray-400 text-xs mt-1">
                            {result.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="px-4 py-6 text-center">
                      <p className="text-gray-400 text-sm">No results found</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Menu Items */}
            <div className="relative px-6 pb-8">
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <div 
                    key={index}
                    className={`transform transition-all duration-500 ease-out ${
                      isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <Link
                      to={item.path}
                      className="group flex items-center justify-between px-6 py-5 rounded-2xl bg-gradient-to-r from-white/5 via-white/3 to-transparent hover:from-white/10 hover:via-white/8 hover:to-white/5 transition-all duration-400 border border-white/5 hover:border-white/20 backdrop-blur-sm relative overflow-hidden"
                      onClick={() => setIsOpen(false)}
                    >
                      {/* Animated background glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-orange-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-orange-500/3 group-hover:to-red-500/5 transition-all duration-400 rounded-2xl"></div>
                      
                      <div className="relative flex items-center space-x-4">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-400 group-hover:shadow-lg group-hover:shadow-red-400/50"></div>
                        <span className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors duration-400">
                          {item.label}
                        </span>
                      </div>
                      <div className="relative transform translate-x-3 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                        <svg className="w-6 h-6 text-red-400 group-hover:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA Section with enhanced design */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/50 via-transparent to-transparent rounded-2xl"></div>
                
                <button 
                  onClick={openQuoteModal}
                  className={`relative w-full px-8 py-5 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 hover:from-red-600 hover:via-orange-600 hover:to-red-600 text-white font-bold rounded-2xl text-lg shadow-2xl hover:shadow-red-500/25 transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98] overflow-hidden group ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: isOpen ? '400ms' : '0ms' }}
                >
                  {/* Animated background shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 -translate-x-full"></div>
                  
                  <span className="relative flex items-center justify-center">
                    Get Started Today
                    <svg className="ml-3 w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuoteModal 
        isOpen={quoteModalOpen} 
        onClose={() => setQuoteModalOpen(false)} 
      />
    </>
  );
};

export default Navigation;