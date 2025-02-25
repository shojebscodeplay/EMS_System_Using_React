import React from 'react';

const LandingPage = ({ onContinue, onHelpChat }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center p-4 sm:p-8">
      <img
        src="/logo.jpg"
        alt="logo"
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto shadow-lg border-4 border-yellow-600 animate-bounce"
      />
      <h1 className="text-3xl sm:text-4xl mb-4 transition-transform transform hover:scale-105">
        Welcome to My Website
      </h1>
      <p className="text-lg sm:text-xl md:text-lg text-black font-bold mb-6 sm:mb-8 max-w-xl transition-opacity duration-500 ease-in-out opacity-0 animate-fadeIn whitespace-normal">
        "I am the greatest, I said that even before I knew I was." – Muhammad Ali
        <br /> 
        Click below to get started!
      </p>

      <div className="flex gap-4">
        <button
          onClick={onContinue}
          className="px-5 py-2 sm:px-6 sm:py-3 text-lg bg-white text-blue-500 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
        >
          Continue to Login
        </button>

        <button
          onClick={onHelpChat}
          className="px-5 py-2 sm:px-6 sm:py-3 text-lg bg-yellow-500 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
        >
          Help Chat
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
