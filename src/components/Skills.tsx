import { motion } from 'framer-motion';

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["React", "JavaScript",  "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend", 
    skills: ["Node.js", "Express.js", "Python" ]
  },

  {
    category: "Database",
    skills: ["MongoDB", "Database Design", "SQL"]
  },
  {
    category: "Tools & Others",
    skills: ["Git", "GitHub"]
  }
  ,
  {
    category: "Data Analysis",
    skills: ["Excel",  "Pandas", "NumPy", "Matplotlib", "Seaborn","Power BI", "Tableau"]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-24">
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
              Technical <span className="text-primary">Skills</span>
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
              Proficient in modern web technologies and frameworks with hands-on experience in full-stack development
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div 
                key={category.category} 
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  y: -5
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-100 dark:border-gray-700 group cursor-pointer"
              >
                <div className="text-center mb-6">
                  <motion.h3 
                    whileHover={{ scale: 1.1, color: "rgb(59, 130, 246)" }}
                    className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300"
                  >
                    {category.category}
                  </motion.h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-2"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.5, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-2 h-2 bg-primary rounded-full"
                      ></motion.div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Always learning new technologies and staying updated with industry trends
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
