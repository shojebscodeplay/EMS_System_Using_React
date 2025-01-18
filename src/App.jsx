import React, { useState } from 'react';
import Login from './components/Auth/Login';
import LandingPage from './components/LandingPage';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';

const App = () => {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('landing'); // Tracks the current page

  // Handle the login process
  const handleLogin = (email, password) => {
    if (email === "admin@email.com" && password === "123") {
      setUser('Admin');
      setCurrentPage('adminDashboard');
    } else if (email === "employee@email.com" && password === "123") {
      setUser('Employee');
      setCurrentPage('employeeDashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  // Logout functionality
  const handleLogout = () => {
    setCurrentPage('landing');
  };

  // Handle the transition from the landing page to the login page
  const handleContinue = () => {
    setCurrentPage('login');
  };

  return (
    <>
      {currentPage === 'landing' && <LandingPage onContinue={handleContinue} />}
      {currentPage === 'login' && <Login handleLogin={handleLogin} />}
      {currentPage === 'adminDashboard' && (
        <AdminDashboard handleLogout={handleLogout} user={user} />
      )}
      {currentPage === 'employeeDashboard' && (
        <EmployeeDashboard handleLogout={handleLogout} user={user} />
      )}
    </>
  );
};

export default App;