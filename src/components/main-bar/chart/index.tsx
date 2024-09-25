import React from 'react';
import { Box, Paper } from '@mui/material';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ChartBox = () => {
  const percentageBarData = {
    labels: ['Completion'],
    datasets: [
      {
        label: 'Progress',
        data: [75],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const singleBarData = {
    labels: ['Sales'],
    datasets: [
      {
        label: 'Sales',
        data: [50],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const multiBarData = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'Product A',
        data: [12, 19, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Product B',
        data: [8, 14, 6],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      },
      {
        label: 'Product C',
        data: [5, 9, 2],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Revenue',
        data: [3, 2, 5, 12, 7, 6, 9],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  const pieNumericData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Colors (numeric)',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
      },
    ],
  };

  const piePercentageData = {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [
      {
        label: 'Colors (percentage)',
        data: [40, 30, 30],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
      },
    ],
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, p: 2 }}>
      <Box sx={{ flexBasis: '32%', maxWidth: '32%' }}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Bar data={percentageBarData} options={{ indexAxis: 'y' }} />
        </Paper>
      </Box>

      <Box sx={{ flexBasis: '32%', maxWidth: '32%' }}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Bar data={singleBarData} />
        </Paper>
      </Box>

      <Box sx={{ flexBasis: '32%', maxWidth: '32%' }}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Bar data={multiBarData} />
        </Paper>
      </Box>

      <Box sx={{ flexBasis: '32%', maxWidth: '32%' }}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Line data={lineData} />
        </Paper>
      </Box>

      <Box sx={{ flexBasis: '32%', maxWidth: '32%' }}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Pie data={pieNumericData} />
        </Paper>
      </Box>

      <Box sx={{ flexBasis: '32%', maxWidth: '32%' }}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Pie data={piePercentageData} />
        </Paper>
      </Box>
    </Box>
  );
};

export default ChartBox;
