import React from 'react'
import {Link} from 'lucide-react'
const WorkoutTracker = () => {
  return (
        <div className="relative p-4 rounded-xl border border-blue-900  hover:border-blue-500/30 ">
                    <h3 className="font-sans text-gray-300 font-bold mb-0.2 bg-blue-900 inline-block p-2 rounded-md mb-1">Workout-Tracker</h3>
          <div className="grid grid-cols-1 gap-2 items-center">
              <div className="border-2 p-2 rounded-md border-white/10 relative hover:scale-102 transition-transform duration-300 ease-in-out">
                        <p className="text-gray-300 text-sm">
                        WorkoutTracker is a full-stack fitness tracking web application that helps users manage and monitor their workout routines efficiently. The app allows users to:
                        Log workout entries including exercise name, sets, reps, and max weight
                        Edit or delete any workout record in real-time
                        Keep track of progress over time using data visualization
                        Offers a clean and responsive UI for a seamless experience across devices
                    </p> 
                    <h6 className="mt-3 text-gray-300 font-semi-bold ">Technologies Used:</h6>
                    <div className="grid md:grid-cols-3 gap-2 grid-cols-2 mt-2 mb-8">
                        {
                            ["HTML","TailwindCSS","React.js","Redux","Express.js","SQL","Node.js","REST API'S"].map((skill,key)=>(
                                <span key={key} className="text-blue-500 bg-blue-500/10 py-1 px-3 rounded-lg">
                                              {skill}
                                </span>
                            ))
                        }
                    </div>
                <div className="w-fit flex flex-col space-y-1 items-start">
                    <a className="text-[#fff] text-sm hover:text-blue-700 flex gap-2 justify-end items-center absolute bottom-2 right-4"href="https://github.com/M-ADARSHCHARY/WorkoutTracker"><Link className="w-4 h-4"/>Explore the project on GitHub</a>            
                </div> 
      </div>
          
          {/*Image section */}
          
     </div>
    </div> 
  )
}

export default WorkoutTracker
