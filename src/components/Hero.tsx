import aboutme from '../assets/about me.jpeg';
import profile from '../assets/profile.jpeg';
import { useEffect, useState } from 'react';
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
        <div className="space-y-6 lg:space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight font-display leading-tight">
              <span className="text-primary block">Hi, I'm</span> 
              <span className="text-gray-900 dark:text-white block">Rahul Rajak</span>
              <span key={roleIndex} className="text-gray-700 dark:text-gray-300 block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium mt-2 transition-opacity duration-500">{roles[roleIndex]}</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              MCA student passionate about creating exceptional digital experiences. Specialized in MERN stack development with a focus on building responsive, scalable, and user-friendly web applications.
            </p>
          </div>
          {/* Profile badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">MERN Stack</span>
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100/60 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-700/40 text-sm font-medium">Data Analysis</span>
            <span className="inline-block px-3 py-1 rounded-full bg-purple-100/60 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-700/40 text-sm font-medium">AI/ML</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary hover:bg-primary-dark rounded-lg shadow-soft transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary rounded-lg transition-all duration-300 hover:shadow-md"
            >
              Let's Connect
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
              <img 
                src={profile} 
                alt="Rahul Kumar - Full Stack Developer" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400.png?text=Rahul+Kumar'
                }} 
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
