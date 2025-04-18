import React from 'react'

const Projects = () => {
  return (
    <section id="Projects" className="min-h-screen flex items-center justify-center py-20">

        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">Featured Projects:</h2>
            <div className="grid grid-cols-1  gap-6">
                 <div className="p-6 rounded-xl border border-blue-900  hover:translate-y-1 hover:border-blue-500/30 ">
                    <h3 className="font-serif font-bold mb-0.2 underline">WorkoutTracker</h3>
                    <p>
                    WorkoutTracker is a full-stack fitness tracking web application that helps users manage and monitor their workout routines efficiently. The app allows users to:
                        Log workout entries including exercise name, sets, reps, and max weight
                        Edit or delete any workout record in real-time
                        Keep track of progress over time using data visualization
                        Offers a clean and responsive UI for a seamless experience across devices
                    </p> 
                    <h4 className="mt-3 font-semi-bold text-2xl">Technologies Used:</h4>
                    <div className="grid md:grid-cols-3 gap-2 grid-cols-2 mt-2">
                        {
                            ["HTML","TailwindCSS","Express.JS","SQL","Node.JS","REST API'S"].map((skill,key)=>(
                                <span key={key} className="text-blue-500 bg-blue-500/10 py-1 px-3 rounded-lg">
                                              {skill}
                                </span>
                            ))
                        }
                    </div>
                 </div>   
            </div>
        </div>
    </section>
  )
}

export default Projects
