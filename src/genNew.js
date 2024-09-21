// import React, { useEffect, useState } from 'react';

// const WelcomeMessage = () => {
//   const [message, setMessage] = useState('Loading...');

//   // Runs only once, after the component is mounted
//   useEffect(() => {
//     console.log('Component has mounted');
//     setMessage('Welcome to the page!');
//   }, []); // The empty array means this effect will run only once, when the component mounts.

//   return (
//     <div>
//       <h1>{message}</h1>
//     </div>
//   );
// };

// export default WelcomeMessage


// import React, { useState, useEffect } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   // Effect runs every time `count` changes
//   useEffect(() => {
//     console.log('The count has updated:', count);
//   }, [count]); // `count` is a dependency, so the effect runs whenever `count` changes.

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

// export default Counter;



// import React, { useState, useEffect } from 'react';

// const Timer = () => {
//   const [seconds, setSeconds] = useState(0);

//   // Effect runs on mount and every time the component re-renders
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     // Cleanup function to clear the interval when the component unmounts
//     return () => {
//       console.log('Cleaning up...');
//       clearInterval(intervalId);
//     };
//   }, []);

//   return <div>Seconds: {seconds}</div>;
// };

// const App = () => {
//   const [showTimer, setShowTimer] = useState(true);

//   return (
//     <div>
//       {showTimer && <Timer />}
//       <button onClick={() => setShowTimer(false)}>Stop Timer</button>
//     </div>
//   );
// };

// export default App;




// import React, { useEffect } from 'react';

// function App() {
  
//   const fetchPosts = async () => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       console.log(await response.json());
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);
  
//   return <h2>API</h2>;
// }

// export default App;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    } catch (error) {
      setError(error.message); // Set the error state to display
    } finally {
      setLoading(false); // Update loading state here
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return ( // Return the JSX block properly
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
