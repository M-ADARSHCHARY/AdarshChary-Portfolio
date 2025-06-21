import React from 'react'
import {Link,Eye} from 'lucide-react'
import WorkoutTracker from '../PROJECTS/WorkoutTracker'
import HellowChatApp from '../PROJECTS/HellowChatApp'
import NetflixClone from '../PROJECTS/NetflixClone'
const Projects = () => {
  return (
    <section id="Projects" className="min-h-screen flex items-center justify-center py-20 font-sans">

        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">Featured Projects:</h2>
            <div className="grid grid-cols-1 gap-3">
                 {/* Project-1 */}
                 <HellowChatApp/> 
                 {/* Project-2 */}
                 <WorkoutTracker/> 
                 {/* Project-3 */}  
                 <NetflixClone/>
            </div>
        </div>
    </section>
  )
}

export default Projects
