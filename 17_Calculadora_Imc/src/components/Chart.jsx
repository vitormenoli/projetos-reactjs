import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

import "./Chart.css";

function Chart({ imc }) {
  const data = {
    labels: ["Magreza", "Normal", "Sobrepeso", "Obesidade", "Obesidade Grave"],
    datasets: [
      {
        label: "Seu IMC",
        data: [
          imc <= 18.4 ? imc : 0, // Magreza
          imc > 18.4 && imc <= 24.9 ? imc : 0, // Normal
          imc > 24.9 && imc <= 29.9 ? imc : 0, // Sobrepeso
          imc > 29.9 && imc <= 39.9 ? imc : 0, // Obesidade
          imc > 39.9 ? imc : 0, // Obesidade Grave
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)", // Magreza
          "rgba(54, 162, 235, 0.6)", // Normal
          "rgba(255, 206, 86, 0.6)", // Sobrepeso
          "rgba(255, 99, 132, 0.6)", // Obesidade
          "rgba(153, 102, 255, 0.6)", // Obesidade Grave
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Seu IMC: ${imc}`,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 50,
      },
    },
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title">Gráfico do IMC</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default Chart;