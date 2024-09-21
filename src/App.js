// import Navbar from "./Navbar"
// import { useState } from "react"
// import Home from "./Home"
// import New from "./new"
// import Counter from "./counter"
// import UserForms from "./components/UserForms"
// import UserList from "./components/UserList"




// function App() {

//   const [users, setUsers] = useState([
//     { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
//     { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
//     { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
//     { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com' },
//     { id: 5, name: 'Charlie Davis', email: 'charlie.davis@example.com' }
//   ]);

//   const addNewUser = (newUser) => {
//         setUsers ([...users,newUser])
//   }


  

//   return (
//     <div className="App">
//      <div className='content'>
//       <div >
//       <h1 className="text-center font-bold text-4xl">App component</h1> 
//             {/* <Navbar />
//             <Home /> */}
//           {/* <New /> */}
//           {/* <Counter /> */}



//     <div className="container mx-auto px-4">
//     <div className="flex flex-wrap -mx-4">
//       <div className="w-full md:w-1/2 px-4">
//         <UserForms newPerson={addNewUser}/>
//       </div>

//       <div className="w-full md:w-1/2 px-4">
//         <UserList upDate={users} />
    

    
//       {/* <h1>{title}</h1> */}
//       </div>
//      </div>
//     </div>
//     </div>
//     </div>
//     </div>
//   );
// }
// export default App




import React from 'react'
import Useeffect from './genNew'

export default function App() {
  return (
    <div>
     <Useeffect />
    </div>
  )
}

