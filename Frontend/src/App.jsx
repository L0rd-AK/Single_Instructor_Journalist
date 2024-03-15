import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='max-w-7xl mx-auto'>
        <Banner></Banner>
      </div>
      
    </>
  )
}

export default App
