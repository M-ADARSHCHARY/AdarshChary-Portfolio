import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from "./components/sections/Contact"
import Footer from "./components/Footer"
import "./index.css"
function App() {
  const [isLoaded,setisLoaded] = useState(false)
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={()=>{setisLoaded(true)}}/>}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black-900 text-gray-100`}>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Home/>
          <div className="h-[2px] w-full bg-[#575353]"></div>
          <About/>
          <div className="h-[2px] w-full bg-[#575353]"></div>
          <Projects/>
          <div className="h-[2px] w-full bg-[#575353]"></div>
          <Contact/>
          <div className="h-[2px] w-full bg-[#575353]"></div>
          <Footer/>
      </div>  
    </>
  )
}

export default App
