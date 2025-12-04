interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Vite"]
  },
  {
    category: "Backend", 
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Middleware", "Python"]
  },
  {
    category: "Database",
    skills: ["MongoDB", "Mongoose", "Database Design", "Query Optimization"]
  },
  {
    category: "Tools & Others",
    skills: ["Git", "GitHub", "VS Code", "Postman", "npm", "Responsive Design"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Proficient in modern web technologies and frameworks with hands-on experience in full-stack development
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {skillCategories.map((category) => (
              <div key={category.category} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-700 group cursor-pointer">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">{category.category}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map(skill => (
                    <div key={skill} className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Always learning new technologies and staying updated with industry trends
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
