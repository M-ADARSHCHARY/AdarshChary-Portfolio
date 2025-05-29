import React from 'react'

const About = () => {
const frontEndSkills = ["HTML","TailwindCSS","JavaScript","React.Js","Redux","Zustand"]
const backEndSkills = ["Node.Js","Express.Js","REST API'S","JWT","MongoDB","SQL"]

  return (
    <section id="About" className="min-h-[75vh] flex items-center justify-center py-20 font-sans">
        <div className="max-w-3xl mx-auto px-4  p-4 rounded-lg shadow-lg ">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
                About me
            </h2>
            <div className="rounded-xl border-white/10 hover:translate-y-1 transition-all ">
               <p className="text-gray-400 mb-1 text-justify">
               I’m a passionate web developer with a strong interest in building dynamic, responsive,
               and user-centric web applications. I have hands-on experience with technologies like React, Node.js, and MongoDB, and 
               I enjoy crafting solutions that are both functional and intuitive.
                My focus is on developing clean, efficient code and delivering smooth user experiences.
                Currently, I’m expanding my problem-solving skills by learning Data Structures in Java.
              </p> 
               <hr className="bg-[#464343]"/>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mt-2">
                    <div className=" rounded-xl hover:translate-y-1 space-y-2">
                        <h3 className="text-center text-gray-400">FrontEnd</h3>
                         <div className="flex flex-wrap gap-2  justify-center">
                             {frontEndSkills.map((skill,key)=> (                           
                            <span key={key} className="text-blue-500 bg-blue-500/10 py-1 px-3 rounded-lg">{skill}</span>
                            ))}
                         </div>
                    </div>
                    <div className="rounded-xl hover:translate-y-1 space-y-2">
                        <h3 className="text-center text-gray-400">BackEnd</h3>
                         <div className="flex flex-wrap gap-2 justify-center">
                             {backEndSkills.map((skill,key)=> (                           
                            <span key={key} className="text-blue-500 bg-blue-500/10 py-1 px-3 rounded-lg">{skill}</span>
                            ))}
                         </div>
                    </div>
              </div>
            </div>

            <div className="mt-6 hover:translate-y-1 p-6 border-white/10 ">
                <h3 className="text-xl font-bold mb-4 text-gray-400">Education</h3>
                    <ul className="list-disc text-gray-400 space-y-2">
                        <li>
                            <strong>B.Tech in Computer Science & Engineering</strong> - CMR TECHNICAL CAMPUS (2023 - 2027)
                        </li>
                        <li>
                            Relevant Coursework : Data Structures , web development ,Operating Systems, DBMS , Oops Through Java
                        </li>
                    </ul>        
            </div>
        </div>
    </section>
  )
}

export default About
