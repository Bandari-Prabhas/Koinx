// SentimentSection.js
import React from "react";
import SentimentCard from "./SentimentCard";

const SentimentSection = () => {
  const sentimentCards = [
    {
      icon: "fas fa-calculator",
      title: "Calculator Insights",
      description:
        "Lorem ipsum dolor sit amet consectetur. Duis quis dignissim mattis enim tincidunt.",
      bgColor: "bg-green-100",
    },
    {
      icon: "fas fa-arrow-up",
      title: "Growth Event",
      description:
        "Lorem ipsum dolor sit amet consectetur. Duis quis dignissim mattis enim tincidunt. This card has an extended height for a unique layout.",
      bgColor: "bg-blue-100",
      cardStyle: "h-60",
    },
    {
      icon: "fas fa-meh",
      title: "Neutral Event",
      description:
        "Lorem ipsum dolor sit amet consectetur. Duis quis dignissim mattis enim tincidunt.",
      bgColor: "bg-gray-100",
      overlayIcon: "fas fa-arrow-right",
    },
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h1 className="text-3xl font-bold mb-6 ">Sentiment</h1>
            <h2 className="text-gray-600 text-2xl mb-4">Key Events<i className="fa fa-info-circle ml-4" aria-label="Information"></i>
            </h2>
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
        {/* Include Analyst Estimates Section Here */}
      </div>
    </section>
  );
};

export default SentimentSection;
