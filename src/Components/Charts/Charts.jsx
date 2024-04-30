import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Colors,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Ticks,
  Title,
  Tooltip,
} from "chart.js";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
);

export const BarChart = ({
  data1 = [],
  title,
  bgColor,
  horizontal = false,
  labels,
}) => {
  const options = {
    responsive: true,
    indexAxis: horizontal ? "y" : "x",
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "white",
          display: false,
        },
        ticks: {
          color: "white",
        },
        color: "white",
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
        },
        color: "white",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: title,
        data: data1,
        backgroundColor: bgColor,
        barThickness: "flex",
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
    ],
  };

  return <Bar width={horizontal ? "200%" : ""} options={options} data={data} />;
};

export const PieChart = ({ labels, data, backgroundColor, hoverOffset }) => {
  const pieChartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 1,
        hoverOffset,
      },
    ],
  };

  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Pie data={pieChartData} options={pieChartOptions} />;
};

export const LineChart = ({
  data,
  label,
  backgroundColor,
  borderColor,
  labels,
}) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
        },
      },
    },
  };

  const lineChartData = {
    labels,
    datasets: [
      {
        fill: true,
        label,
        data,
        backgroundColor,
        borderColor,
      },
    ],
  };

  return <Line options={options} data={lineChartData} />;
};
