import React from 'react';
import BitcoinCard from './BitcoinCard';
import GetStarted from './GetStarted';
import TrendingCoins from './TrendingCoins';
import CryptoOverview from './CryptoOverview';
import SentimentSection from './SentimentSection';

const MainContent = ({ bitcoinData }) => {
  return (
    <main className="container mx-auto p-6 flex">
      {/* Left Part */}
      <div className="flex-1 pr-6">
        <h2 className="text-xl font-bold mb-4">Cryptocurrencies <FontAwesomeIcon icon={faAnglesRight} /> Bitcoin</h2>
        <BitcoinCard bitcoinData={bitcoinData} />
        <CryptoOverview />
        <SentimentSection />
      </div>

      {/* Right Part */}
      <div className="flex flex-col w-1/3 ml-6">
        <GetStarted />
        <TrendingCoins />
      </div>
    </main>
  );
};

export default MainContent;
