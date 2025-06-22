import React from 'react'
import { Github,Linkedin } from 'lucide-react'
const Footer = () => {
  return (
    <footer className=" w-full bg-[#3c3658]">
       <div className="text-gray-400 w-full h-25 flex flex-col  justify-center items-center gap-2">
          <div className="w-68 flex justify-evenly">
             <a className= "flex gap-1"href="https://github.com/M-ADARSHCHARY"><Github className="w-6 h-6 text-gray-400 hover:text-black" /> Github</a>
             <a className="flex gap-1 items-center"href="https://linkedin.com/in/M-Adarsh-Chary"><Linkedin className="w-6 h-6 text-blue-700 hover:text-blue-900" /> LinkedIn</a>
          </div>
          <div className="font-sans">
             © {new Date().getFullYear()} M.AdarshChary. All rights reserved.
          </div>
       </div>
       


    </footer>
  )
}

export default Footer
