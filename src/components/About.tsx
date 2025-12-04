export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a <span className="font-semibold text-primary">MCA student at Pondicherry University</span> with a passion for creating innovative digital solutions. My journey in technology has been driven by curiosity and a commitment to continuous learning.
              </p>
              
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Recently completed an <span className="font-semibold text-primary">internship at EduNet Foundation</span>, where I contributed to building responsive and scalable web applications using modern technologies and best practices.
              </p>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Core Expertise</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="font-semibold text-primary">Full-Stack Development (MERN)</span> – I specialize in building responsive and efficient web applications using MongoDB, Express.js, React, and Node.js.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What I Do</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-primary text-lg mt-1"></span>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Problem Solving</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Converting complex requirements into elegant solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary text-lg mt-1"></span>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Innovation</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Always exploring new technologies and best practices</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary text-lg mt-1"></span>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Growth Mindset</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Continuous learning and adapting to industry trends</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary/10 to-primary-dark/10 p-6 rounded-lg border border-primary/20">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic text-center">
                  "Passionate about creating digital experiences that make a difference. Every line of code is an opportunity to solve real-world problems."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
