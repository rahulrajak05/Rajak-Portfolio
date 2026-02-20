
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import { motion } from 'framer-motion';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const projectCardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-primary mx-auto rounded-full"
            ></motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              A showcase of my recent work in web development, featuring full-stack applications built with modern technologies
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.article 
                key={project.title} 
                variants={projectCardVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                  transition: { duration: 0.3 }
                }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 group"
              >
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-48 sm:h-56 object-contain bg-gray-100 dark:bg-gray-700" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/640x320.png?text=' + encodeURIComponent(project.title)
                    }} 
                  />
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {project.status === 'completed' ? '✅ Completed' : '🚧 In Progress'}
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <motion.h3 
                    whileHover={{ color: "rgb(59, 130, 246)" }}
                    className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors"
                  >
                    {project.title}
                  </motion.h3>
                  {project.associated && (
                    <p className="text-sm text-primary font-medium mb-3">
                      Associated with {project.associated}
                    </p>
                  )}
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tag} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 cursor-pointer"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.github && (
                      <motion.a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, borderColor: "rgb(59, 130, 246)" }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:text-primary transition-colors"
                      >
                        <span>🔗</span>
                        <span>View Code</span>
                      </motion.a>
                    )}
                    {project.link && (
                      <motion.a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(59, 130, 246, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors"
                      >
                        <span>🚀</span>
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              More projects available on my GitHub profile
            </p>
            <motion.a 
              href="https://github.com/rahulrajak05" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-6 py-3 text-white bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <span>📂</span>
              <span>View All Projects</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
