import React from 'react'

const MobileMenu = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={`z-40 fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] flex flex-col items-center justify-center
    transition-all duration-300 ease-in-out ${ menuOpen ? "h-screen opacity-100 poiner-events-auto" : "h-0 opacity-0 pointer-events-none"}
    `}>
       
       <button onClick={()=> setMenuOpen(false) } className="absolute top-6 right-6 text-white text-3xl cursor-pointer ">&times;</button>

       <div className="flex flex-col justify-center items-center space-y-8  h-[90%] w-full">
                  <a onClick={()=>setMenuOpen(false)} href="#home" className={`text-gray-400 text-2xl font-bold transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0":"opacity-0 translate-y-5"} cursor-pointer`}>Home</a>
                  <a onClick={()=>setMenuOpen(false)} href="#About" className={`text-gray-400 text-2xl font-bold transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0":"opacity-0 translate-y-5"} cursor-pointer`}>About</a>
                  <a onClick={()=>setMenuOpen(false)} href="#Projects" className={`text-gray-400 text-2xl font-bold transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0":"opacity-0 translate-y-5"} cursor-pointer`}>Projects</a>
                  <a onClick={()=>setMenuOpen(false)} href="#Contact" className={`text-gray-400 text-2xl font-bold transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0":"opacity-0 translate-y-5"} cursor-pointer`}>Contact</a>
       </div>
    </div>
  )
}

export default MobileMenu
