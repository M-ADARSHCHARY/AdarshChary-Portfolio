import React from 'react'
import { ExternalLink, Github } from 'lucide-react' 
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import projectsInfo from '../PROJECTS/projectsInfo'
import ProjectCard from '../PROJECTS/ProjectCard'

const Projects = () => {
  const [projectNum, setProjectNum] = React.useState(0)
  const [isAnimating, setIsAnimating] = React.useState(false)
  

  const handleChevronLeft = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setProjectNum(prevNum => (prevNum === 0 ? projectsInfo.length - 1 : prevNum - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleChevronRight = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setProjectNum(prevNum => (prevNum === projectsInfo.length - 1 ? 0 : prevNum + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <section id="Projects" className="min-h-[100svh] py-6 lg:min-h-screen flex items-center justify-center lg:py-16 px-4 bg-transparent relative overflow-hidden">
      {/* Background Decoration */}
      

      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Header Section */}
              <div className="text-center mb-16">
                    {/*   */}
                      <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold mb-4 dark:bg-gradient-to-r dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 dark:bg-clip-text dark:text-transparent">
                        Featured Projects
                      </h2>
                      
                      <p className="text-black dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        Explore my latest work showcasing modern web development with cutting-edge technologies
                      </p>
                      
                      <div className="w-24 h-1 dark:bg-gradient-to-r bg-black dark:from-cyan-400 dark:to-purple-600 mx-auto rounded-full mt-6"></div>
              </div>

        {/* Project Navigation Counter */}
        <div className="flex justify-center items-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-black/90 text-white dark:bg-slate-800/50 border dark:border-slate-600/30 rounded-full px-4 py-2">
                    <span className="text-slate-400 text-sm">Project</span>
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
                      {projectNum + 1}
                    </span>
                    <span className="text-slate-500">/</span>
                    <span className="text-slate-400">{projectsInfo.length}</span>
              </div>
          <div className="bg-black/90 text-white dark:bg-slate-800/30 border dark:border-slate-600/20 rounded-full px-3 py-1">
             <span className="text-xs text-slate-400 font-medium">{projectsInfo[projectNum].category}</span>
          </div>
        </div>

        {/* Main Project Display */}
<div className="relative">
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
    {/* Left Navigation (top on mobile) */}
    <button 
      onClick={handleChevronLeft}
      disabled={isAnimating}
      className="p-3 bg-slate-800 border border-slate-600 rounded-full hover:bg-cyan-500/20 transition-all duration-300 disabled:opacity-50 cursor-pointer"
    >
      <ChevronLeft 
        size={28} 
        className="text-slate-300 group-hover:text-cyan-400 transition-transform duration-300 group-hover:-translate-x-1" 
      />
    </button>

    {/* Project Content */}
    <div className="flex-1 max-w-4xl">
      <div 
        className={`transform transition-all duration-500 ease-in-out ${
          isAnimating ? 'opacity-0 scale-95 translate-y-4' : 'opacity-100 scale-100 translate-y-0'
        }`}
        key={projectNum}
      >
        <div className="relative group"> 
          {/* Project Card */}
          <div className="relative">
            <ProjectCard project={projectsInfo[projectNum]} />
          </div>
        </div>
      </div>
    </div>

    {/* Right Navigation (bottom on mobile) */}
    <button 
      onClick={handleChevronRight}
      disabled={isAnimating}
      className="p-3 bg-slate-800 border border-slate-600 rounded-full dark:hover:bg-cyan-500/20 transition-all duration-300 disabled:opacity-50 cursor-pointer"
    >
      <ChevronRight 
        size={28} 
        className="text-slate-300 group-hover:text-cyan-400 transition-transform duration-300 group-hover:translate-x-1" 
      />
    </button>
  </div>
</div>
      </div>
    </section>
  )
}

export default Projects



{/* <div className="flex justify-center gap-3 mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating && index !== projectNum) {
                    setIsAnimating(true)
                    setProjectNum(index)
                    setTimeout(() => setIsAnimating(false), 500)
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === projectNum
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 scale-125'
                    : 'bg-slate-600 hover:bg-slate-500 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div> */}




{/* Bottom CTA */}
        // <div className="text-center mt-16">
        //   <p className="text-slate-400 mb-6">Want to see more projects?</p>
        //   <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 flex items-center gap-2 mx-auto">
        //     <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
        //     View All Projects
        //     <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        //   </button>
        // </div>




