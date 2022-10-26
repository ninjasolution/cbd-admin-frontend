import {Line} from 'react-chartjs-2';
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

export const options = {
    responsive: true,
    maintainAspectRatio: true,
    height: 150,
    width: 300,
    plugins: {
        legend: false,
        linearScale: {
            display: false,
        }
    },
};

const labels = ['January', 'February', 'March', 'April', 'May'];

export const data = {
    labels,
    datasets: [
        {
            data: [33, 53, 85, 41, 44,],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ],
};


export function LineChart() {
    return (
        <div className="">
            <Line options={options} data={data} />
        </div>
    )
}