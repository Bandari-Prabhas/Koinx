import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/search/trending'
        );
        setTrendingCoins(response.data.coins.slice(0, 3)); // Top 3 trending coins
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };
    fetchTrendingCoins();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Trending Coins (24h)</h2>
      <div className="space-y-4">
        {trendingCoins.map((coin) => (
          <div key={coin.item.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={coin.item.thumb} alt={coin.item.name} className="w-10 h-10 mr-4" />
              <p className="text-lg font-semibold">{coin.item.name} ({coin.item.symbol.toUpperCase()})</p>
            </div>
            <p className="text-lg">{coin.item.price_btc.toFixed(6)} BTC</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
