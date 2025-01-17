import React from 'react';

const GetStarted = () => {
  return (
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
  );
};

export default GetStarted;
