import React, { useEffect, useState } from 'react';
import 'animate.css'; // Import animate.css for animations

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger fade-in effect on component mount
    setFadeIn(true);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col items-center p-2 justify-center bg-gradient-to-r from-green-500 to-green-700 transition-opacity duration-1000 ${
        fadeIn ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Company Name with Animation */}
      <h1
        className="text-4xl sm:text-5xl mt-2 md:text-6xl font-bold mb-4 text-white animate__animated animate__fadeIn animate__delay-1s transition duration-300 ease-in-out"
        style={{ fontFamily: '"Jersey 15", serif', fontWeight: 100 }}
      >
        🔥SHOJEBthings🔥
      </h1>

      {/* Side Note */}
      <div className="bg-yellow-100 mt-0 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg shadow-lg mb-2 animate__animated animate__fadeInLeft animate__delay-1s p-5">
        <p className="text-sm font-medium ">
          Use <strong>Email:</strong> <span className="underline">admin@example.com</span> &{' '}
          <strong>Password:</strong> <span className="underline">123</span> for admin login.

          For employee, use <strong>Email:</strong> <span className="underline">employee1@example.com</span> &{' '}
          <strong>Password:</strong> <span className="underline">123</span>.
        </p>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 animate__animated animate__zoomIn animate__delay-2s">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 animate__animated animate__bounceIn animate__delay-3s">
          Welcome Back
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('Email is', email);
            console.log('Password is', password);
            handleLogin(email, password);
            setEmail('');
            setPassword('');
          }}
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 transition duration-300 ease-in-out transform hover:scale-105"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 transition duration-300 ease-in-out transform hover:scale-105"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded transition duration-300 ease-in-out transform hover:scale-105"
              />
              <label htmlFor="remember" className="ml-2 text-gray-700 text-sm">
                Remember Me
              </label>
            </div>
            <a
              href="#"
              className="text-red-600 text-sm hover:underline transition duration-300 ease-in-out transform hover:scale-105 font-medium"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-500 text-white font-medium py-2 rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300 ease-in-out transform hover:scale-105 animate__animated animate__pulse animate__delay-4s"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-6 animate__animated animate__fadeIn animate__delay-5s">
          Don't have an account?{' '}
          <a
            href="#"
            className="text-emerald-500 font-medium hover:underline transition duration-300 ease-in-out transform hover:scale-105"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
