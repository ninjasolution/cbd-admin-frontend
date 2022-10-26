import "chartjs-adapter-moment";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  TimeScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
);

function SingleLineChart() {
 

  const s = [
    {
      x: new Date("2022-06-01"),
      y: 0,
    },
    {
      x: new Date("2022-06-02"),
      y: 0,
    },
    {
      x: new Date("2022-06-03"),
      y: 0,
    },
    {
      x: new Date("2022-06-04"),
      y: 0,
    },
    {
      x: new Date("2022-06-05"),
      y: 0,
    },
    {
      x: new Date("2022-06-06"),
      y: 0,
    },
    {
      x: new Date("2022-06-07"),
      y: 0,
    },
    {
      x: new Date("2022-06-08"),
      y: 0,
    },
  ];


  const data = {
    datasets: [
      {
        data: s,
        tension: 0.4,
        borderColor:"#bfc51d"
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "title",
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
        },
        display: true,
        title: {
          display: true,
        },
      },
      y: {
        display: true,
        ticks: { maxTicksLimit: 5 },
        title: {
          display: true,
          text: "EUR",
        },
        suggestedMin: -1,
        suggestedMax: 1,
      },
    },
  };

  return (
    <div >
      <Line options={options} data={data} />
    </div>
  );
}

export default SingleLineChart;
