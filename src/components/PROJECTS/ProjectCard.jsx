import {Link , Eye,ExternalLink, Github, Code} from 'lucide-react'

const ProjectCard = ({project}) => (
  <div className="bg-black/90 text-white dark:bg-gradient-to-br dark:from-blue-500/10 dark:to-purple-500/10 border dark:border-blue-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
      {/* Content Section */}
      <div className="space-y-6 order-2 lg:order-1">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-r bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Code size={24} className="text-white" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{project?.title}</h3>
        </div>
        
        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
          {project?.description?.map((point, index) => (
               <span
      key={index}
      className="flex items-start gap-2 mb-2"
    >
      <span className="text-blue-400">•</span>
      <span>{point}</span>
    </span>
          ))}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project?.techStack?.map((tech, index) => (
            <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <a href={project?.liveDemo} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <button 
              disabled={project?.liveDemo === ""} 
              className={`w-full ${project?.liveDemo !== "" ? 'animate-pulse':""} sm:w-auto bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 px-4 py-2 text-white text-sm md:text-base rounded-lg transition-colors duration-300`}
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </button>
          </a>
          
          <a href={project?.githubRepo} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 border border-blue-500 text-blue-400 hover:bg-blue-500/10 text-sm md:text-base rounded-lg transition-colors duration-300">
              <Github size={18} />
              <span>Source Code</span>
            </button>
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="order-1 lg:order-2">
        <div className="relative rounded-xl overflow-hidden bg-slate-800/50 border border-blue-500/10">
          <div className="aspect-video w-full">
            <img
              src = {project?.imageUrl}
              alt={`${project?.title} preview`}
              className="w-full h-full object-cover transition-transform duration-500"
              loading="lazy"
            />
          </div>
          {/* Optional overlay for better visual hierarchy */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectCard;