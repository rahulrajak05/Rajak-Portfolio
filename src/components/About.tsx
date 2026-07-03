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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">About Me</h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-primary mx-auto rounded-full"
            ></motion.div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                I'm a <span className="font-semibold text-primary">MCA student at Pondicherry University</span> with a passion for creating innovative digital solutions. My journey in technology has been driven by curiosity and a commitment to continuous learning.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                Recently pursuing an <span className="font-semibold text-primary">internship at NIELIT Ranchi</span>, where I am gaining hands-on experience in emerging technologies, real-time project development, data analytics, and modern software development practices through the Work Based Learning (WBL) program.
              </motion.p>
+
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-primary"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Core Expertise</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="font-semibold text-primary">Full-Stack Development (MERN)</span> – I specialize in building responsive and efficient web applications using MongoDB, Express.js, React, and Node.js.
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What I Do</h3>
                <div className="space-y-4">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-3"
                  >
                    <span className="text-primary text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Problem Solving</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Converting complex requirements into elegant solutions</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-3"
                  >
                    <span className="text-primary text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Innovation</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Always exploring new technologies and best practices</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-3"
                  >
                    <span className="text-primary text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Growth Mindset</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Continuous learning and adapting to industry trends</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-primary/10 to-primary-dark/10 p-6 rounded-lg border border-primary/20"
              >
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic text-center">
                  "Passionate about creating digital experiences that make a difference. Every line of code is an opportunity to solve real-world problems."
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
