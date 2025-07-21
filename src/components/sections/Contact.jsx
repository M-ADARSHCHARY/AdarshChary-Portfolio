import React from 'react'
import emailjs from 'emailjs-com'
import {useState} from 'react'
import toast from 'react-hot-toast'
import { Loader2, Mail, User, MessageSquare, Send, MapPin, Phone, Github, Linkedin } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

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
            setLoadingState(false);
        }
  }  
  
  return (
    <section 
      id="Contact" 
      className="min-h-screen flex items-center justify-center py-16 px-4 font-sans relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
     
      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-black/90 dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-600 dark:bg-clip-text dark:text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Let's discuss your next project or just say hello!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="order-2 lg:order-1 ">
            <div 
              className="backdrop-blur-sm rounded-2xl p-8 border-2  border-black dark:border-blue-400 shadow-2xl"
            >
              <form onSubmit={emailSubmit} className="space-y-6 ">
                {/* Name Input */}
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                    <User className="w-5 h-5" style={{ color: 'var(--accent-color)' }} />
                  </div>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    required 
                    className="bg-transparent w-full pl-12 pr-4 py-4 rounded-xl border-2 border-black dark:border-blue-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                    placeholder="Your Name"
                    onChange={(e)=>setFormData({...formData,name:e.target.value})}
                  />
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                    <Mail className="w-5 h-5"/>
                  </div>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    required 
                    className="bg-transparent w-full pl-12 pr-4 py-4 border-2 border-black dark:border-blue-400 rounded-xl  transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                    placeholder="your.email@example.com"
                    onChange={(e)=>setFormData({...formData,email:e.target.value})}
                  />
                </div>

                {/* Message Input */}
                <div className="relative group">
                  <div className="absolute left-4 top-6 z-10">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <textarea  
                    id="message" 
                    name="message" 
                    rows={6} 
                    value={formData.message}
                    required 
                    className="bg-transparent w-full pl-12 pr-4 py-4 rounded-xl border-2 border-black dark:border-blue-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 resize-none"
                    
                    placeholder="Tell me about your project or just say hello..."
                    onChange={(e)=>setFormData({...formData,message:e.target.value})}
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={loadingState}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loadingState ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Let's Connect
              </h3>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                I'm always excited to discuss new opportunities, innovative projects, or just have a friendly chat about technology and development.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <div 
                className="p-6 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ 
                  backgroundColor: 'var(--bg-secondary)', 
                  borderColor: 'var(--accent-color)',
                  borderOpacity: 0.2
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                  <a href="mailto:adarshchary.05@gmail.com">adarshchary.05@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* GitHub Card */}
              <a 
                href="https://leetcode.com/u/M_ADARSH/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-6 rounded-xl border border-black dark:border-white/70 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl">
                     <img src="https://leetcode.com/favicon.ico" alt="LeetCode" className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>LeetCode</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>Check out my leetcode profile</p>
                  </div>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a 
                href="https://linkedin.com/in/M-Adarsh-Chary" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-6 rounded-xl border transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: 'var(--bg-secondary)', 
                  borderColor: 'var(--accent-color)',
                  borderOpacity: 0.2
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>LinkedIn</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>Let's connect professionally</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
