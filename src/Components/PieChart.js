import React from 'react';
import { Pie } from 'react-chartjs-2';

const pieStyling = {
    width:'400px', 
    marginRight:'20px',
    marginTop:'70px'
}
const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'Answered Calls',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 159, 67, 0.85)',
    },
    {
      label: 'Unanswered Calls',
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: 'rgb(54, 162, 235)',
    },
    {
      label: 'Average Answer Monthly',
      data: [3, 10, 13, 15, 22, 30],
      backgroundColor: 'rgba(118, 107, 240, 1)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
      },
    ],
  },
};

const PieChart = () => (
  <>
    <h2 style={{textAlign:'center', fontFamily:"Gilroy-Bold"}}>Call Details</h2>

  <Pie  style={pieStyling} data={data} options={options} />
  </>
);

export default PieChart;