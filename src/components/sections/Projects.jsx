import React from 'react'
import {Link,Eye} from 'lucide-react'
const Projects = () => {
  return (
    <section id="Projects" className="min-h-screen flex items-center justify-center py-20 font-sans">

        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">Featured Projects:</h2>
            <div className="grid grid-cols-1 gap-3">
                 <div className="relative p-6 rounded-xl border border-blue-900  hover:translate-y-1 hover:border-blue-500/30 ">
                    <h3 className="font-sans text-gray-300 font-bold mb-0.2 bg-blue-900 inline-block p-2 rounded-md mb-1">Workout-Tracker</h3>
                    <p className="text-gray-300 ">
                        WorkoutTracker is a full-stack fitness tracking web application that helps users manage and monitor their workout routines efficiently. The app allows users to:
                        Log workout entries including exercise name, sets, reps, and max weight
                        Edit or delete any workout record in real-time
                        Keep track of progress over time using data visualization
                        Offers a clean and responsive UI for a seamless experience across devices
                    </p> 
                    <h4 className="mt-3 text-gray-300 font-semi-bold text-2xl">Technologies Used:</h4>
                    <div className="grid md:grid-cols-3 gap-2 grid-cols-2 mt-2 mb-4">
                        {
                            ["HTML","TailwindCSS","React.js","Redux","Express.Js","SQL","Node.Js","REST API'S"].map((skill,key)=>(
                                <span key={key} className="text-blue-500 bg-blue-500/10 py-1 px-3 rounded-lg">
                                              {skill}
                                </span>
                            ))
                        }
                    </div>
                    <a className=" text-blue-900 hover:text-blue-700 flex gap-2 justify-end items-center absolute bottom-2 right-4"href="https://github.com/M-ADARSHCHARY/WorkoutTracker"><Link className="w-4 h-4"/>Explore the project on GitHub</a>
                 </div>   

                 {/*Project-2*/}
                 <div className="relative p-6 rounded-xl border border-blue-900  hover:translate-y-1 hover:border-blue-500/30">
                    <h3 className="font-sans text-gray-350 font-bold mb-0.2 bg-blue-900 inline-block p-2 rounded-md mb-1">HelloW-ChatApp</h3>
                    <p className="text-gray-300">
                      Built a realtime chat web application with robust security and improved
                      efficiency by using Zustand for global state management. Implemented Socket.io for
                      live user presence, message sync, and real-time chat features.Users can sign up, view
                      online users, delete messages, clear chat (reflected for both users), and filter active
                      users.
                    </p> 
                   
                    <h4 className="mt-3 text-gray-300 font-semi-bold text-2xl">Technologies Used:</h4>
                    <div className="grid md:grid-cols-3 gap-2 grid-cols-2 mt-2 mb-7">
                        {
                            ["React.Js","TailwindCSS","Zustand","Node.Js","Express.Js","MongoDB-Atlas","JWT","WebSocket","Cloudinary"].map((skill,key)=>(
                                <span key={key} className="text-blue-500 bg-blue-500/10 py-1 px-2 rounded-lg">
                                              {skill}
                                </span>
                            ))
                        }
                    </div>
                    <div className="text-sm text-gray-400 hover:text-gray-300 items-center flex flex-col absolute right-2 bottom-2">
                     <a className="text-blue-900 hover:text-blue-700 flex gap-2 justify-end items-center"href="https://github.com/M-ADARSHCHARY/HelloW-Chat-App"><Link className="w-4 h-4"/>Explore the project on GitHub</a>
                     <a className="flex gap-2 items-center ml-15"href="https://hello-w-chat-app.vercel.app/"><Eye className="w-4 h-4 text-gray-400" />View Project</a>
                    </div>
                 </div>   
            </div>
        </div>
    </section>
  )
}

export default Projects
