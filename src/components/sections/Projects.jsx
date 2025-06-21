import React from 'react'
import {Link,Eye , ChevronLeft , ChevronRight} from 'lucide-react'
import WorkoutTracker from '../PROJECTS/WorkoutTracker'
import HellowChatApp from '../PROJECTS/HellowChatApp'
const Projects = () => {
  const [projectNum,setProjectNum] = React.useState(0);
  const projects = [ <HellowChatApp/>, <WorkoutTracker/>];
  const handleChevronLeft = () => {
    setProjectNum(prevNum => (prevNum === 0 ? 1 : prevNum - 1));
  };
  const handleChevronRight = () => {
    setProjectNum(prevNum => (prevNum === 1 ? 0 : prevNum + 1));
  };
  return (
    <section id="Projects" className="min-h-screen flex items-center justify-center py-20 font-sans">

        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">Featured Projects:</h2>
            <div className="flex items-center animate-fadeIn transition-all duration-500 ease-out" key={projectNum}>
                <button onClick= {handleChevronLeft} className="hover:text-blue-600" ><ChevronLeft size={28}/> </button>
                  <div className="grid grid-cols-1 gap-3">
                    {projects[projectNum]}
                  </div>
                <button onClick= {handleChevronRight} className="hover:text-blue-600"><ChevronRight size={28} /></button>
            </div>
        </div>
    </section>
  )
}

export default Projects
