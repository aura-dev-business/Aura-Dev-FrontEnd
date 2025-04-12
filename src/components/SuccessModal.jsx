import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <div className="flex items-center justify-center mb-4">
          <Check size={40} className="text-green-500" />
        </div>
        <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-sm text-center text-gray-600 mb-4">
          Thank you for reaching out. We will get back to you shortly.
        </p>
        <button
          onClick={onClose}
          className="w-full bg-red-800 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default SuccessModal;