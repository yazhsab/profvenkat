import React from 'react';
import { Mail, MapPin, GraduationCap, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Professor Venkatesan M
            </h1>
            <h2 className="text-xl lg:text-2xl text-yellow-400 mb-6">
              Computer Science & Engineering
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Distinguished researcher and educator specializing in Machine Learning, 
              Data Mining, and Computer Networks. Committed to advancing technological 
              innovation through research and nurturing the next generation of computer scientists.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2 text-blue-100">
                <MapPin className="w-5 h-5" />
                <span>National Institute of Technology, Puducherry</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <Mail className="w-5 h-5" />
                <span>venkatesan@nitpy.ac.in</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <GraduationCap className="w-5 h-5 text-yellow-400" />
                <span className="text-white">Ph.D. Computer Science</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-white">15+ Years Experience</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="w-80 h-80 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full p-2">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <div className="w-60 h-60 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-20 h-20 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;