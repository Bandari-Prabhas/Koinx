import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registering the chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CryptoDashboard = () => {
  const coins = [
    {
      category: "You May Also Like",
      items: [
        {
          name: "BNB",
          price: "$319.34",
          change: "+0.52%",
          chartData: [65, 59, 80, 81, 56, 55, 40],
          chartColor: "#4CAF50",
          icon: "fa-brands fa-airbnb",
        },
        {
          name: "SOL",
          price: "$109.33",
          change: "-2.89%",
          chartData: [28, 48, 40, 19, 86, 27, 90],
          chartColor: "#F44336",
          icon: "fas fa-coins",
        },
        {
          name: "XRP",
          price: "$0.634810",
          change: "+0.78%",
          chartData: [18, 48, 77, 9, 100, 27, 40],
          chartColor: "#4CAF50",
          icon: "fas fa-chart-line",
        },
        {
          name: "ADA",
          price: "$0.614869",
          change: "-1.57%",
          chartData: [65, 75, 70, 81, 66, 55, 30],
          chartColor: "#F44336",
          icon: "fa-solid fa-rectangle-ad",
        },
        {
          name: "AVAX",
          price: "$41.05",
          change: "-3.78%",
          chartData: [85, 59, 80, 31, 46, 55, 20],
          chartColor: "#F44336",
          icon: "fas fa-chart-line",
        },
      ],
    },
    {
      category: "Trending Coins",
      items: [
        {
          name: "BTC",
          price: "$45,332.83",
          change: "+0.10%",
          chartData: [50, 60, 70, 91, 66, 75, 90],
          chartColor: "#4CAF50",
          icon: "fab fa-bitcoin",
        },
        {
          name: "ETH",
          price: "$2,375.15",
          change: "-0.21%",
          chartData: [65, 59, 80, 81, 56, 55, 40],
          chartColor: "#F44336",
          icon: "fab fa-ethereum",
        },
        {
          name: "stETH",
          price: "$2,371.72",
          change: "-0.34%",
          chartData: [28, 48, 40, 19, 86, 27, 90],
          chartColor: "#F44336",
          icon: "fas fa-chart-line",
        },
        {
          name: "UNI",
          price: "$7.3192",
          change: "-4.02%",
          chartData: [65, 59, 80, 81, 56, 55, 40],
          chartColor: "#F44336",
          icon: "fa-solid fa-universal-access",
        },
        {
          name: "CFG",
          price: "$0.773600",
          change: "-1.76%",
          chartData: [85, 59, 80, 31, 46, 55, 20],
          chartColor: "#F44336",
          icon: "fas fa-chart-line",
        },
      ],
    },
  ];

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: { display: false },
      y: { display: false },
    },
    elements: {
      point: { radius: 0 },
    },
  };

  return (
    <div className="p-6 space-y-10 bg-white min-h-screen">
      {coins.map((section, idx) => (
        <div key={idx}>
          {/* Heading for the section */}
          <div className="mb-4">
            <h2 className="text-2xl ml-20 font-bold text-gray-800">{section.category}</h2>
          </div>

          {/* Container section */}
          <div className="flex justify-center flex-wrap gap-6">
            {section.items.map((coin, index) => (
              <div
                key={index}
                className="relative flex-none w-80 p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-all transform hover:scale-105"
              >
                {/* Left Arrow Icon (on the left side of the container) */}
                {index === 0 && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <button className="p-3 border rounded-full bg-white shadow hover:shadow-lg transition-all hover:bg-gray-200">
                      <i className="fas fa-arrow-left text-gray-600"></i>
                    </button>
                  </div>
                )}

                {/* Right Arrow Icon (on the right side of the container) */}
                {index === section.items.length - 1 && (
                  <div className="ml-6 absolute right-0 top-1/2 transform -translate-y-1/2">
                    <button className="  p-3 border rounded-full bg-white shadow hover:shadow-lg transition-all hover:bg-gray-200">
                      <i className="fas fa-arrow-right text-gray-600"></i>
                    </button>
                  </div>
                )}

                {/* Coin Info */}
                <div className="flex items-center justify-between mb-4">
                  <i
                    className={`${coin.icon} text-3xl text-gray-700`}
                    aria-hidden="true"
                  ></i>
                  <span
                    className={`text-sm font-semibold ${
                      coin.change.includes("+")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {coin.change}
                           </span>
                           
                </div>
                <p className="text-lg font-semibold mb-2 text-gray-800">{coin.price}</p>
                <p className="text-sm font-medium text-gray-500 mb-4">{coin.name}</p>

                {/* Chart */}
                <div className="h-24">
                  <Line
                    data={{
                      labels: ["", "", "", "", "", "", ""],
                      datasets: [
                        {
                          data: coin.chartData,
                          borderColor: coin.chartColor,
                          borderWidth: 2,
                          fill: false,
                        },
                      ],
                    }}
                    options={options}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoDashboard;
