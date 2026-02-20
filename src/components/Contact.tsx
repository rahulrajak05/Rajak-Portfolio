import RahulRajakResume from '../assets/Rahul-Rajak.pdf';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900/50">
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
              Let's <span className="text-primary">Connect</span>
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
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and development.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="space-y-8">
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Get In Touch</h3>
                  <div className="w-12 h-0.5 bg-primary mx-auto mt-2 rounded-full"></div>
                </div>
                
                <motion.div 
                  variants={containerVariants}
                  className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                  <motion.div className="flex flex-col items-center text-center space-y-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary text-lg">📧</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white text-sm">Email</p>
                      <a href="mailto:rajakrahul1999@gmail.com" className="text-primary hover:underline text-xs">
                        rajakrahul1999@gmail.com
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center text-center space-y-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary text-lg">📞</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white text-sm">Phone</p>
                      <a href="tel:+919876543210" className="text-primary hover:underline text-xs">
                        +91 8969463558
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center text-center space-y-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary text-lg">📍</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white text-sm">Location</p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">Gaya, Bihar, India</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center text-center space-y-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary text-lg">⏰</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white text-sm">Response</p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">Within 24 hours</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              {/* Social Links */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Connect With Me</h3>
                  <div className="w-16 h-0.5 bg-primary mx-auto mt-3 rounded-full"></div>
                </div>
                <motion.div 
                  variants={containerVariants}
                  className="grid grid-cols-4 gap-4"
                >
                  <motion.a 
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/rahul-rajak1999/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-5 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-md"
                    title="LinkedIn Profile"
                  >
                    <img 
                      src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" 
                      alt="LinkedIn" 
                      className="w-8 h-8 dark:invert"
                    />
                  </motion.a>
                  
                  <motion.a 
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/rahulrajak05" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-5 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-md"
                    title="GitHub Profile"
                  >
                    <img 
                      src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000" 
                      alt="GitHub" 
                      className="w-8 h-8 dark:invert"
                    />
                  </motion.a>
                  
                  <motion.a 
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://leetcode.com/u/Rahul_Rajak/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-5 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-md"
                    title="LeetCode Profile"
                  >
                    <img 
                      src="https://img.icons8.com/?size=100&id=9L16NypUzu38&format=png&color=000000" 
                      alt="LeetCode" 
                      className="w-8 h-8 dark:invert"
                    />
                  </motion.a>
                  
                  <motion.a 
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href={RahulRajakResume} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-5 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-md"
                    title="Download Resume"
                  >
                    <img 
                      src="https://img.icons8.com/?size=100&id=dpFxG4jUlRT6&format=png&color=000000" 
                      alt="Resume" 
                      className="w-8 h-8 dark:invert"
                    />
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-12 p-6 bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-lg border border-primary/20"
          >
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <span className="font-semibold">Open to opportunities!</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Currently seeking internship and entry-level positions in Mern-stack development
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
