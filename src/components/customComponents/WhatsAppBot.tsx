"use client"
// src/components/WhatsAppBot.js
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '9829105960'; // Replace with your desired phone number
  const photoURL = 'https://media.licdn.com/dms/image/v2/C4E0BAQER-Sage-ex_A/company-logo_200_200/company-logo_200_200/0/1639050566015/linuxworld_informatics_pvt_ltd_logo?e=1740009600&v=beta&t=W2qpnHkepg2P04Ynh-QMXIg-Alwj7HRyvLWTPnxbnHM'; // Replace with your desired photo URL

  // Toggle visibility of the chat window
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Redirects user to WhatsApp chat with the specified phone number
  const openWhatsAppChat = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Modal for displaying phone number and additional information */}
      {isOpen && (
        <div className="bg-white w-80 rounded-lg shadow-lg p-4 border border-gray-300 absolute bottom-20 right-0"> {/* Adjusted positioning classes */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
            <button
              className="text-gray-500 hover:text-red-500"
              onClick={toggleChat}
            >
              &#10005; {/* Close button */}
            </button>
          </div>
          {/* Optional Photo */}
          {photoURL && (
            <div className="flex justify-center mb-4">
              <img
                src={photoURL}
                alt="Contact"
                className="w-24 h-24 rounded-full object-cover shadow-lg"
              />
            </div>
          )}
          {/* Clickable phone number */}
          <div
            onClick={openWhatsAppChat}
            className="text-center text-lg font-semibold text-green-600 cursor-pointer underline hover:text-green-800"
          >
            WhatsApp Number: <span>{phoneNumber}</span>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={toggleChat}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg focus:outline-none"
      >
        <FaWhatsapp size={30} />
      </button>
    </div>
  );
};

export default WhatsAppBot;