import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from "./components/sections/Contact"
import Footer from "./components/Footer"
import { Toaster } from 'react-hot-toast';
import "./index.css"
function App() {
  const [isLoaded,setisLoaded] = useState(false)
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {!isLoaded && <LoadingScreen onComplete={()=>{setisLoaded(true)}}/>}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#E8F9FF] text-black dark:bg-black dark:text-white`}>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Home loadState = {isLoaded}/>
          <div className="h-[2px] w-full bg-[#575353]"></div>
          <About/>
          <div className="h-[2px] w-full bg-[#575353]"></div>
          <Projects/>
          <div className="h-[2px] w-full bg-[#575353]"></div>
          <Contact/>
          <Footer/>
      </div>  
    </>
  )
}

export default App
