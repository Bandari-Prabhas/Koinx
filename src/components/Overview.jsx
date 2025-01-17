import React, { useState, useEffect } from "react";
import axios from "axios";

const Overview = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch team members from the Random User API
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=3") // Fetch 3 random users
      .then((response) => {
        setTeamMembers(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching team members:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white min-h-screen p-10">
      {/* Tokenomics Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">Tokenomics</h2>
        <h3 className="text-lg font-semibold mb-2">Initial Distribution</h3>
        <div className="flex items-center">
          {/* Donut Chart */}
          <div className="w-1/3 relative">
            <svg viewBox="0 0 36 36" className="w-32 h-32">
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="transparent"
                stroke="#d1d5db"
                strokeWidth="4" // Background circle (light gray)
                strokeDasharray="100 0"
                transform="rotate(-90 18 18)"
              />
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="transparent"
                stroke="#1c64f2"
                strokeWidth="4"
                strokeDasharray="80 20" // 80% filled
                transform="rotate(-90 18 18)"
              />
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="transparent"
                stroke="#f59e0b"
                strokeWidth="4"
                strokeDasharray="20 80" // 20% filled
                transform="rotate(-90 18 18)"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="text-sm font-bold text-gray-800">100%</p>
            </div>
          </div>
          {/* Legend and Description */}
          <div className="ml-6">
            <ul className="mb-4">
              <li className="flex items-center mb-2">
                <span
                  className="block w-4 h-4 rounded-full bg-blue-600 mr-2"
                  aria-hidden="true"
                ></span>
                Crowdsale Investors: 80%
              </li>
              <li className="flex items-center">
                <span
                  className="block w-4 h-4 rounded-full bg-yellow-500 mr-2"
                  aria-hidden="true"
                ></span>
                Foundation: 20%
              </li>
            </ul>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Team</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam.
        </p>
        {/* Display loading message while fetching data */}
        {loading && <p className="text-center text-gray-500">Loading team members...</p>}

        {/* Display team members */}
        <div className="space-y-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-blue-100 rounded-lg p-4 flex ">
              {/* Left part: Image, Name, and Designation */}
              <div className="flex-none w-22">
                <img
                  src={member.picture.large} // Use image URL from API
                  alt={`${member.name.first} ${member.name.last}`}
                  className="w-24 h-24 rounded-lg" // Image with rounded-lg
                />
                <div className="text-center mt-4">
                  <h3 className="font-semibold">{`${member.name.first} ${member.name.last}`}</h3>
                  <p className="text-sm text-gray-500">Designation here</p> {/* Placeholder for designation */}
                </div>
              </div>

              {/* Right part: Lorem ipsum text */}
              <div className="mt-4 ">
                <p className="text-lg text-gray-600 ml-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ducimus eaque possimus quo enim alias dolorum odio corrupti quidem laudantium, architecto hic, maiores eum at quis temporibus. Nam, consequuntur libero!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
