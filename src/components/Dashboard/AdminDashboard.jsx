import React, { useState, useRef } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import emailjs from 'emailjs-com';

const AdminDashboard = ({ handleLogout, user }) => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    date: '',
    assignedTo: '',
    category: ''
  });

  // Create a reference for the form
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use the form reference for emailjs
    emailjs
      .sendForm('service_h320k8m', 'template_1p2c4dy', form.current, 'uOD_pv73ji35rlead')
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Task created and email sent successfully!');
          setTaskData({
            title: '',
            description: '',
            date: '',
            assignedTo: '',
            category: ''
          });
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Failed to send email. Please try again.');
        }
      );

    console.log('Task Data:', taskData);
  };

  return (
    <div className="bg-gray-100 flex flex-col h-screen">
      <Header user={user} handleLogout={handleLogout} />
      <div className="w-screen bg-white p-1 rounded-lg shadow-lg mt-1 flex-grow overflow-y-auto">
        {/* Attach the form reference here */}
        <form ref={form} onSubmit={handleSubmit}>
          {/* Task Title */}
          <div className="mb-2">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Task Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={taskData.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Task Description */}
          <div className="mb-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              value={taskData.description}
              onChange={handleChange}
              required
              rows="2"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Task Date */}
          <div className="mb-2">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={taskData.date}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Assign To */}
          <div className="mb-2">
            <label htmlFor="assignedTo" className="block text-sm font-medium text-gray-700">Assign To</label>
            <input
              type="email"
              id="assignedTo"
              name="assignedTo"
              value={taskData.assignedTo}
              onChange={handleChange}
              required
              placeholder="Enter a valid email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Task Category */}
          <div className="mb-2">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <select
              id="category"
              name="category"
              value={taskData.category}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Category</option>
              <option value="Design">Design</option>
              <option value="Development">Development</option>
              <option value="Marketing">Marketing</option>
              <option value="Testing">Testing</option>
              <option value="HR">HR</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
