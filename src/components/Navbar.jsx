import React from 'react'
import { useEffect, useState } from 'react'
import {Home,User,Code,Mail, Moon, Sun, Menu} from 'lucide-react'
import { Link } from 'react-scroll'
import { useTheme } from '../context/ThemeContext.jsx'
const Navbar = ({menuOpen,setMenuOpen}) => {

   const { theme, toggleTheme } = useTheme(); // use the theme context
   // disable scrolling
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen])
 const name = [(<p className="text-[#f7e9e9]">adarsh</p>),<p className="text-blue-400">Portfolio</p>]
  return (
    <nav className="fixed top-0 w-full  z-40   bg-[#09122C] backdrop-blur-sm shadow-lg dark:bg-black/90 dark:text-white border-b-2 dark:border-white/30">
       <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
          <Link to = "home"  smooth={true} duration={500} className="flex justify-center cursor-pointer text-white">{name[0]}.{name[1]}</Link>
                 
                <div className="dark:text-white w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={()=> {setMenuOpen((prev)=>!prev)}}>
                  <Menu className="w-6 h-6 text-white" />
                </div>

  <div className="hidden md:flex items-center space-x-8">
      <Link to="home" smooth={true} duration={500} className="group text-gray-200 cursor-pointer px-3 py-2 rounded-lg flex gap-1 items-center relative">
        <Home size={19} /> Home
        <span className="absolute left-2 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-[88%]"></span>
      </Link>

      <Link to="About" smooth={true} duration={500} className="group text-gray-200 cursor-pointer px-3 py-2 rounded-lg flex gap-1 items-center relative">
        <User size={19} /> About
        <span className="absolute left-2 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-[88%]"></span>
      </Link>

      <Link to="Projects" smooth={true} duration={500} className="group text-gray-200 cursor-pointer px-3 py-2 rounded-lg flex gap-1 items-center relative">
        <Code size={19} /> Projects
        <span className="absolute left-2 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-[88%]"></span>
      </Link>

      <Link to="Contact" smooth={true} duration={500} className="group text-gray-200 cursor-pointer px-3 py-2 rounded-lg flex gap-1 items-center relative">
        <Mail size={19} /> Contact
        <span className="absolute left-2 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-[88%]"></span>
      </Link>

       <button onClick={toggleTheme} className="cursor-pointer text-gray-200">
              {theme === 'light' ? (<Sun className="w-5 h-5" /> ):(<Moon className="w-5 h-5" />) }
       </button>
</div>


          </div>
       </div>
    </nav>
  )
}

export default Navbar
