import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faCog, faEnvelope, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
        
        {/* First section */}
        <div className="flex-1">
          <h4 className="text-xl font-semibold mb-4">
            Where eCommerce Brands Come For Innovative Ideas and Stay For The Results. 
            <span className="text-blue-400"> Based in Sydney, working globally.</span>
          </h4>
          <ul className="space-y-2">
            <li className="flex items-center hover:text-blue-400 transition-colors cursor-pointer">
              <FontAwesomeIcon icon={faInfoCircle} className="text-blue-400 mr-2" /> About
            </li>
            <li className="flex items-center hover:text-blue-400 transition-colors cursor-pointer">
              <FontAwesomeIcon icon={faCog} className="text-blue-400 mr-2" /> Services
            </li>
            <li className="flex items-center hover:text-blue-400 transition-colors cursor-pointer">
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-400 mr-2" /> Contact
            </li>
            <li className="flex items-center hover:text-blue-400 transition-colors cursor-pointer">
              <FontAwesomeIcon icon={faShieldAlt} className="text-blue-400 mr-2" /> Privacy Policy
            </li>
          </ul>
        </div>

        {/* Second section */}
        <div className="flex-1">
          <h4 className="text-xl font-semibold mb-4">Stay in the loop</h4>
          <p className="mb-4 max-w-sm">
            Get insights into the latest news from the world of digital marketing directly to your inbox.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
