// AboutBitcoinSection.js
import React from "react";
import ProfitsImage from "../assets/im.jpg";
import TaxImage from "../assets/img.png";

const AboutBitcoinSection = () => (
  <section className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-6">About Bitcoin</h2>
    <div className="mb-4">
      <h3 className="text-lg font-semibold">What is Bitcoin?</h3>
      <p className="text-sm text-gray-600">
        Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of
        $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70%
        from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day
        all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC
        and a max supply of 21 M BTC.
      </p>
    </div>
    <div>
      <h3 className="text-lg font-semibold">Lorem ipsum dolor sit amet</h3>
      <p className="text-sm text-gray-600 mt-6 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare ipsum at velit fermentum, sed tincidunt orci consequat. Nam malesuada turpis ut felis fermentum, vitae posuere arcu posuere. Proin sit amet ante augue. Aenean tempus nisl ac nisl faucibus, in aliquam lorem sollicitudin. Quisque ac urna vitae orci elementum venenatis. Aliquam erat volutpat. Integer varius hendrerit auctor.
      </p>
    </div>
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Already Holding Bitcoin?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="flex items-center p-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-md">
          <img src={ProfitsImage} alt="Profits" className="w-24 h-24 rounded-md object-cover mr-4" />
          <div className="text-white">
            <h3 className="text-lg font-semibold">Calculate your </h3>
            <h3 className="text-lg font-semibold">Profits</h3>
            <button className="mt-2 px-4 py-2 bg-white text-blue-600 rounded-lg shadow-md font-medium flex items-center">
              Check Now
              <i className="fas fa-arrow-right ml-2" />
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center p-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg shadow-md">
          <img src={TaxImage} alt="Tax Liability" className="w-24 h-24 rounded-md object-cover mr-4" />
          <div className="text-white">
            <h3 className="text-lg font-semibold">Calculate your </h3>
            <h3 className="text-lg font-semibold">Tax Liability</h3>
            <button className="mt-2 px-4 py-2 bg-white text-blue-600 rounded-lg shadow-md font-medium flex items-center">
              Check Now
              <i className="fas fa-arrow-right ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutBitcoinSection;
