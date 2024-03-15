import './App.css'
import Banner from './components/banner/Banner'
import Information from './components/lower-banner-section/Information'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='max-w-7xl mx-auto'>
        <Banner></Banner>
        <Information></Information>
      </div>
      
    </>
  )
}

export default App
