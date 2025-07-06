import React from 'react';
import { Calendar, MapPin, Award, BookOpen, Users, Target } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: Award,
      title: "Excellence in Research",
      description: "Published 50+ research papers in top-tier conferences and journals"
    },
    {
      icon: Users,
      title: "Student Mentorship",
      description: "Guided 25+ Ph.D. and M.Tech students to successful completion"
    },
    {
      icon: BookOpen,
      title: "Academic Leadership",
      description: "Served as reviewer for IEEE, ACM, and other prestigious publications"
    },
    {
      icon: Target,
      title: "Industry Collaboration",
      description: "Active collaborations with leading tech companies and research institutions"
    }
  ];

  const timeline = [
    {
      year: "2020 - Present",
      position: "Professor",
      institution: "National Institute of Technology, Puducherry",
      description: "Leading research in Machine Learning and Data Mining"
    },
    {
      year: "2015 - 2020",
      position: "Associate Professor",
      institution: "National Institute of Technology, Puducherry",
      description: "Advanced research in Computer Networks and Algorithms"
    },
    {
      year: "2010 - 2015",
      position: "Assistant Professor",
      institution: "National Institute of Technology, Puducherry",
      description: "Established research foundation in Data Structures and Algorithms"
    },
    {
      year: "2008 - 2010",
      position: "Postdoctoral Research",
      institution: "Indian Institute of Technology, Madras",
      description: "Research in Distributed Systems and Network Security"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Professor Venkatesan M</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A distinguished academic with over 15 years of experience in computer science research and education,
            specializing in cutting-edge technologies and their practical applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Excellence</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Research Focus</h4>
                  <p className="text-gray-600">
                    Specializing in Machine Learning, Data Mining, Computer Networks, and Algorithm Design
                    with emphasis on practical applications and real-world problem solving.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Teaching Philosophy</h4>
                  <p className="text-gray-600">
                    Committed to fostering critical thinking and innovation in students through hands-on 
                    learning experiences and research-oriented education.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg flex items-center justify-center mb-4">
                  <achievement.icon className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Career Timeline</h3>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-blue-900 rounded-full mt-2"></div>
                  {index < timeline.length - 1 && <div className="w-0.5 h-20 bg-gray-300 ml-1.5 mt-2"></div>}
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-blue-900" />
                    <span className="text-sm font-medium text-blue-900">{item.year}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{item.position}</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{item.institution}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;