
"use client";
import React, { useState } from "react";
import CourseSchedule from "./subComponents/CourseShedule";
import CourseCardDay2 from "./subComponents/CourseSheduleDay2";
import CourseCardDay3 from "./subComponents/CoursesSheduleDay3";
const EventSchedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8" id="schedule">
        {/* Title with underline decoration */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#ebff00] mb-2"><span className="text-white" >The Growth String </span>Experience : Kubernetes Edition</h1>
          <div className="h-1 w-16 bg-red-500 mx-auto"></div>
        </div>

        {/* Day selector buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveDay(1)}
            className={`px-8 py-2 md:px-16 md:py-3 rounded-full text-black font-medium transition-colors ${activeDay === 1
                ? "bg-[#ffffff] shadow-lg shadow-[#00BFFF]/50 scale-105"
                : "bg-[#0A1150] text-white hover:bg-[#4E5A94]"
              }`}
          >
            Day 1
          </button>
          <button
            onClick={() => setActiveDay(2)}
            className={`px-8 py-2 md:px-16 md:py-3 rounded-full text-black font-medium transition-colors ${activeDay === 2
                ? "bg-[#ffffff] shadow-lg shadow-[#00BFFF]/50 scale-105 text-[#000000]"
                : "bg-[#0A1150] text-white hover:bg-[#4E5A94]"
              }`}
          >
            Day 2
          </button>
          <button
            onClick={() => setActiveDay(3)}
            className={`px-8 py-2 md:px-16 md:py-3 rounded-full text-black font-medium transition-colors ${activeDay === 3
                ? "bg-[#ffffff] shadow-lg shadow-[#00BFFF]/50 scale-105 text-[#000000]"
                : "bg-[#0A1150] text-white hover:bg-[#4E5A94]"
              }`}
          >
            Day 3
          </button>
        </div>


        {/* Description text */}
        <p className="text-center text-white italic max-w-3xl mx-auto">
          Everything About Kubernetes : An Experience Beyond Learning
        </p>
      </div>
      {activeDay === 1 && <CourseSchedule />}
      {activeDay === 2 && <CourseCardDay2 />}
      {activeDay === 3 && <CourseCardDay3 />}
    </>
  );
};

export default EventSchedule;
