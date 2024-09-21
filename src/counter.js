import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(2);

  // Event handler functions
  const handleIncrease = () => {
    setCount(count + 10);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold mb-4">Count: {count}</h1>
      {/* Attach event handlers to buttons */}
      <button
        onClick={handleIncrease}
        className="bg-green-500 text-white font-bold py-2 px-4 rounded-md mr-2 hover:bg-green-700"
      >
        Increase
      </button>
      <button
        onClick={handleDecrease}
        className="bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700"
      >
        Decrease
      </button>
    </div>
  );
}

export default Counter;
