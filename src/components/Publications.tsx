import React, { useState } from 'react';
import { Search, Filter, Calendar, ExternalLink, Download, Award, BarChart3 } from 'lucide-react';

const Publications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('all');
  const [filterType, setFilterType] = useState('all');

  const publications = [
    {
      id: 1,
      title: "Federated Learning Approaches for Privacy-Preserving Healthcare Analytics",
      authors: ["Venkatesan M", "Sharma R", "Patel K"],
      venue: "IEEE Transactions on Medical Informatics",
      year: 2024,
      type: "Journal",
      citations: 45,
      impact: "Q1",
      doi: "10.1109/TMI.2024.3401234",
      abstract: "This paper presents novel federated learning techniques that maintain patient privacy while enabling collaborative healthcare data analysis across multiple institutions."
    },
    {
      id: 2,
      title: "Deep Learning for Network Anomaly Detection in IoT Environments",
      authors: ["Venkatesan M", "Kumar A", "Singh P"],
      venue: "ACM Computing Surveys",
      year: 2024,
      type: "Journal",
      citations: 67,
      impact: "Q1",
      doi: "10.1145/3649309",
      abstract: "A comprehensive survey of deep learning applications in IoT network security, proposing a new architecture for real-time anomaly detection."
    },
    {
      id: 3,
      title: "Blockchain-Based Supply Chain Transparency: A Practical Implementation",
      authors: ["Venkatesan M", "Chen L", "Rodriguez M"],
      venue: "International Conference on Blockchain Technology",
      year: 2023,
      type: "Conference",
      citations: 32,
      impact: "CORE A",
      doi: "10.1109/BCT.2023.10234567",
      abstract: "Implementation of a blockchain-based system for supply chain management with emphasis on transparency and traceability."
    },
    {
      id: 4,
      title: "Optimized Algorithms for Large-Scale Data Mining in Distributed Systems",
      authors: ["Venkatesan M", "Thompson J", "Wang Y"],
      venue: "Journal of Parallel and Distributed Computing",
      year: 2023,
      type: "Journal",
      citations: 89,
      impact: "Q2",
      doi: "10.1016/j.jpdc.2023.04.015",
      abstract: "Novel optimization techniques for data mining algorithms in distributed computing environments, achieving significant performance improvements."
    },
    {
      id: 5,
      title: "Machine Learning for Cybersecurity: Challenges and Opportunities",
      authors: ["Venkatesan M", "Brown A", "Lee S"],
      venue: "IEEE Security & Privacy",
      year: 2023,
      type: "Journal",
      citations: 156,
      impact: "Q1",
      doi: "10.1109/MSEC.2023.3289456",
      abstract: "A comprehensive analysis of machine learning applications in cybersecurity, identifying current challenges and future research directions."
    },
    {
      id: 6,
      title: "Edge Computing Architectures for Real-Time Data Processing",
      authors: ["Venkatesan M", "Miller D", "Kumar V"],
      venue: "IEEE International Conference on Edge Computing",
      year: 2022,
      type: "Conference",
      citations: 78,
      impact: "CORE A",
      doi: "10.1109/EDGE.2022.9987654",
      abstract: "Proposed architectures for edge computing systems that enable real-time data processing with minimal latency."
    }
  ];

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesYear = filterYear === 'all' || pub.year.toString() === filterYear;
    const matchesType = filterType === 'all' || pub.type === filterType;
    
    return matchesSearch && matchesYear && matchesType;
  });

  const totalCitations = publications.reduce((sum, pub) => sum + pub.citations, 0);
  const hIndex = publications.filter(pub => pub.citations >= publications.findIndex(p => p.id === pub.id) + 1).length;

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Publications & Research Output</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive collection of research publications, contributing to the advancement 
            of computer science and technology.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3">
              <BarChart3 className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{publications.length}</h3>
            <p className="text-gray-600">Total Publications</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{totalCitations}</h3>
            <p className="text-gray-600">Total Citations</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <ExternalLink className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{hIndex}</h3>
            <p className="text-gray-600">H-Index</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">2024</h3>
            <p className="text-gray-600">Latest Publication</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search publications by title or author..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
              >
                <option value="all">All Years</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="Journal">Journal</option>
                <option value="Conference">Conference</option>
              </select>
            </div>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.map((publication) => (
            <div key={publication.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      publication.type === 'Journal' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {publication.type}
                    </span>
                    <span className="text-sm text-gray-500">{publication.year}</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      publication.impact === 'Q1' 
                        ? 'bg-yellow-100 text-yellow-800'
                        : publication.impact === 'Q2'
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {publication.impact}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-900 cursor-pointer">
                    {publication.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-3">
                    {publication.authors.join(', ')}
                  </p>
                  
                  <p className="text-sm text-gray-500 mb-3 italic">
                    {publication.venue}
                  </p>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {publication.abstract}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Citations: {publication.citations}</span>
                    <span>DOI: {publication.doi}</span>
                  </div>
                </div>
                
                <div className="flex lg:flex-col gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>View</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>PDF</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPublications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No publications found matching your criteria.</p>
          </div>
        )}

        {/* Google Scholar Integration */}
        <div className="mt-12 text-center">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Profiles</h3>
            <p className="text-gray-600 mb-6">
              For complete publication list and citation metrics, visit my academic profiles:
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://scholar.google.com/citations?user=ZSGG6xwAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Google Scholar</span>
              </a>
              <a
                href="https://www.researchgate.net/profile/Venkatesan_Meenakshi_Sundaram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>ResearchGate</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;