import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always interested in discussing research collaborations, academic opportunities, 
            and innovative projects. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">venkatesan@nitpy.ac.in</p>
                  <p className="text-gray-600">venkat.research@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">+91 413 261 3022</p>
                  <p className="text-gray-600">+91 94XXX XXXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">
                    Department of Computer Science & Engineering<br />
                    National Institute of Technology<br />
                    Karaikal, Puducherry - 609609<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: By appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Profiles */}
            <div className="mt-12">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Academic Profiles</h4>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://scholar.google.com/citations?user=ZSGG6xwAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-blue-900" />
                  <span className="text-sm font-medium">Google Scholar</span>
                </a>
                <a
                  href="https://www.researchgate.net/profile/Venkatesan_Meenakshi_Sundaram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">ResearchGate</span>
                </a>
                <a
                  href="https://research.nitpy.ac.in/professor_profile/105/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium">NIT Puducherry</span>
                </a>
                <a
                  href="https://linkedin.com/in/venkatesan-m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-blue-700" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter the subject of your message"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Enter your message here..."
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> For academic collaborations and research inquiries, 
                please include your institutional affiliation and research interests in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;