import React from 'react'
import { useEffect } from 'react'
import {Home,User,Code,Mail} from 'lucide-react'
import { Link } from 'react-scroll'
const Navbar = ({menuOpen,setMenuOpen}) => {
   // disable scrolling
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen])

  return (
    <nav className="fixed top-0 w-full  z-40 bg-[#06202B] backdrop-blur-lg shadow-lg">
       <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
          <div className="cursor-pointer rounded-full h-13 w-13 flex justify-center items-center  border-2 border-[#092836] hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"><span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Mac</span></div>
                 
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={()=> {setMenuOpen((prev)=>!prev)}}>
                  &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                  <Link to ="home" smooth = {true} duration = {500} className="text-gray-400 hover:border cursor-pointer hover:border-blue-900 px-3 py-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] rounded-lg flex gap-1 items-center"><Home size={19} /> Home</Link>
                  <Link to="About" smooth = {true} duration = {500} className="text-gray-400 hover:border cursor-pointer hover:border-blue-900 px-3 py-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] rounded-lg flex gap-1 items-center"><User size={19} />About</Link>
                  <Link to="Projects"smooth = {true} duration = {500} className="text-gray-400 hover:border cursor-pointer hover:border-blue-900 px-3 py-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] rounded-lg flex gap-1 items-center"> <Code size={19} />Projects</Link>
                  <Link to="Contact" smooth = {true} duration = {500} className="text-gray-400 hover:border cursor-pointer hover:border-blue-900 px-3 py-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] rounded-lg flex gap-1 items-center"><Mail size={19} />Contact</Link>
                </div>

          </div>
       </div>
    </nav>
  )
}

export default Navbar
