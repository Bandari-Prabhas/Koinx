import React from 'react';

const Header = () => {
  return (
    <header className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-blue-600">
          <span style={{ color: "blue" }}>Koin</span>
          <span style={{ color: "gold" }}>X</span>
          <sup className="text-sm text-gray-500">TM</sup>
        </div>
        <nav className="flex space-x-8 text-lg">
          <a href="#" className="font-semibold mt-2 text-gray-900 hover:text-blue-500">Crypto Taxes</a>
          <a href="#" className="font-semibold mt-2 text-gray-900 hover:text-blue-500">Free Tools</a>
          <a href="#" className="font-semibold mt-2 text-gray-900 hover:text-blue-500">Resource Center</a>
          <button className="p-2 rounded-xl ml-2 bg-blue-600 text-white text-xl font-semibold pl-5 pr-5">Get Started</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
