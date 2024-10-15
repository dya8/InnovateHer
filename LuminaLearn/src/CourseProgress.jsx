// components/CourseProgress.js
import React from 'react';
import './dash.css';
const CourseProgress = () => {
  return (
    <div className="course-progress">
      <h3>My Courses</h3>
      <div className="course">
        <p>Web Design</p>
        <progress value="50" max="100"></progress>
      </div>
      <div className="course">
        <p>JavaScript</p>
        <progress value="27" max="100"></progress>
      </div>
    </div>
  );
};

export default CourseProgress;
