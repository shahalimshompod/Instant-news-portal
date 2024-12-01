import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </>
  )
}

export default App
