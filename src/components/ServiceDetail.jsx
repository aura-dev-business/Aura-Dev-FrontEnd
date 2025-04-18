import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader, AlertCircle } from "lucide-react";
import { motion } from 'framer-motion';
import Footer from './Footer'; // Assuming you have a Footer component
import Navigation from './Navigation'; // Assuming you have a Navigation component

const ServiceDetail = () => {
  const { id } = useParams(); // Get the service ID from the URL
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/services/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setService(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching service:", err);
        setError("Failed to load service details. Please try again later.");
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <Loader className="animate-spin text-red-800 mb-4" size={40} />
        <p className="text-gray-600">Loading service details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 inline-flex items-start max-w-lg shadow-md">
          <AlertCircle className="text-red-600 mr-3 flex-shrink-0 mt-1" size={24} />
          <div className="text-left">
            <h3 className="text-red-800 font-semibold mb-2">Unable to load service</h3>
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navigation />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">{service.name}</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{service.description}</p>
            {service.features && service.features.length > 0 && (
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Features</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-lg">{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default ServiceDetail;