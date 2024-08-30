import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="card bg-white shadow-md rounded-lg h-full p-6 w-full mb-6">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;
