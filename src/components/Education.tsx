import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
};

export default function Education() {
  return (
    <section id="education" className="py-16 lg:py-24 bg-white dark:bg-gray-900">
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
              My <span className="text-primary">Education</span>
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
              Academic journey and qualifications that shaped my foundation in computer science and technology
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            {/* PG Course - MCA */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">🎓</span>
                  </div>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                  className="flex-1"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border-2 border-primary/20 dark:border-primary/30 transition-all">  
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold">CURRENT</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          Master of Computer Applications (MCA)
                        </h3>
                        <p className="text-primary font-semibold">Advanced Computer Science & Applications</p>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          Pondicherry University, Puducherry
                        </p>
                      </div>
                      <div className="mt-3 lg:mt-0 lg:text-right">
                        <span className="inline-block bg-gradient-to-r from-primary to-primary-dark text-white px-3 py-1 rounded-full text-sm font-medium">
                          2024 - 2026
                        </span>
                        <div className="mt-2">
                          <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                            CGPA: 6.61/10
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-700 dark:text-gray-300">
                      <p className="mb-3">
                        <span className="font-semibold">Specialization:</span> Mern Stack Development, Advanced Database Systems, 
                        Software Project Management, Machine Learning,AI, Automata
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded text-xs">DSA</span>
                        <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded text-xs">Mern Stack</span>
                        <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded text-xs">ML/AI</span>
                        <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded text-xs">Database</span>
                        <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded text-xs">Python</span>
                      </div>
                      <p className="text-sm italic">
                        Currently pursuing advanced studies in computer applications with focus on modern web technologies and software engineering practices.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* BCA */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🎓</span>
                  </div>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                  className="flex-1"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Bachelor of Computer Applications (BCA)
                        </h3>
                        <p className="text-primary font-semibold">Computer Science & Applications</p>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          Magadh University, Bodhgaya
                        </p>
                      </div>
                      <div className="mt-3 lg:mt-0 lg:text-right">
                        <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                          2018 - 2021
                        </span>
                        <div className="mt-2">
                          <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                            Percentage: 76%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-700 dark:text-gray-300">
                      <p className="mb-3">
                        <span className="font-semibold">Key Coursework:</span> Data Structures & Algorithms, 
                        Web Development, Database Management Systems, Software Engineering, 
                        Object-Oriented Programming, Computer Networks
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs">DSA</span>
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs">Web Development</span>
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs">DBMS</span>
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs">Software Engineering</span>
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs">OOP</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Intermediate (12th) */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/70 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🎓</span>
                  </div>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                  className="flex-1"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          Intermediate (12th Grade)
                        </h3>
                        <p className="text-primary font-semibold">Science Stream (Physics, Chemistry, Mathematics)</p>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          Bihar School Examination Board (BSEB)
                        </p>
                      </div>
                      <div className="mt-3 lg:mt-0 lg:text-right">
                        <span className="inline-block bg-primary/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                          2016 - 2018
                        </span>
                        <div className="mt-2">
                          <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                            47.5%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-700 dark:text-gray-300">
                      <p>
                        <span className="font-semibold">Subjects:</span> Physics, Chemistry, Mathematics, English, Hindi
                      </p>
                      <p className="mt-2">
                        Strong foundation in mathematical and scientific concepts that supports my analytical thinking in programming.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Matriculation (10th) */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/50 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🎓</span>
                  </div>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                  className="flex-1"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          Matriculation (10th Grade)
                        </h3>
                        <p className="text-primary font-semibold">Secondary Education</p>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          Bihar School Examination Board (BSEB)
                        </p>
                      </div>
                      <div className="mt-3 lg:mt-0 lg:text-right">
                        <span className="inline-block bg-primary/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                          2015 - 2016
                        </span>
                        <div className="mt-2">
                          <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                            45.5%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-700 dark:text-gray-300">
                      <p>
                        <span className="font-semibold">Subjects:</span> Mathematics, Science, Social Science, English, Hindi,Sanskrit
                      </p>
                      <p className="mt-2">
                        Completed secondary education with strong performance across all subjects, building a solid academic foundation.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Additional Info section commented out */}
          {/*
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-lg p-6 border border-primary/20">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Academic Achievements
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">MCA</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Currently Pursuing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">6+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years in Computer Science</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2026</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Expected Graduation</div>
                </div>
              </div>
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  )
}
