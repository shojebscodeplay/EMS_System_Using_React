import React from 'react';

const Header = ({ user, handleLogout }) => {
  return (
    <header className="bg-blue-600 text-white p-3 flex items-center justify-between w-screen">
      {/* Greeting Section */}
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold">
          Hello <br />
          <span role="img" aria-label="cool">😎</span> {user}
        </h1>
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
