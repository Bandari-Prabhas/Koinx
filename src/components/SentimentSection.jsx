import React from "react";
import { createRoot } from "react-dom/client";
import ProfitsImage from "./assets/im.jpg";
import TaxImage from "./assets/img.png";

const SentimentCard = ({
  icon,
  title,
  description,
  bgColor,
  cardStyle = "",
  overlayIcon,
}) => (
  <div
    className={`relative p-6 rounded-lg shadow-md flex flex-col space-y-4 items-start ${bgColor} ${cardStyle}`}
  >
    {/* Main Icon */}
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg">
      <i className={`${icon} text-gray-800 text-xl`} />
    </div>
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
    {/* Overlay Icon */}
    {overlayIcon && (
      <div className="absolute top-1/2 right-3 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-white">
        <i className={`${overlayIcon} text-white`} />
      </div>
    )}
  </div>
);

const SentimentSection = () => {
  const sentimentCards = [
    {
      icon: "fas fa-calculator", // FontAwesome icon class
      title: "Calculator Insights",
      description:
        "Lorem ipsum dolor sit amet consectetur. Duis quis dignissim mattis enim tincidunt.",
      bgColor: "bg-green-100",
    },
    {
      icon: "fas fa-arrow-up", // FontAwesome icon class
      title: "Growth Event",
      description:
        "Lorem ipsum dolor sit amet consectetur. Duis quis dignissim mattis enim tincidunt. This card has an extended height for a unique layout.",
      bgColor: "bg-blue-100",
      cardStyle: "h-60",
    },
    {
      icon: "fas fa-meh", // FontAwesome icon class
      title: "Neutral Event",
      description:
        "Lorem ipsum dolor sit amet consectetur. Duis quis dignissim mattis enim tincidunt.",
      bgColor: "bg-gray-100",
      overlayIcon: "fas fa-arrow-right", // FontAwesome icon class
    },
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-6">Sentiment</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sentimentCards.map((card, index) => (
          <SentimentCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            bgColor={card.bgColor}
            cardStyle={card.cardStyle}
            overlayIcon={card.overlayIcon}
          />
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Analyst Estimates</h3>
        <div className="flex space-x-4">
          {/* Left Section */}
          <div className="flex items-center justify-center mt-8 rounded-full bg-green-100 w-20 h-20 mx-auto">
            <span className="text-green-500 text-xl font-bold">76%</span>
          </div>

          {/* Right Section */}
          <div className="flex flex-col space-y-4 flex-1">
            {/* Buy */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100">
                <span className="text-green-500 font-semibold">76%</span>
              </div>
              <div className="flex-1">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-green-500 rounded-full"
                    style={{ width: "76%" }}
                  ></div>
                </div>
              </div>
              <span className="text-green-500">Buy</span>
            </div>
            {/* Hold */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                <span className="text-gray-500 font-semibold">8%</span>
              </div>
              <div className="flex-1">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-gray-500 rounded-full"
                    style={{ width: "8%" }}
                  ></div>
                </div>
              </div>
              <span className="text-gray-500">Hold</span>
            </div>
            {/* Sell */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100">
                <span className="text-red-500 font-semibold">16%</span>
              </div>
              <div className="flex-1">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-red-500 rounded-full"
                    style={{ width: "16%" }}
                  ></div>
                </div>
              </div>
              <span className="text-red-500">Sell</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SentimentSection />
      <AboutBitcoinSection />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
