import React from 'react';

const Header = ({ user, handleLogout }) => {
  return (
    <header className="bg-blue-600 text-white p-3 flex items-center justify-between w-screen">
      {/* Greeting Section with Bubble Effect */}
      <div className="flex items-center gap-4 relative">
        <div className="bg-white text-blue-600 rounded-full p-4 shadow-lg relative z-10">
          <h1 className="text-xl font-bold">
            Hello <br />
            <span role="img" aria-label="cool">😎</span> {user}
          </h1>
        </div>
        <div className="absolute inset-0 rounded-full bg-white opacity-30 blur-md"></div>
      </div>
      {/* Logo Section */}
      <div>
        <img
          src="/logo.jpg" // Ensure the path matches your project structure
          alt="logo"
          className="w-20 h-20 border-2 rounded-full object-contain"
        />
      </div>
      {/* Logout Button */}
      <div>
        <button
          onClick={handleLogout}
          className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
        >
          Log out
        </button>
      </div>
    </header>
  );
};

export default Header;
