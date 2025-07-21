import React from 'react'
import {Home,User,Code,Mail, Sun, Moon} from 'lucide-react'
import {Link} from 'react-scroll'
import { useTheme } from '../context/ThemeContext';
const MobileMenu = ({menuOpen,setMenuOpen}) => {
  const { theme, toggleTheme } = useTheme(); // use the theme context
  const handleThemeAndMenu = () => {
    toggleTheme();  
    setMenuOpen((prev)=>!prev) // toggle the menu state;
  }
  return (
    <div className={`z-40 fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] flex flex-col items-center justify-center
    transition-all duration-300 ease-in-out ${ menuOpen ? "h-screen opacity-100 poiner-events-auto" : "h-0 opacity-0 pointer-events-none"}
    `}>
       
       <button onClick={()=> setMenuOpen(false) } className="absolute top-6 right-6 text-white text-3xl cursor-pointer ">&times;</button>

       <div className="flex flex-col justify-center items-center space-y-8  h-[90%] w-full">
                  <Link onClick={()=>setMenuOpen(false)} to = "home" smooth = {true} duration = {500} className={`text-gray-400 text-2xl font-bold transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0":"opacity-0 translate-y-5"} cursor-pointer flex items-center gap-2`}><Home size={22}/>Home</Link>
                  <Link onClick={()=>setMenuOpen(false)} to = "About" smooth = {true} duration = {500} className={`text-gray-400 text-2xl font-bold transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0":"opacity-0 translate-y-5"} cursor-pointer flex items-center gap-2`}><User size={22}/>About</Link>
                  <Link onClick={()=>setMenuOpen(false)} to = "Projects" smooth = {true} duration = {500} className={`text-gray-400 text-2xl font-bold transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0":"opacity-0 translate-y-5"} cursor-pointer flex items-center gap-2`}><Code size={22}/>Projects</Link>
                  <Link onClick={()=>setMenuOpen(false)} to = "Contact" smooth = {true} duration = {500} className={`text-gray-400 text-2xl font-bold transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0":"opacity-0 translate-y-5"} cursor-pointer flex items-center gap-2`}><Mail size={22}/>Contact</Link>
                  <button onClick={handleThemeAndMenu} className={`text-gray-400 text-2xl font-bold transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0":"opacity-0 translate-y-5"} cursor-pointer flex items-center gap-2`}>
                         {theme === 'light' ? (<Sun className="w-8 h-8" /> ):(<Moon className="w-8 h-8" />) } change Theme
                  </button>
       </div>
    </div>
  )
}

export default MobileMenu
