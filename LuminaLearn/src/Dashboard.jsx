// components/Dashboard.js
import React from 'react';
import StatsCard from './StatsCard';
import CourseProgress from './CourseProgress';
import ActivityChart from './ActivityChart';
import Calender from './Calender';
import './dash.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="stats">
        <StatsCard title="Average Rating" value="8/10" />
        <StatsCard title="Active tasks" value="12 tasks" />
      </div>
      <div className="main-content">
        <ActivityChart />
        <CourseProgress />
        <Calender />
      </div>
    </div>
  );
};

export default Dashboard;
