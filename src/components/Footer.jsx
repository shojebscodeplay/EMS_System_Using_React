import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-3 w-screen mt-auto">
      <div className="container mx-auto text-center">
        <div className="mb-2">
          <p>&copy; {new Date().getFullYear()} Shojebthings. All Rights Reserved.</p>
        </div>
        <div>
          <a
            href="https://www.shojebthings.com"
            className="text-blue-400 hover:text-blue-600 transition duration-300 mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shojebthings Website
          </a>
          |
          <a
            href="https://www.shojebthings.com/contact"
            className="text-blue-400 hover:text-blue-600 transition duration-300 mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
          |
          <a
            href="https://www.shojebthings.com/privacy"
            className="text-blue-400 hover:text-blue-600 transition duration-300 mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
