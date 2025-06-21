import React from 'react'
import {Link , Eye,ExternalLink} from 'lucide-react'
import hellowChatAppImg from '../../assets/hellow-chatapp.png'
const HellowChatApp = () => {
  return (
    <div className="relative p-2 rounded-xl border border-blue-900  hover:border-blue-500/30 ">
                    <h3 className="font-sans text-gray-350 font-bold mb-0.2 bg-blue-900 inline-block p-2 rounded-md mb-1">HelloW-ChatApp</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
               <div className="border-2 p-2 rounded-md border-white/10 relative hover:scale-102 transition-transform duration-300 ease-in-out">
                 <p className="text-gray-300 text-sm">
                      Built a realtime chat web application with robust security and improved
                      efficiency by using Zustand for global state management. Implemented Socket.io for
                      live user presence, message sync, and real-time chat features.Users can sign up, view
                      online users, delete messages, clear chat (reflected for both users), and filter active
                      users.
                </p> 
                   
                    <h6 className="mt-1 text-gray-300 font-semi-bold">Technologies Used:</h6>
                    <div className="grid md:grid-cols-5 gap-1 grid-cols-2 mt-2 mb-3">
                        {
                            ["React.js","TailwindCSS","Zustand","Node.js","Express.js","MongoDB","JWT","WebSocket","Cloudinary"].map((skill,key)=>(
                                <span key={key} className="text-blue-500 text-sm w-full bg-blue-500/10 py-1 px-2 rounded-lg">
                                              {skill}
                                </span>
                            ))
                        }
                    </div>
              
                 <div className="w-fit flex flex-col space-y-1 items-start">
                    <a className="text-[#fff] text-sm hover:text-blue-700 flex gap-2 justify-end items-center"href="https://github.com/M-ADARSHCHARY/HelloW-Chat-App"><Link className="w-4 h-4"/>Explore the project on GitHub</a>
                     <a className="flex gap-2 hover:text-blue-600 items-center text-sm"href="https://hello-w-chat-app.vercel.app/"><ExternalLink size={14} />Live Demo</a>
                  </div>    
              </div>

              <div className="rounded-md overflow-hidden border-2 border-white/10 p-1 hover:scale-102 transition-transform duration-300 ease-in-out">
                   <img src= {hellowChatAppImg} alt="netflix-clone" className="h-full w-full rounded-md object-cover"/> 
              </div>
              
             
                    
              
        </div>    
                    
     </div>
  )
}

export default HellowChatApp
