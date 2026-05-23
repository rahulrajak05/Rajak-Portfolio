import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
};

type ExperienceItem = {
  role: string
  company: string
  period: string
  location: string
  details: string[]
  technologies: string[]
  type: 'internship' | 'freelance' | 'full-time'
}

const experience: ExperienceItem[] = [
  {
    role: 'Software Technology Intern',
    company: 'National Institute of Electronics and Information Technology, Ranchi',
    period: 'March 2026 — Present',
    location: 'Ranchi, India (On-site)',
    type: 'internship',
    details: [
  'Worked on real-time technical and software development projects',
  'Participated in Work Based Learning (WBL) training programs and practical sessions',
  'Developed problem-solving and analytical skills through hands-on project implementation',
  'Collaborated with mentors and technical teams on emerging technology-based solutions',
  'Contributed to web application and digital solution development activities',
  'Gained practical exposure to industry-standard tools, workflows, and technologies'
],

technologies: [
  'Python','JavaScript','React.js','Node.js','MongoDB','SQL','Data Analytics','Web Development','Machine Learning','AI'
]
  },
   {
    role: 'Data Engineer Intern',
    company: 'Puducherry Tourism Development Corporation Ltd.',
    period: 'Feb 2026 - March 2026',
    location: 'Puducherry, India (On-site)',
    type: 'internship',
    details: [
      'Working on data engineering projects for tourism development initiatives',
      'Managing and processing large datasets to support decision-making processes',
      'Implementing ETL pipelines for data integration and transformation',
      'Collaborating with cross-functional teams to deliver data-driven solutions',
      'Contributing to the digital transformation of tourism services'
    ],
    technologies: ['Python', 'SQL', 'Data Analytics', 'Database Management', 'Data Visualization']
  },
  {
    role: 'Software Web Development Project',
    company: 'Contractum Integral Solution Private Limited',
    period: 'Jan 2026 — Present',
    location: 'Kota, Rajasthan, India (Hybrid)',
    type: 'Part-time',
    details: [
      'Developing comprehensive web applications for client projects',
      'Building responsive and user-friendly interfaces using modern web technologies',
      'Collaborating with team members in a hybrid work environment',
      'Implementing best practices in software development and code quality',
      'Working on end-to-end project delivery from requirements to deployment'
    ],
    technologies: ['JavaScript', 'React.js', 'Node.js', 'HTML5', 'Tailwind CSS', 'Git', 'MongoDB']
  },
  {
    role: 'Data Engineer Intern',
    company: 'MSME TECHNOLOGY CENTRE, PUDUCHERRY',
    period: 'Sep 2025 — Dec 2025',
    location: 'Puducherry, India (On-site)',
    type: 'internship',
    details: [
      'Worked on data engineering projects supporting MSME technology initiatives',
      'Developed data pipelines for collecting, processing, and analyzing industrial data',
      'Assisted in database design and optimization for improved query performance',
      'Created data reports and visualizations to support business intelligence',
      'Gained hands-on experience with data engineering tools and technologies',
      'Successfully completed 4-month internship contributing to multiple data projects'
    ],
    technologies: ['Python', 'SQL', 'Database Management', 'Data Analysis', 'Excel']
  },
  { 
    role: 'MERN-Stack Developer', 
    company: 'Edunet Foundation', 
    period: 'Mar 2025 — Apr 2025', 
    location: 'India (Remote)',
    type: 'internship',
    details: [
      'Developed full-stack web applications using MERN stack technology (MongoDB, Express.js, React.js, Node.js)',
      'Built responsive user interfaces with React.js, implementing modern component architecture',
      'Created RESTful APIs using Node.js and Express.js for seamless frontend-backend communication',
      'Managed database operations with MongoDB, designing efficient schemas and data relationships',
      'Gained practical experience in full-stack development workflow and best practices',
      'Successfully completed internship with certificate of achievement in MERN stack development'
    ],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'HTML5', 'CSS3', 'Git']
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Professional <span className="text-primary">Experience</span>
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
              My journey in web development through internships and freelance projects
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            {experience.map((exp, index) => (
              <motion.div 
                key={exp.company + exp.role} 
                variants={cardVariants}
                className="relative"
              >
                {/* Timeline line */}
                {index !== experience.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary to-transparent"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">
                      {exp.type === 'internship' ? '🎓' : exp.type === 'freelance' ? '💼' : '🏢'}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <motion.div 
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                    className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                        <p className="text-lg font-semibold text-primary">{exp.company}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{exp.location}</p>
                      </div>
                      <div className="mt-2 sm:mt-0 flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'internship' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                          exp.type === 'freelance' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                          'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                        }`}>
                          {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                        </span>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{exp.period}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {exp.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <span className="text-primary mt-1.5 text-xs">•</span>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{detail}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map(tech => (
                          <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Currently seeking new opportunities to grow and contribute to innovative projects
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
