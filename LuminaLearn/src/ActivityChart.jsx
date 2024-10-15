// components/ActivityChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required components from chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const ActivityChart = () => {
  const data = {
    labels: ['Study', 'Exams'],
    datasets: [
      {
        data: [76, 24],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  return (
    <div className="activity-chart">
      <h3>Activity</h3>
      <Doughnut data={data} />
    </div>
  );
};

export default ActivityChart;
