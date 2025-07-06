import React, { useState } from 'react';
import { Brain, Network, BarChart3, Shield, Code, ChevronRight, ExternalLink } from 'lucide-react';

const Research: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);

  const researchAreas = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Advanced algorithms for pattern recognition and predictive modeling",
      color: "bg-blue-500"
    },
    {
      icon: BarChart3,
      title: "Data Mining",
      description: "Extracting valuable insights from large-scale datasets",
      color: "bg-green-500"
    },
    {
      icon: Network,
      title: "Computer Networks",
      description: "Network optimization and security protocols",
      color: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Developing robust security frameworks and threat detection",
      color: "bg-red-500"
    },
    {
      icon: Code,
      title: "Algorithm Design",
      description: "Efficient algorithms for computational problems",
      color: "bg-yellow-500"
    }
  ];

  const currentProjects = [
    {
      title: "AI-Driven Network Anomaly Detection",
      description: "Developing machine learning models to identify and predict network anomalies in real-time, enhancing cybersecurity measures for enterprise networks.",
      status: "Active",
      funding: "₹25 Lakhs",
      duration: "2023-2025",
      collaborators: ["IIT Madras", "Microsoft Research"]
    },
    {
      title: "Federated Learning for Healthcare",
      description: "Implementing privacy-preserving machine learning techniques for medical data analysis across distributed healthcare systems.",
      status: "Active",
      funding: "₹18 Lakhs",
      duration: "2023-2024",
      collaborators: ["AIIMS Delhi", "Google Research"]
    },
    {
      title: "Blockchain-Based Supply Chain Security",
      description: "Creating a secure and transparent supply chain management system using blockchain technology and smart contracts.",
      status: "Completed",
      funding: "₹15 Lakhs",
      duration: "2022-2023",
      collaborators: ["Infosys", "TCS Research"]
    }
  ];

  return (
    <section id="research" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering research in computer science with focus on practical applications 
            and innovative solutions to complex technological challenges.
          </p>
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Research Areas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className={`w-12 h-12 ${area.color} rounded-lg flex items-center justify-center mb-4`}>
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{area.title}</h4>
                <p className="text-sm text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Current & Recent Projects</h3>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Project Navigation */}
              <div className="lg:w-1/3">
                <div className="bg-gray-50 rounded-xl p-4">
                  {currentProjects.map((project, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveProject(index)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-200 mb-2 last:mb-0 ${
                        activeProject === index
                          ? 'bg-blue-900 text-white'
                          : 'hover:bg-white hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-sm">{project.title}</h4>
                          <p className={`text-xs mt-1 ${
                            activeProject === index ? 'text-blue-200' : 'text-gray-500'
                          }`}>
                            {project.status} • {project.duration}
                          </p>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-transform ${
                          activeProject === index ? 'rotate-90' : ''
                        }`} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:w-2/3">
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      currentProjects[activeProject].status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {currentProjects[activeProject].status}
                    </div>
                    <span className="text-sm text-gray-500">{currentProjects[activeProject].duration}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {currentProjects[activeProject].title}
                  </h4>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {currentProjects[activeProject].description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Funding</h5>
                      <p className="text-gray-600">{currentProjects[activeProject].funding}</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Collaborators</h5>
                      <div className="flex flex-wrap gap-2">
                        {currentProjects[activeProject].collaborators.map((collaborator, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                            {collaborator}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button className="flex items-center gap-2 text-blue-900 hover:text-blue-800 font-medium">
                    <span>View Project Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Methodology */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Research Methodology</h3>
            <p className="text-blue-100 mb-8">
              Our research approach combines theoretical foundations with practical applications,
              ensuring that our work contributes to both academic knowledge and real-world solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold text-yellow-400 mb-2">Theoretical Analysis</h4>
                <p className="text-blue-100 text-sm">
                  Rigorous mathematical modeling and algorithmic design
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold text-yellow-400 mb-2">Experimental Validation</h4>
                <p className="text-blue-100 text-sm">
                  Comprehensive testing and performance evaluation
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold text-yellow-400 mb-2">Practical Implementation</h4>
                <p className="text-blue-100 text-sm">
                  Real-world deployment and impact assessment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;