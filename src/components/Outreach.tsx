export default function Workshops() {
  const workshopPrograms = [
   {
  "title": "Quizfinity – Quiz Competition",
  "organization": "Knowledge Institute of Technology (KIoT), Tamil Nadu",
  "duration": "Participation Certificate",
  "description": "Participated in the Quizfinity quiz competition organized by KIoT through the Unstop platform.",
  "impact": "Enhanced general awareness and competitive quiz participation experience.",
  "activities": [
    "Participation in online quiz competition",
    "Engagement in timed question-answer rounds",
    "Testing knowledge across multiple domains"
  ],
  "technologies": [
    "Online Quiz Platform"
  ],
  "status": "completed"
},

{
      title: "Essentials of Computer Science: Basics to Quantum",
      organization: "National Institute of Technology (NIT) Warangal",
      duration: "18th–23rd August 2025 (Six-Day Online STTP)",
      description: "Successfully participated in a six-day online Short Term Training Programme on 'Essentials of Computer Science: Basics to Quantum', organized by the Department of Computer Science & Engineering in association with the Research & Development Cell, NIT Warangal.",
      impact: "Strengthened understanding of core computer science fundamentals and introductory quantum computing concepts.",
      activities: [
        "Learning fundamentals of computer science",
        "Understanding basics of quantum computing",
        "Exposure to advanced computational concepts",
        "Participated in online technical training sessions"
      ],
      technologies: [
        "Computer Science Fundamentals",
        "Quantum Computing Basics"
      ],
      status: "completed"
    },


    {
      title: "4 Day SQL Basic Course",
      organization: "Newton School",
      duration: "Completed on 8th August 2025",
      description: "Successfully completed a certified 4-day SQL basic course with distinction, demonstrating strong understanding of SQL fundamentals and database concepts.",
      impact: "Strengthened knowledge of SQL queries, data handling, and database operations.",
      activities: [
        "Learning SQL basics and syntax",
        "Hands-on practice with database queries",
        "Understanding data retrieval and manipulation",
        "Working with structured database systems"
      ],
      technologies: [
        "SQL",
        "Database Concepts"
      ],
      status: "completed"
    },


    {
      title: "Application of AI/ML Model for Specific Crop Acreage Mapping",
      organization: "Indian Institute of Remote Sensing (IIRS), ISRO, Dehradun",
      duration: "Apr 2025 (One-day Workshop)",
      description: "Completed a certified one-day workshop focused on the application of AI/ML models for specific crop acreage mapping, conducted under the IIRS Outreach Programme.",
      impact: "Gained practical understanding of AI/ML techniques for crop acreage estimation using remote sensing data.",
      activities: [
        "Understanding crop acreage mapping concepts",
        "Learning AI/ML model applications in geospatial analysis",
        "Hands-on exposure to remote sensing–based agricultural assessment",
        "Participation in IIRS Outreach Programme workshop"
      ],
      technologies: [
        "AI/ML Concepts",
        "Remote Sensing",
        "Geospatial Techniques"
      ],
      status: "completed"
    },

    
    {
      title: "Geodata Processing using Python and Machine Learning",
      organization: "Indian Institute of Remote Sensing (IIRS), ISRO, Dehradun",
      duration: "Mar 2025",
      description: "Completed certified training focused on geospatial data processing, satellite imagery analysis, and machine learning applications in geoinformatics using Python.",
      impact: "Enhanced skills in Python-based geodata handling, spatial analysis, and ML-driven classification.",
      activities: [
        "Geospatial data preprocessing and cleaning",
        "Satellite image interpretation and handling",
        "Machine learning-based land cover classification",
        "Hands-on projects using Python geospatial libraries"
      ],
      technologies: [
        "Python",
        "NumPy",
        "Pandas",
        "GeoPandas",
        "Rasterio",
        "Scikit-learn"
      ],
      status: "completed"
    }

  ]

  return (
    <section id="workshops" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Workshops & <span className="text-primary">Programs</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Continuous learning through professional workshops and training programs in cutting-edge technologies
            </p>
          </div>

          <div className="space-y-8">
            {workshopPrograms.map((program, index) => (
              <div key={program.title} className="relative">
                {/* Timeline line */}
                {index !== workshopPrograms.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary to-transparent"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">
                      {program.status === 'ongoing' ? '🚀' : '✅'}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{program.title}</h3>
                        <p className="text-lg font-semibold text-primary">{program.organization}</p>
                      </div>
                      <div className="mt-2 sm:mt-0 flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          program.status === 'ongoing' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                        }`}>
                          {program.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                        </span>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{program.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      {program.description}
                    </p>
                    
                    <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-4 mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-primary text-lg">📊</span>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Impact</h4>
                      </div>
                      <p className="text-primary font-bold text-lg">{program.impact}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Activities:</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {program.activities.map((activity, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <span className="text-primary mt-1.5 text-xs">•</span>
                              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{activity}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies/Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {program.technologies.map(tech => (
                            <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 p-6 bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-lg border border-primary/20">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Continuous Learning & Professional Development
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Committed to staying updated with latest technologies and advancing technical skills through certified programs
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="text-primary">🎓</span>
                <span>4 Certified Programs</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary">🏛️</span>
                <span>Premier Institutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary">💡</span>
                <span>Emerging Technologies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}