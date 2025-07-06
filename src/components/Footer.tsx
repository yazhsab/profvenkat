import React from 'react';
import { Heart, ExternalLink, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Prof. Venkatesan M</h3>
            <p className="text-gray-300 mb-4">
              Computer Science & Engineering<br />
              National Institute of Technology<br />
              Puducherry, India
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <Mail className="w-4 h-4" />
              <span>venkatesan@nitpy.ac.in</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="#research" className="hover:text-yellow-400 transition-colors">Research</a></li>
              <li><a href="#publications" className="hover:text-yellow-400 transition-colors">Publications</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Academic Profiles</h4>
            <div className="space-y-2">
              <a
                href="https://scholar.google.com/citations?user=ZSGG6xwAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Google Scholar</span>
              </a>
              <a
                href="https://www.researchgate.net/profile/Venkatesan_Meenakshi_Sundaram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>ResearchGate</span>
              </a>
              <a
                href="https://research.nitpy.ac.in/professor_profile/105/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>NIT Puducherry</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> for academic excellence
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © 2024 Prof. Venkatesan M. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;