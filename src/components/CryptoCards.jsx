import React from 'react';
import { Line } from 'react-chartjs-2';
import { FaBitcoin, FaEthereum, FaBinance, FaSolana } from 'react-icons/fa';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import './CryptoCards.css'; // Custom CSS file

const CryptoCard = ({ icon, name, price, change, chartData }) => {
  return (
    <div className="crypto-card">
      <div className="crypto-header">
        <span className="crypto-icon">{icon}</span>
        <span className={`crypto-change ${change >= 0 ? 'positive' : 'negative'}`}>
          {change >= 0 ? `+${change}%` : `${change}%`}
        </span>
      </div>
      <h2>{name}</h2>
      <h3>${price}</h3>
      <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};

const CryptoCards = () => {
  // Example chart data for the graphs
  const chartDataExample = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Price',
        data: [320, 310, 315, 305, 295, 300, 315],
        fill: false,
        backgroundColor: 'green',
        borderColor: 'green',
      },
    ],
  };

  return (
    <div className="crypto-section">
      <h2>You May Also Like</h2>
      <div className="crypto-container">
        <AiOutlineArrowLeft className="nav-arrow" />
        <CryptoCard icon={<FaBinance />} name="BNB" price="319.34" change={0.52} chartData={chartDataExample} />
        <CryptoCard icon={<FaSolana />} name="SOL" price="109.33" change={-2.89} chartData={chartDataExample} />
        <CryptoCard icon={<FaEthereum />} name="XRP" price="0.634810" change={0.78} chartData={chartDataExample} />
        <CryptoCard icon={<FaBitcoin />} name="ADA" price="0.614869" change={-1.57} chartData={chartDataExample} />
        <AiOutlineArrowRight className="nav-arrow" />
      </div>

      <h2>Trending Coins</h2>
      <div className="crypto-container">
        <AiOutlineArrowLeft className="nav-arrow" />
        <CryptoCard icon={<FaBitcoin />} name="BTC" price="45,332.83" change={0.1} chartData={chartDataExample} />
        <CryptoCard icon={<FaEthereum />} name="ETH" price="2,375.15" change={-0.21} chartData={chartDataExample} />
        <CryptoCard icon={<FaEthereum />} name="stETH" price="2,371.72" change={-0.34} chartData={chartDataExample} />
        <CryptoCard icon={<FaBitcoin />} name="UNI" price="7.3192" change={-4.02} chartData={chartDataExample} />
        <AiOutlineArrowRight className="nav-arrow" />
      </div>
    </div>
  );
};

export default CryptoCards;
