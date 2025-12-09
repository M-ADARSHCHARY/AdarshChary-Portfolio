import React from 'react'
import { FaBookOpen, FaGraduationCap, FaLaptopCode } from 'react-icons/fa6'

const About = () => {
  const frontEndSkills = ["HTML5", "TailwindCSS", "JavaScript", "React.js"]
  const backEndSkills = ["Node.js", "Express.js","JsonWebTokens", "MongoDB", "SQL"]
  const toolsAndConcepts = ["Redux", "Zustand", "GitHub", "Agile", "MVC", "REST API'S", "Socket.io"]

  return (
    <section id="About" className="min-h-[100svh] py-6 lg:min-h-screen flex items-center justify-center lg:py-12 px-4 bg-gradient-to-br bg-transparent">
      <div className="max-w-6xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold mb-4  text-black dark:bg-gradient-to-r dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 dark:bg-clip-text dark:text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-black/70 dark:bg-gradient-to-r dark:from-cyan-400 dark:to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Introduction */}
          <div className="space-y-8">
            <div className="bg-black/90 text-white/30 dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-700/30 backdrop-blur-sm border border-slate-600/20 rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl"><FaLaptopCode size={28} /></span>
                </div>
                <h3 className="text-2xl font-bold text-white">Developer Profile</h3>
              </div>
              <p className="text-white dark:text-slate-300 leading-relaxed text-sm">
                I'm a passionate full-stack developer who loves creating dynamic, responsive, and user-centric web applications. 
                With expertise in modern technologies like React, Node.js, and MongoDB, I focus on building solutions that are 
                both functional and beautifully crafted.
              </p>
              <div className="text-sm mt-6 p-4 bg-transparent dark:bg-gradient-to-r dark:from-cyan-500/10 dark:to-blue-500/10 rounded-xl border dark:border-cyan-500/20">
                <p className="text-white/70 dark:text-cyan-300 font-medium">
                  🎯 Currently expanding my problem-solving skills by mastering Data Structures and Algorithms in Java
                </p>
              </div>
            </div>

            {/* Education & Coursework */}
            <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-black/90 text-white dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-700/30 backdrop-blur-sm border dark:border-slate-600/20 rounded-2xl p-6 shadow-2xl dark:hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white font-bold"><FaGraduationCap size={28} /></span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Education</h3>
                    </div>
                    <div className="space-y-2">
                    <div className="text-slate-200 font-semibold">B.Tech in Computer Science</div>
                    <div className="text-slate-400 text-sm">CMR Technical Campus, Hyderabad</div>
                    <div className="text-slate-400 text-sm">2023 - 2027</div>
                    <div className="inline-block bg-white/90 text-black/90 dark:bg-gradient-to-r dark:bg-blue-500 dark:text-white  px-3 py-1 rounded-full text-xs font-semibold mt-2">
                        CGPA: 9.30
                    </div>
                    </div>
                </div>

                <div className="bg-black/90 text-white dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-700/30 backdrop-blur-sm border border-slate-600/20 rounded-2xl p-6 shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white font-bold"><FaBookOpen size={28} /></span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Coursework</h3>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                    Data Structures & Algorithms, OOP with Java, Database Management, Operating Systems, 
                    Computer Architecture & Organization
                    </p>
                </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
  <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {/* Frontend Skills */}
        <div className="flex flex-wrap items-center md:justify-between gap-4 justify-center bg-black/90 dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-700/30 rounded-2xl p-6 shadow-xl border dark:border-white/10 hover:shadow-cyan-500/10 transition">
              <div className="font-mono text-sm bg-zinc-900 w-full text-white p-4 rounded-md">
                      <span className="text-red-500">const</span> <span className="text-white">frontEndSkills</span> <span className="text-white">= [</span><br />
                      {frontEndSkills.map((skill, index)=> <>&nbsp;&nbsp;<span  className="text-green-400">"{skill}"</span><span className="text-white">,</span><br /></>)}
                      <span className="text-white">];</span>
                </div>

      {/* Backend Skills */}
               <div className="font-mono text-sm bg-zinc-900 w-full text-white p-4 rounded-md">
                      <span className="text-red-500">const</span> <span className="text-white">backEndSkills</span> <span className="text-white">= [</span><br />
                      {backEndSkills.map((skill,index)=>(<>&nbsp;&nbsp;<span className="text-green-400">"{skill}"</span><span className="text-white">,</span><br /></>))}
                      <span className="text-white">];</span>
                </div>
        </div>

          {/* Tools and Concepts */}
          <div className="flex items-center justify-center sm:justify-start md:justify-start bg-black/90 dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-700/30 rounded-2xl p-6 shadow-xl border dark:border-white/10 hover:shadow-cyan-500/10 transition">
                 <div className="font-mono text-sm bg-zinc-900 w-full text-white p-4 rounded-md">
                     <span className="text-red-500">const</span> <span className="text-white">toolsAndConcepts</span> <span className="text-white">= [</span><br />
                          {toolsAndConcepts.map((tool,index)=>(<>&nbsp;&nbsp;<span className="text-green-400">"{tool}"</span><span className="text-white">,</span><br /></>))}
                     <span className="text-white">];</span>
                  </div>    
          </div>
  </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
