import React from "react";

const CryptoOverview = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      {/* Header Tabs */}
      <div className="flex space-x-6 border-b-2 pb-2">
        {[
          "Overview",
          "Fundamentals",
          "News Insights",
          "Sentiments",
          "Team",
          "Technicals",
          "Tokenomics",
        ].map((tab, index) => (
          <button
            key={index}
            className={`text-xl font-medium hover:underline ${
              tab === "Overview"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Performance Section */}
      <div className="mt-6">
        <h2 className="text-3xl font-bold mb-4 hover:underline">
        
          Performance
        </h2>
        <p className="text-gray-600">Today'Low</p> 
        <div className="flex items-center justify-between">
          
          <span className="text-red-500 font-semibold">
            <i className="mr-2 fa fa-arrow-down" aria-label="Price drop"></i>
            46,930.22
          </span>
          <div className="flex-1 mx-4">
          <div className="h-2 bg-gray-200 rounded-full">
  <div
    className="h-2  mt-5  bg-gradient-to-r from-red-400 to-green-400 rounded-full"
    style={{ width: "100%" }}
  ></div>
</div>


         
          </div>
          <span className="text-green-500 font-semibold">
            <i className="mr-2 fa fa-arrow-up" aria-label="Price increase"></i>
            49,343.83
          </span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-gray-500 text-sm">
            <i className="mr-2 fa fa-caret-down" aria-label="52 Week Low"></i>
            52W Low
          </span>
          <div className="flex items-center justify-between">
          <div className="flex-1 mx-4">
          <div className="h-2 bg-gray-200 rounded-full">
  <div
    className="h-2  mt-5  bg-gradient-to-r from-red-400 to-green-400 rounded-full"
    style={{ width: "100%" }}
  ></div>
              </div>
              </div>
          </div>
          <span className="text-gray-500 text-sm">
            <i className="mr-2 fa fa-caret-up" aria-label="52 Week High"></i>
            52W High
          </span>
        </div>
      </div>
      
      <span className="text-red-500 font-semibold">
            <i className="mr-2 fa fa-arrow-down" aria-label="Price drop"></i>
            46,930.22
            </span>

      {/* Fundamentals Section */}
      <div className="mt-6">
        <h2 className="text-lg font-bold mb-4 hover:underline">
          {/* <i className="mr-2 fa fa-database" aria-label="Fundamentals"></i> */}
          Fundamentals
          <i className="ml-4 text-gray-600 fa fa-info-circle" aria-label="Information"></i>

        </h2>
        <div className="grid grid-cols-2 gap-6">
          {[
            { label: "Bitcoin Price", value: "$16,815.46" },
            { label: "Market Cap", value: "$323,507,290,047" },
            { label: "24h Low / 24h High", value: "$16,382.07 / $16,874.12" },
            { label: "Market Cap Dominance", value: "38.343%" },
            { label: "7d Low / 7d High", value: "$16,382.07 / $16,874.12" },
            { label: "Volume / Market Cap", value: "0.0718" },
            { label: "Trading Volume", value: "$23,249,202,782" },
            { label: "All-Time High", value: "$69,044.77 -75.6%" },
            { label: "Market Cap Rank", value: "#1" },
            { label: "All-Time Low", value: "$67.81 (24729.1%)" },
          ].map((item, index) => (
            <div key={index} className="flex justify-between">
              <span className="text-gray-500">
                <i className="mr-2 fa fa-tag" aria-label="Label"></i>
                {item.label}
              </span>
              <span className="font-medium">
                <i className="mr-2 fa fa-dollar-sign" aria-label="Value"></i>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoOverview;
