import React, { useRef, useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useInView } from 'react-intersection-observer';

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const chartRef = useRef(null);
  const [inView, setInView] = useState(false);

  const { ref, inView: isInView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the chart is in the viewport
  });

  const data = {
    labels: ['Creative', 'Logical'],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: [
          'rgba(235, 249, 255, 1)',
          'rgb(227, 255, 237)',
        ],
        borderColor: [
          'rgba(172, 172, 172, 0.9)',
          'rgba(172, 172, 172, 0.9)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    rotation: 160,
    offset: 20,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Skill Distribution: Front-End vs Back-End',
      },
    },
    animation: {
      duration: 1000, // Adjust animation speed
      easing: 'easeInOutQuad', // Animation easing
      animateRotate: inView, // Only animate if in view
    },
  };

  // Effect to trigger chart rendering when it's in view
  useEffect(() => {
    if (isInView) {
      setInView(true);
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ height: '400px', width: '400px' }}>
      {inView && <Pie data={data} options={options} />}
    </div>
  );
};

export default PieChart;
