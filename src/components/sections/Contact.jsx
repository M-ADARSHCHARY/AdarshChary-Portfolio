import React from 'react'
import emailjs from 'emailjs-com'
import {useState} from 'react'
import toast from 'react-hot-toast'
import { Loader2 } from 'lucide-react'
const Contact = () => {
   const [formData,setFormData] = useState({name:"",email:"",message:""})
   const [loadingState,setLoadingState] = useState(false);
  
  const emailSubmit = async (e)=>{
       try{
           e.preventDefault();
           setLoadingState(true);
           let result= await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID,e.target,import.meta.env.VITE_API_KEY)
           toast.success("Email sent successfully!")
           setLoadingState(false);
           setFormData({name:"",email:"",message:""}) // clear state

        }catch(err){
            console.log(err)
            toast.error("Failed to send email. Please try again later.")
        }
  }  
  return (
    <section id="Contact"className="min-h-[70vh] flex items-center justify-center py-20 font-sans">
        <div className="px-4 w-150">
              <h2  className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
                Get In Touch
             </h2>
              <form action="" className="space-y-3"onSubmit={emailSubmit}>
                     <div className="relative">
                        <input type="text" id="name" name="name" value={formData.name} required className="w-full bg-white/5 border border-blue-600 hover:border-blue-900 px-4 py-3 rounded-lg"
                        placeholder="Your Name.."
                        onChange={(e)=>setFormData({...formData,name:e.target.value})}
                        />
                     </div>
                     <div className="relative">
                        <input type="email" id="email" name="email" value = {formData.email}required className="w-full bg-white/5 border border-blue-600 hover:border-blue-900 px-4 py-3 rounded-lg"
                        placeholder="example@gmail.com"
                        onChange={(e)=>setFormData({...formData,email:e.target.value})}
                        />
                     </div>
                     <div className="relative">
                        <textarea  id="message" name="message" rows={5} value={formData.message}required className="w-full bg-white/5 border border-blue-600 hover:border-blue-900 px-4 py-3 rounded-lg"
                        placeholder="Enter your Message here..."
                        onChange={(e)=>setFormData({...formData,message:e.target.value})}
                        />
                     </div>
                     <button className="text-gray-300  w-full rounded-lg bg-blue-900 mt-2 p-2 relative overflow-hidden hover:bg-blue-900 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer flex justify-center items-center">{loadingState ? <Loader2 className="animate-spin w-4 h-4" /> :"Submit"}</button>
              </form>
        </div>
    </section>
  )
}

export default Contact
