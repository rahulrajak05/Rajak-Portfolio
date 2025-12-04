
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
type Project = {
  title: string
  description: string
  tags: string[]
  image?: string
  link?: string
  github?: string
  status: 'completed' | 'in-progress'
  associated?: string
}

const projects: Project[] = [
  { 
    title: 'NextStep-Your Pathway to Career Sucess Learning Platform', 
    associated: 'Pondicherry University', 
    description: 'NEXTSTEP is an AI-powered MERN platform that provides integrated tools for resume and cover-letter creation, job search, skill assessments, and interview preparation, offering a complete and streamlined career-readiness solution.',
    tags: ['React', 'Node.js', 'SQL', 'Express', 'JWT', 'REST API'], 
    image: p1,
    github: 'https://github.com/rahulrajak05/miniproject',
    status: 'completed'
  },
  { 
      title: 'Portfolio Website', 
      description: 'Modern, responsive portfolio website showcasing my projects and skills. Built with React, TypeScript, and Tailwind CSS with dark/light theme support and smooth animations.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Responsive Design'], 
      image: p2,
      link: 'rajak-portfolio-c5ep.vercel.app',
      github: 'https://github.com/rahulrajak05/Rajak-Portfolio',
      status: 'completed'
    },
  
  
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work in web development, featuring full-stack applications built with modern technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map(project => (
              <article key={project.title} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 sm:h-56 object-contain bg-gray-100 dark:bg-gray-700 transition-transform duration-300 group-hover:scale-105" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/640x320.png?text=' + encodeURIComponent(project.title)
                    }} 
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status === 'completed' ? '✅ Completed' : '🚧 In Progress'}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.associated && (
                    <p className="text-sm text-primary font-medium mb-3">
                      Associated with {project.associated}
                    </p>
                  )}
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary hover:text-primary transition-colors"
                      >
                        <span>🔗</span>
                        <span>View Code</span>
                      </a>
                    )}
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors"
                      >
                        <span></span>
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              More projects available on my GitHub profile
            </p>
            <a 
              href="https://github.com/rahulrajak05" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 text-white bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <span>📂</span>
              <span>View All Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
