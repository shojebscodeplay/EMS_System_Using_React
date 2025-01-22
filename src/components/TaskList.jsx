import React from 'react';

const TaskList = () => {
  return (
    <div className="flex p-3 bg-white justify-start mt-4">
      <div className="flex flex-row gap-4 justify-center items-start w-full">
        {/* New Task */}
        <div className="flex flex-col justify-center bg-green-500 p-2 rounded-lg shadow-lg w-24 h-24 sm:w-36 sm:h-36 transition-transform transform hover:scale-105">
          <h1 className="text-2xl font-bold text-center">3</h1>
          <h2 className="text-md text-center">New Task</h2>
        </div>

        {/* Accepted Task */}
        <div className="flex flex-col justify-center bg-yellow-500 p-2 rounded-lg shadow-lg w-24 h-24 sm:w-36 sm:h-36 transition-transform transform hover:scale-105">
          <h1 className="text-2xl font-bold text-center">5</h1>
          <h2 className="text-md text-center">Accepted Task</h2>
        </div>

        {/* Failed Task */}
        <div className="flex flex-col justify-center bg-red-500 p-2 rounded-lg shadow-lg w-24 h-24 sm:w-36 sm:h-36 transition-transform transform hover:scale-105">
          <h1 className="text-2xl font-bold text-center">0</h1>
          <h2 className="text-md text-center">Failed Task</h2>
        </div>

        {/* Completed Task */}
        <div className="flex flex-col justify-center bg-blue-700 p-2 rounded-lg shadow-lg w-24 h-24 sm:w-36 sm:h-36 transition-transform transform hover:scale-105">
          <h1 className="text-2xl font-bold text-center">10</h1>
          <h2 className="text-md text-center">Completed Task</h2>
        </div>
      </div>
    </div>
  );
};

export default TaskList;