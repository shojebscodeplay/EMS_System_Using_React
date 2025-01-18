import React, { useRef } from "react";

// Helper function to generate a random expiration date
const generateRandomDate = () => {
  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + Math.floor(Math.random() * 30) + 1); // Random date within 1-30 days
  return futureDate.toLocaleDateString(); // Format as MM/DD/YYYY or DD/MM/YYYY based on locale
};

const TaskShowcase = () => {
  const scrollContainerRef = useRef(null);

  // Handle mouse wheel scrolling for horizontal scrolling
  const handleWheel = (event) => {
    if (scrollContainerRef.current) {
      event.preventDefault();
      scrollContainerRef.current.scrollLeft += event.deltaY; // Translate vertical scroll to horizontal
    }
  };

  return (
    <div className="flex flex-col mt-15 sm:mt-15">
      {/* Main Content Area */}
      <div className="flex-grow">
        {/* Other content goes here */}
      </div>

      {/* Task Showcase at the Bottom */}
      <div className="bg-gradient-to-r from-[#07320D] to-[#1b3a1b] mt-5 w-full p-5 sm:p-6 rounded-lg shadow-lg border-2 border-[#c3e6cb] items-end">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#f7f7f7] mb-5 text-center">
          Task List
        </h1>
        <div
          className="flex gap-4 sm:gap-5 overflow-x-scroll scrollbar-none h-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          ref={scrollContainerRef}
          onWheel={handleWheel} // Attach the wheel event listener
        >
          {/* Example Task Card */}
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className="min-w-[120px] sm:min-w-[150px] lg:min-w-[200px] h-[50%] sm:h-[60%] bg-[#e9f7ef] text-[#0f5132] rounded-xl p-3 sm:p-4 shadow-lg border-2 border-[#a8cdc1] transition-transform transform hover:scale-105"
            >
              <h2 className="text-base sm:text-lg font-semibold text-center">
                Task {i + 1}
              </h2>
              <p className="text-xs sm:text-sm text-center">
                Details about Task {i + 1}
              </p>
              <p className="text-xs sm:text-sm mt-2 font-medium text-center">
                Expires on: <span className="text-[#dc3545]">{generateRandomDate()}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskShowcase;
