import React from 'react'
import { Github,Linkedin } from 'lucide-react'
const Footer = () => {
  return (
    <footer className=" w-full bg-[#09122C] dark:bg-black/90 border-t-2 dark:border-white/30">
       <div className="text-gray-400 w-full h-24 flex flex-col  justify-center items-center gap-2">
          <div className="w-64 flex justify-evenly">
             <a className= "flex gap-1 items-center justify-center" href="https://github.com/M-ADARSHCHARY"><Github className="w-6 h-6 text-gray-400 hover:text-blue-900" /> <span className="pt-1 ">Github</span></a>
             <a className="flex gap-1 items-center justify-center"href="https://linkedin.com/in/M-Adarsh-Chary"><Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-900" /> <span className="pt-1.5 ml-1">LinkedIn</span></a>
          </div>
          <div>
             © {new Date().getFullYear()} M.AdarshChary. All rights reserved.
          </div>
       </div>
       


    </footer>
  )
}

export default Footer
