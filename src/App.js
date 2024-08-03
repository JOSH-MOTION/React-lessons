import Navbar from "./Navbar"

import Home from "./Home"

function App() {

  // const title = "my name is gen28"
  return (
    <div className="App">
     <div className='content'>
            <Navbar />
            <Home />
      <h1>App component</h1>
    
      {/* <h1>{title}</h1> */}
     </div>
    </div>
  )
}

export default App