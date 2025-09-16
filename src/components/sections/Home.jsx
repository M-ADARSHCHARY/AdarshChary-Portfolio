import React, { useRef, useEffect, useState } from 'react'
import { Download, Github, Linkedin, Mail, ExternalLink, Code2, Sparkles } from 'lucide-react'
import myImage from '../../assets/myImage.jpg';
import resume from '../../assets/AdarshChary-Resume.pdf';

const Home = ({loadState}) => {
  const linkRef = useRef(null)
  const [name, setName] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)
  
  const handleResumeDownload = () => {
    if (linkRef.current) {
      linkRef.current.click()
    }
  }

  const myName = "Hi, I'm Adarsh Chary"
  
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < myName.length) {
        setName(myName.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
        setInterval(() => {
          setShowCursor(prev => !prev)
        }, 500)
      }
    }, 150) // Faster typing speed
    
    return () => clearInterval(interval)
  }, [loadState])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="home" 
      className="min-h-fit flex items-center justify-center py-12 px-4 bg-gradient-to-br bg-transparent relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden bg-transparent"> 
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-3xl md:text-4xl text-black dark:text-transparent dark:bg-gradient-to-r dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 dark:bg-clip-text">
                   {name}
                </span>

                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 text-black dark:text-cyan-400 ml-1 md:text-4xl `}>
                  |
                </span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl text-black dark:text-gray-300 font-medium">
                Full Stack Developer & DSA Practitioner
              </h2>
              
              <p className="text-black dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I build exceptional digital experiences with modern web technologies. 
                Passionate about creating efficient solutions and beautiful interfaces.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('Projects')}
                className=" justify-center relative overflow-hidden group px-6 py-3  bg-black text-white dark:bg-gradient-to-r dark:from-blue-600 dark:to-purple-600 dark:text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-500/30 flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles size={20} className="group-hover:animate-pulse" />
                  View Projects
                </span>
                <span className="absolute inset-0 dark:bg-gradient-to-r dark:from-blue-500 dark:to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              
              <button 
                onClick={handleResumeDownload}
                className="justify-center relative overflow-hidden group px-6 py-3 bg-transparent border-2 border-black text-black dark:border-blue-600 dark:text-white rounded-lg font-semibold transition-all duration-300 hover:bg-blue-600/10 flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download size={20} />
                  Get Resume
                </span>
              </button>
            </div>

            {/* Social links */}
            <div className="flex justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="https://github.com/M-ADARSHCHARY" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 hover:bg-black text-black hover:text-white dark:text-gray-400 dark:hover:text-white transition-colors duration-300 dark:hover:bg-gray-800 rounded-lg"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/M-Adarsh-Chary" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 hover:bg-black text-black hover:text-white dark:text-gray-400 dark:hover:text-white  dark:hover:bg-gray-800 rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <button 
                onClick={() => scrollToSection('Contact')}
                className="p-3 hover:bg-black text-black hover:text-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 rounded-lg"
                aria-label="Contact"
              >
                <Mail size={24} />
              </button>
            </div>
          </div>

          {/* Profile image */}
          <div className="flex justify-center order-1 lg:order-2">
              <div className="relative group">
                <div className={`border border-black relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden  transition-all duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
                  <img 
                    src={myImage} 
                    alt="Adarsh Chary" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* Hidden resume link */}
      <a 
        href={resume} 
        rel="noopener noreferrer" 
        target="_blank" 
        ref={linkRef} 
        className="hidden"
      >
        Resume Link
      </a>
    </section>
  )
}

export default Home




















// import React ,{useRef}from 'react'
// import { useEffect ,useState} from 'react'
// import resume from '../../assets/AdarshChary-resume.pdf';
// import myImage2 from '../../assets/myimage2.jpg';
// import { Link } from 'react-scroll';
// import { Download, SpaceIcon } from 'lucide-react';
// const Home = () => {
//  const linkRef = useRef(null);
//  let [name,setName] = useState("");
//  const handleResumeDownload = () =>{
//    if(linkRef.current) {
//      linkRef.current.click();
//    }
//  }

//  let myName = "Hi, I'm AdarshChary";
//  useEffect(()=>{
//    let index = 0;
//    const interval = setInterval(()=>{
//      if(index < myName.length){
//        let newName = myName.slice(0,index+1);
//        setName(newName);
//        index++;
//      }else{
//       clearInterval(interval);
//      }
//    },300)
//  },[])

//   return (
//     <section id="home" className="min-h-[70vh] flex flex-col md:flex-row sm:flex-row lg:flex-row justify-evenly relative font-sans flex-wrap mt-14 ">
        
//          <div className="mt-2 flex flex-col justify-center items-center">
//             <div className="w-fit"> 
//               <div className="h-45 w-45 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-full mx-auto my-1"><img src={myImage2} className="h-full w-full rounded-full border-3 object-cover" alt="myImg"/></div>
//               <div className="mt-4 flex justify-center space-x-4 mb-4">
//                     <Link to="Projects" smooth = {true} duration = {500} className="cursor-pointer rounded-lg bg-blue-600 mt-2 p-1.5 relative overflow-hidden hover:bg-blue-900 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
//                       View Projects
//                     </Link>
//                     <Link to = "Contact" smooth = {true} duration = {500} className="cursor-pointer rounded-lg  mt-2 p-2 border border-blue-600 text-blue-600 relative overflow-hidden  hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
//                       Contact Me
//                     </Link>
//                </div>
//             </div>
//          </div>
        
        
        
//         <div className="text-center z-10 px-4 p-1 flex flex-col items-center justify-center">
//              <div className="w-fit">
//                <h1 className="md:text-[3.6rem] text-[2.6rem] font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
//              {name} <span className={`${name.length != myName.length ? "animate-blink":"animate-pulse"} ml-1 md:text-[2.8rem] text-[2rem] text-[#fff]`}> | </span>
//             </h1>
//              <div className="grid  md:grid-cols-2  gap-2 ">
//                 <span className="font-bold text-[1.1rem] justify-self-end whitespace-nowrap text-[#8a7fbe]">
//                   DSA Practitioner <strong className="text-[#cbc1c1]">|</strong>
//                 </span> 
//                 <span className="font-bold text-[1.1rem] justify-self-start whitespace-nowrap text-[#8a7fbe]">
//                   Aspiring SDE
//                 </span>
//                 <span className="font-bold text-[1.1rem] col-span-2 text-center whitespace-nowrap text-[#8a7fbe]">
//                   MERN Stack Developer
//                 </span>
//               </div>
//              </div>
//             <>
//             <button className="bg-blue-600 h-fit w-fit p-1.5 rounded-md mt-4 cursor-pointer flex mx-auto gap-2 items-center text-sm" onClick={handleResumeDownload}>GET RESUME <Download size={20} strokeWidth={2} color="currentColor" /></button>
//             <a href={resume} rel='noopener noreferrer' target='_blank' ref={linkRef} className="display-none"></a>
//             </>
//       </div>
        
//     </section>
//   )
// }

// export default Home
