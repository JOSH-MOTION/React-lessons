// import { useState } from 'react';

//create state
//read the state
//update state





// function Try() {
//   const [number, setNumber] = useState(4);

//   const addNumber = () => {
//    setNumber(number + 5);
//   };

//   return (
//     <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
//       <p>New Number: {number}</p>
//       <button
//          onClick={addNumber}
//         className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
//       >
//         Add Number
//       </button>
//     </div>
//   );
// }

// export default Try;


import React, { useState } from 'react';

function New() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Name:</label>
        <input
          onChange={handleNameChange}
          value={name}
          type="text"
          placeholder="Enter your name"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Age:</label>
        <input
          onChange={handleAgeChange}
          value={age}
          type="number"
          placeholder="Enter your age"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Email:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Confirm Password:</label>
        <input
          type="password"
          placeholder="Confirm your password"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Phone Number:</label>
        <input
          type="number"
          placeholder="Enter your phone number"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

export default New;
