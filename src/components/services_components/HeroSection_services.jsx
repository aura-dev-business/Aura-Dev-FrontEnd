import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection_services = () => {
    return (
        // Wrap comments in curly braces
        <>
            {/* Hero Section */}
            <section className="bg-gray-50 py-20 mt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-red-600 leading-tight">
                            Our <span className="text-red-800">Services</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive digital solutions to enhance your business presence and drive growth
                            in the digital landscape.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection_services;