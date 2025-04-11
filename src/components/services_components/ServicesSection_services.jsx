import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Globe,
  Code,
  Palette,
  LineChart,
  MessageSquare,
  Smartphone,
} from "lucide-react";

// Map string names from backend to actual Lucide components
const iconMap = {
  Globe,
  Code,
  Palette,
  LineChart,
  MessageSquare,
  Smartphone,
};

// Optional: helper function to handle casing issues
const getIconComponent = (iconName) => {
  if (!iconName) return null;
  const formatted =
    iconName.charAt(0).toUpperCase() + iconName.slice(1); // Capitalize
  return iconMap[formatted] || null;
};

const ServicesSection_services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/services", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          throw new Error(
            errorData?.message || `HTTP error! status: ${response.status}`
          );
        }

        const data = await response.json();
        setServices(data);
      } catch (err) {
        console.error("Error fetching services:", err);
        setError(
          err.message ||
            "Failed to fetch services. Please check if the server is running."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-800 mx-auto"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4 text-center text-red-600">
          Error: {error}
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = getIconComponent(service.imageUrl); // ← updated
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                {IconComponent ? (
                  <IconComponent className="text-red-800 mb-4" size={32} />
                ) : (
                  <Globe className="text-gray-400 mb-4" size={32} /> // fallback
                )}
                <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection_services;
