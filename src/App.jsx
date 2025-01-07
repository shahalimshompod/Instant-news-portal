import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>

      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>

    </>
  )
}

export default App
