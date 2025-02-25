import React, { useContext, useState } from 'react';
import Login from './components/Auth/Login';
import LandingPage from './components/LandingPage';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthContextProvider';
import ChatApp from './components/ChatApp';

const App = () => {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('landing'); // Tracks the current page
  const authData = useContext(AuthContext);

  // Handle the login process
  const handleLogin = (email, password) => {
    if (authData) {
      // Check if the user is an admin
      const adminUser = authData.admin.find(
        (e) => e.email === email && e.password === password
      );
      if (adminUser) {
        setUser('Admin');
        setCurrentPage('adminDashboard');
        return;
      }

      // Check if the user is an employee
      const employeeUser = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employeeUser) {
        setUser('Employee');
        setCurrentPage('employeeDashboard');
        return;
      }
    }
    alert('Invalid credentials');
  };

  // Logout functionality
  const handleLogout = () => {
    setUser(null);
    setCurrentPage('landing');
  };

  // Handle the transition from the landing page to the login page
  const handleContinue = () => {
    setCurrentPage('login');
  };

  // Handle transition to ChatApp (Help Chat)
  const handleHelpChat = () => {
    setCurrentPage('chat');
  };

  return (
    <>
      {currentPage === 'landing' && (
        <LandingPage onContinue={handleContinue} onHelpChat={handleHelpChat} />
      )}
      {currentPage === 'login' && <Login handleLogin={handleLogin} />}
      {currentPage === 'adminDashboard' && (
        <AdminDashboard handleLogout={handleLogout} user={user} />
      )}
      {currentPage === 'employeeDashboard' && (
        <EmployeeDashboard handleLogout={handleLogout} user={user} />
      )}
      {currentPage === 'chat' && <ChatApp onBack={() => setCurrentPage('landing')} />}
    </>
  );
};

export default App;
