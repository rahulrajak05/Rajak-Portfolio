import profile from '../assets/profile.jpeg';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const roles = [
    'Mern-Stack Developer',
    'Data Analysis',
    'AI/ML'
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="home" className="min-h-screen flex items-center py-16 lg:py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 lg:space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight font-display leading-tight">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-primary block"
              >
                Hi, I'm
              </motion.span> 
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-gray-900 dark:text-white block"
              >
                Rahul Rajak
              </motion.span>
              <motion.span 
                key={roleIndex} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-gray-700 dark:text-gray-300 block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium mt-2"
              >
                {roles[roleIndex]}
              </motion.span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
            >
              MCA student passionate about creating exceptional digital experiences. Specialized in MERN stack development with a focus on building responsive, scalable, and user-friendly web applications.
            </motion.p>
          </div>
          {/* Profile badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-2 pt-2"
          >
            <motion.span 
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium cursor-pointer"
            >
              MERN Stack
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.1, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block px-3 py-1 rounded-full bg-blue-100/60 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-700/40 text-sm font-medium cursor-pointer"
            >
              Data Analysis
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block px-3 py-1 rounded-full bg-purple-100/60 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-700/40 text-sm font-medium cursor-pointer"
            >
              AI/ML
            </motion.span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary hover:bg-primary-dark rounded-lg shadow-soft transition-all duration-300"
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05, borderColor: "rgb(59, 130, 246)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary rounded-lg transition-all duration-300"
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700"
            >
              <img 
                src={profile} 
                alt="Rahul Kumar - Full Stack Developer" 
                className="w-full h-full object-cover" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400.png?text=Rahul+Kumar'
                }} 
              />
            </motion.div>
            
          </div>
        </motion.div>
      </div>
    </section>
  )
}
