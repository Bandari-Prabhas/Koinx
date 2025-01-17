import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TradingViewWidget from './components/TradingViewWidget'; // For BTC chart widget
import TrendingCoins from './components/TrendingCoins'; // Trending coins component
import CryptoOverview from './components/CryptoOverview';  // Ensure the correct import
import SentimentCard from './components/SentimentCard';
import SentimentSectin from './components/SentimentSectin';
import AboutBitcoinSection from './components/AboutBitcoinSection';
import Overview from './components/Overview';
import CryptoDashboard from './components/CryptoDashboard';
function App() {
  const [bitcoinData, setBitcoinData] = useState({
    usd: 0,
    inr: 0,
    usd_24h_change: 0,
  });

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true'
        );
        setBitcoinData(response.data.bitcoin);
      } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
      }
    };
    fetchBitcoinData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold text-blue-600">
            <span style={{ color: "blue" }}>Koin</span>
            <span style={{ color: "gold" }}>X</span>
            <sup className="text-sm text-gray-500">TM</sup>
          </div>
          <nav className="flex space-x-8 text-lg">
            <a href="#" className="font-semibold mt-2 text-gray-900 hover:text-blue-500">
              Crypto Taxes
            </a>
            <a href="#" className="font-semibold mt-2 text-gray-900 hover:text-blue-500">
              Free Tools
            </a>
            <a href="#" className="font-semibold mt-2 text-gray-900 hover:text-blue-500">
              Resource Center
            </a>
            <button className="p-2 rounded-xl ml-2 bg-blue-600 text-white text-xl font-semibold pl-5 pr-5">
              Get Started
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-6 flex">
        {/* Left Part */}
        <div className="flex-1 pr-6">
          <h2 className="text-xl font-bold mb-4">
            Cryptocurrencies <i className="fas fa-angle-right"></i> Bitcoin
          </h2>
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              {/* Bitcoin Logo */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center">
                  <i className="fab fa-bitcoin text-white text-3xl"></i>
                </div>

                {/* Bitcoin Details */}
                <div className="flex items-center space-x-3">
                  <h2 className="text-2xl font-bold">Bitcoin</h2>
                  <p className="text-gray-500">BTC</p>
                  <p className="text-white bg-gray-600 p-2 pl-2 pr-2 rounded-lg">Rank #1</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1">
              <div className="col-span-1">
                <p className="text-4xl font-bold text-gray-800">
                  $ {bitcoinData ? bitcoinData.usd.toLocaleString() : "Loading..."}
                </p>
                {/* Graph */}
                <TradingViewWidget />
              </div>
            </div>
          </div>

          {/* Additional Sections */}
          <CryptoOverview /> {/* Ensure this is correctly placed and rendered */}
          {/* <SentimentCard /> */}
          <SentimentSectin />
          <AboutBitcoinSection/>
          <Overview/>
        </div>

        {/* Right Part */}
        <div className="flex flex-col w-1/3 ml-6">
          {/* Blue Container */}
          <div className="bg-[rgb(7,7,255)] text-white p-6 rounded-lg mt-12 mb-6">
            <h2 className="text-3xl font-bold mb-4">Get Started with KoinX</h2>
            <p className="text-lg mb-4">
              With our range of features that you can equip for free, KoinX allows you to
              be more educated and aware of your tax reports.
            </p>
            <div className="mb-4">
              <img src="/src/assets/in.png" alt="Feature" className="w-full rounded-md" />
            </div>
            <button className="w-2/3 py-3 ml-20 bg-white text-blue-800 rounded-lg shadow hover:bg-gray-100 text-lg">
              Get Started for FREE
            </button>
          </div>

          {/* Trending Coins Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Trending Coins (24h)</h2>
            <div className="flex flex-col space-y-4">
              {/* Ethereum */}
              <div className="p-4 rounded-lg flex items-center space-x-4 bg-gray-100">
                <i className="fab fa-ethereum text-blue-500 text-3xl"></i>
                <div className="flex justify-between w-full">
                  <div className="text-xl">Ethereum</div>
                  <div className="text-green-500 p-1 bg-gray-200 rounded-lg pl-3 pr-3">^ 8.2%</div>
                </div>
              </div>

              {/* Bitcoin */}
              <div className="p-4 rounded-lg flex items-center space-x-4 bg-gray-100">
                <i className="fab fa-bitcoin text-yellow-500 text-3xl"></i>
                <div className="flex justify-between w-full">
                  <div className="text-xl">Bitcoin</div>
                  <div className="text-green-500 p-1 bg-gray-200 rounded-lg pl-3 pr-3">^ 5.2%</div>
                </div>
              </div>

              {/* Polygon */}
              <div className="p-4 rounded-lg flex items-center space-x-4 bg-gray-100">
                <i className="fab fa-polygon text-blue-600 text-3xl"></i>
                <div className="flex justify-between w-full">
                  <div className="text-xl">Polygon</div>
                  <div className="text-green-500 p-1 bg-gray-200 rounded-lg pl-3 pr-3">^ 3.8%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <CryptoDashboard/>
    </div>
  );
}

export default App;
