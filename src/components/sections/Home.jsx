import React ,{useRef}from 'react'
import { useEffect ,useState} from 'react'
import resume from '../../assets/AdarshChary-resume.pdf';
import myImage from '../../assets/myimage.jpg';
import { Link } from 'react-scroll';
import { Download, SpaceIcon } from 'lucide-react';
const Home = () => {
 const linkRef = useRef(null);
 let [name,setName] = useState("");
 const handleResumeDownload = () =>{
   if(linkRef.current) {
     linkRef.current.click();
   }
 }

 let myName = "Hi, I'm AdarshChary";
 useEffect(()=>{
   let index = 0;
   const interval = setInterval(()=>{
     if(index < myName.length){
       let newName = myName.slice(0,index+1);
       setName(newName);
       index++;
     }else{
      clearInterval(interval);
     }
   },300)
 },[])

  return (
    <section id="home" className="min-h-[70vh] flex flex-col md:flex-row sm:flex-row lg:flex-row justify-evenly relative font-sans flex-wrap mt-14 ">
        <div className="text-center z-10 px-4 p-1 flex flex-col items-center justify-center">
             <div className="w-fit">
               <h1 className="md:text-[3.6rem] text-[2.6rem] font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
             {name} <span className={`${name.length != myName.length ? "animate-blink":"animate-pulse"} ml-1 md:text-[2.8rem] text-[2rem] text-[#fff]`}> | </span>
            </h1>
             <div className="grid  md:grid-cols-2  gap-2 ">
                <span className="font-bold text-[1.1rem] justify-self-end whitespace-nowrap text-[#8a7fbe]">
                  DSA Practitioner <strong className="text-[#cbc1c1]">|</strong>
                </span> 
                <span className="font-bold text-[1.1rem] justify-self-start whitespace-nowrap text-[#8a7fbe]">
                  Aspiring SDE
                </span>
                <span className="font-bold text-[1.1rem] col-span-2 text-center whitespace-nowrap text-[#8a7fbe]">
                  MERN Stack Developer
                </span>
              </div>
             </div>
            <>
            <button className="bg-blue-600 h-fit w-fit p-1.5 rounded-md mt-4 cursor-pointer flex mx-auto gap-2 items-center text-sm" onClick={handleResumeDownload}>GET RESUME <Download size={20} strokeWidth={2} color="currentColor" /></button>
            <a href={resume} ref={linkRef} className="display-none"download="AdarshChary-resume.pdf"></a>
            </>
      </div>
         <div className="mt-4 flex flex-col justify-center items-center">
            <div className="w-fit"> 
              <div className="h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-full m-auto"><img src={myImage} className="h-full w-full rounded-full border-3 object-cover" alt="myImg"/></div>
              <div className="mt-4 flex justify-center space-x-4 mb-4">
                    <Link to="Projects" smooth = {true} duration = {500} className="cursor-pointer rounded-lg bg-blue-600 mt-2 p-1.5 relative overflow-hidden hover:bg-blue-900 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                      View Projects
                    </Link>
                    <Link to = "Contact" smooth = {true} duration = {500} className="cursor-pointer rounded-lg  mt-2 p-2 border border-blue-600 text-blue-600 relative overflow-hidden  hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                      Contact Me
                    </Link>
               </div>
            </div>
         </div>
    </section>
  )
}

export default Home
