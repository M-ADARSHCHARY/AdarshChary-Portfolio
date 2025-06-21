import React ,{useRef}from 'react'
import { useEffect ,useState} from 'react'
import resume from '../../assets/my-resume.pdf';
import myImage from '../../assets/myimage.jpg';
import { Link } from 'react-scroll';
import { Download } from 'lucide-react';
const Home = () => {
 const linkRef = useRef(null);
 let [name,setName] = useState("");
 const handleResumeDownload = () =>{
   if(linkRef.current) {
     linkRef.current.click();
   }
 }

 useEffect(()=>{
   let myName = "Hi , I'm AdarshChary";
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
    <section id="home" className="min-h-[80vh] flex items-center justify-evenly relative font-sans flex-wrap mt-14">
        <div className="text-center z-10 px-4 p-4 ">
             <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right p-2">
             {name}
            </h1>
            <p className="text-gray-400 text-lg max-w-lg mx-auto">
            Hi there! I'm passionate about building full-stack web apps that are fast, reliable, and scalable.
I enjoy solving challenges through code - whether it's designing sleek interfaces or engineering smart backend solutions.
This space is a reflection of my journey as a developer who believes in continuous learning and clean architecture.
            </p> 
            <>
            <button className="bg-blue-600 h-fit w-fit p-2 rounded-md mt-4 cursor-pointer flex mx-auto gap-2 items-center text-sm" onClick={handleResumeDownload}>GET RESUME <Download size={20} strokeWidth={2} color="currentColor" /></button>
            <a href={resume} ref={linkRef} className="display-none"download="my-resume.pdf"></a>
            </>

         </div>
         <div className="mt-2">
          <div className="h-[264px] w-[264px] rounded-full m-auto"><img src={myImage} className="h-full w-full rounded-full border-3 object-cover" alt="myImg"/></div>
           <div className="mt-4 flex justify-center space-x-4 mb-4">
                   <Link to="Projects" smooth = {true} duration = {500} className="cursor-pointer rounded-lg bg-blue-600 mt-2 p-2 relative overflow-hidden hover:bg-blue-900 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                     View Projects
                  </Link>
                   <Link to = "Contact" smooth = {true} duration = {500} className="cursor-pointer rounded-lg  mt-2 p-2 border border-blue-600 text-blue-600 relative overflow-hidden  hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                     Contact Me
                  </Link>
            </div>
         </div>
    </section>
  )
}

export default Home
