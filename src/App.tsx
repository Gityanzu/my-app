// import { useState } from 'react'

// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1>React</h1>
//     </>
//   )
// }

// export default App

import { RouterProvider } from 'react-router-dom'
import router from './router'
 import './App.css'

function App() {
  return <RouterProvider router={router} />
}

export default App
