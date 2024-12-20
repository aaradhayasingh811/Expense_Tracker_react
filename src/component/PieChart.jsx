import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TotalUserPieChart = ({ creditMoney = 0, othMoney = 0, foodMoney = 0, eduMoney = 0, shoppingMoney = 0 }) => {
  const data = {
    labels: ["Credited", "Others", "Food", "Education", "Shopping"],
    datasets: [
      {
        data: [creditMoney, othMoney, foodMoney, eduMoney, shoppingMoney],
        backgroundColor: [
          '#001A6E',
          '#074799',
          '#009990',
          '#E1FFBB',
          '#FF748B',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Change position: 'top', 'bottom', 'left', or 'right'
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.raw;
            return ` ${value} transactions`;
          },
        },
      },
    },
  };

  return (
    <div className="chart-container flex justify-center my-4">
      <Pie data={data} options={options} />
    </div>
  );
};

export default TotalUserPieChart;
