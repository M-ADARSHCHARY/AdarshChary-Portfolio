import React from 'react'
import { useEffect } from 'react'

const Navbar = ({menuOpen,setMenuOpen}) => {
   // disable scrolling
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen])

  return (
    <nav className="fixed top-0 w-full  z-40 bg-[#222222] backdrop-blur-lg shadow-lg">
       <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
          <div className="cursor-pointer rounded-full h-13 w-13 flex justify-center items-center  border-2 border-black hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"><span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Mac</span></div>
                 
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={()=> {setMenuOpen((prev)=>!prev)}}>
                  &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                  <a href="#home" className="text-gray-400 hover:border hover:border-blue-900 px-3 py-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] rounded-lg">Home</a>
                  <a href="#About" className="text-gray-400 hover:border hover:border-blue-900 px-3 py-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] rounded-lg">About</a>
                  <a href="#Projects" className="text-gray-400 hover:border hover:border-blue-900 px-3 py-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] rounded-lg">Projects</a>
                  <a href="#Contact" className="text-gray-400 hover:border hover:border-blue-900 px-3 py-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] rounded-lg">Contact</a>
                </div>

          </div>
       </div>
    </nav>
  )
}

export default Navbar
