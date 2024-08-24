import Navbar from "./Navbar"

import Home from "./Home"
import New from "./new"
import Counter from "./counter"



function App() {

  // const title = "my name is gen28"
  return (
    <div className="App">
     <div className='content'>
      <div >
      <h1 className="text-center font-bold text-4xl">App component</h1> 
            {/* <Navbar />
            <Home /> */}
          <New />
          <Counter />
          
    
      {/* <h1>{title}</h1> */}
      </div>
     </div>
    </div>
  )
}

export default App