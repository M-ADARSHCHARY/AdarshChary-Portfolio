import React from 'react'
import { useEffect ,useState} from 'react'

const Home = () => {
 
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-4 p-4">
             <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right p-2">
             Hi , I'm AdarshChary
            </h1>
            <p className="text-gray-400 text-lg max-w-lg mx-auto">
            Hi there! I'm passionate about building full-stack web apps that are fast, reliable, and scalable.
I enjoy solving challenges through code — whether it's designing sleek interfaces or engineering smart backend solutions.
This space is a reflection of my journey as a developer who believes in continuous learning and clean architecture.
            </p>
            <div className="flex justify-center space-x-4">
                   <a href="#Projects" className="rounded-lg bg-blue-600 mt-2 p-2 relative overflow-hidden hover:bg-blue-900 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                     View Projects
                  </a>
                   <a href="#Contact" className="rounded-lg  mt-2 p-2 border border-blue-600 text-blue-600 relative overflow-hidden  hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                     Contact Me
                  </a>
            </div>
         </div>
    </section>
  )
}

export default Home
