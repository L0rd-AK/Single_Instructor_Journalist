import { Outlet } from 'react-router-dom'
import './App.css'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Navbar />
        <Outlet />
      </div>
        <Footer />
    </>
  )
}

export default App
