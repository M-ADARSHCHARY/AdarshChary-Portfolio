const projectsInfo =  [
   {
       title:"helloW chatApp",
      //  description:"Real-time chat application with modern UI/UX design. Features include instant messaging, user authentication, online status indicators, and responsive design for seamless communication.",
      description:
      [  "Real-time chat application built with React and Socket.io.",
         "Secure authentication with JWT and OAuth-based login.",
         "Infinite scrolling user list with server-side pagination."
      ],  
       techStack: ["React", "Node.js", "Socket.io", "JWT", "MongoDB", "Express.js"],    
       liveDemo:"https://hello-w-chat-app.vercel.app/",
       githubRepo:"https://github.com/M-ADARSHCHARY/HelloW-Chat-App", 
       category: "MERN Stack Application",
       imageUrl:"/images/hellow-chatapp.png"
   },
   {
        title:"Workout Tracker",
        description:
        [
          "End-to-end workout tracking with inline editing and seamless CRUD operations.",
          "User-specific data isolation with secure access control and session handling.",
          "Workout trend visualization to help users analyze training progress over time."
       ],
        techStack:["React","Tailwind CSS", "Node.js", "Express.js", "MySql", "Chart.js", "JWT"],
        liveDemo:"",
        githubRepo:"https://github.com/M-ADARSHCHARY/WorkoutTracker",
        category: "Full Stack Application",
        imageUrl:"/images/workoutTracker.png"
   },
   {
      title: "Personal Portfolio Website",
      description:
      [
         "A responsive portfolio website built to showcase my projects, skills, and experience.",
         "Includes interactive UI sections, project highlights, and smooth navigation using React and Tailwind CSS."
      ],
      techStack: ["React", "Tailwind CSS", "EmailJS"],
      liveDemo: "https://adarsh-chary-portfolio.vercel.app",
      githubRepo: "https://github.com/M-ADARSHCHARY/AdarshChary-Portfolio",
      category: "Personal Project",
      imageUrl: "/images/portfolio.png"
   }

]

export default projectsInfo;