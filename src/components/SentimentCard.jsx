// SentimentCard.js
import React from "react";

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

export default SentimentCard;
