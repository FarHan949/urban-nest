import React from 'react';

const Feature_02 = () => {
  const stats = [
    { number: 310, label: 'Listed Property' },
    { number: 51, label: 'Mega Project' },
    { number: 25, label: 'Awards Won' },
    { number: 2130, label: 'Happy Clients' },
  ];

  return (
    <div className="bg-gray-900 text-white py-8 rounded-lg items-center">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-CoyoteBrown">{stat.number}</h2>
            <p className="mt-2 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature_02;
