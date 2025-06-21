import React from 'react'
import {Link , ExternalLink} from 'lucide-react'
import NetflixCloneImg from '../../assets/netflix-clone.png'
const NetflixClone = () => {
  return (
        <div className="relative p-6 rounded-xl border border-blue-900  hover:translate-y-1 hover:border-blue-500/30 ">
             <h3 className="font-sans text-gray-300 font-bold mb-0.2 bg-blue-900 inline-block p-2 rounded-md mb-1">Netflix UI</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
                <div className="border-2 p-2 rounded-md border-white/10 relative hover:scale-102 transition-transform duration-300 ease-in-out">
                          <p className="text-gray-300 text-sm">
                         Netflix Clone Created on March 1, 2024, This project is a basic Netflix UI clone built using HTML and CSS for learning purposes. It replicates the visual design of Netflix's homepage, featuring responsive layouts and styling. This static project was created to improve my front-end skills and understanding of HTML and CSS.
                       </p> 
                    <h6 className="mt-3 text-gray-300 font-semi-bold">Technologies Used:</h6>
                    <div className="grid md:grid-cols-3 gap-2 grid-cols-2 mt-2 mb-10">
                        {
                            ["HTML","CSS"].map((skill,key)=>(
                                <span key={key} className="text-blue-500 bg-blue-500/10 py-1 px-3 rounded-lg">
                                              {skill}
                                </span>
                            ))
                        }
                    </div> 
                    <div className="w-fit flex flex-col space-y-1 items-start">
                        <a className="text-[#fff] text-sm hover:text-blue-700 flex gap-2 justify-end items-center"href="https://github.com/M-ADARSHCHARY/Netflix-Clone-HTML-CSS"><Link className="w-4 h-4"/>Explore the project on GitHub</a>
                        <a className="flex gap-2 hover:text-blue-600 items-center text-sm"href="https://m-adarshchary.github.io/Netflix-Clone-HTML-CSS/"><ExternalLink size={14} />Live Demo</a>
                    </div> 
                 </div>

                 <div className="rounded-md overflow-hidden border-2 border-white/10 p-2 hover:scale-102 transition-transform duration-300 ease-in-out">
                        <img src= {NetflixCloneImg} alt="netflix-clone" className="h-full w-full rounded-md object-cover"/>
                </div>
        </div>
    </div> 
  )
}

export default NetflixClone
