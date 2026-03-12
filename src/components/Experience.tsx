import React from 'react';
import { useInView } from '../hooks/useInView';
import { Building, Users, Shield, TrendingUp, Briefcase, Phone, MessageCircle, ClipboardList } from 'lucide-react';

const Experience = () => {
  const [ref, isInView] = useInView();

  const highlights = [
    {
      icon: Users,
      title: "Connected Laborers & Contractors",
      description: "Built a platform connecting newcomer laborers with contractors, solving employment challenges in the construction industry"
    },
    {
      icon: Shield,
      title: "Platform Security Solutions",
      description: "Solved platform bypassing issues by implementing secure payment systems and digital contracts"
    },
    {
      icon: TrendingUp,
      title: "Enhanced Worker Safety",
      description: "Improved worker safety standards and promoted fairness in labor practices through systematic approach"
    }
  ];

  const moviduHighlights = [
    {
      icon: Phone,
      title: "Business Development",
      description: "Supported business growth initiatives through sales-driven outreach and customer acquisition efforts in the EdTech domain"
    },
    {
      icon: MessageCircle,
      title: "Client Communication",
      description: "Strengthened relationship-building and communication skills through direct interaction with prospective clients and stakeholders"
    },
    {
      icon: ClipboardList,
      title: "Sales Operations",
      description: "Contributed to revenue-oriented processes by supporting engagement, follow-ups, and conversion-focused business activities"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Experience
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Main Experience Card */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Founder
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                        Labourmate
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 dark:text-gray-300 font-medium">
                        2023 – Now Closed
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Nashik
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Founded and led a platform-based startup connecting newcomer laborers with contractors 
                    in the construction industry. Successfully addressed critical market gaps through 
                    innovative solutions and strategic business approach.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Key Achievements */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {highlights.map((highlight, index) => (
                <div 
                  key={highlight.title}
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <highlight.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {highlight.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Movidu Experience Card */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Business Development Intern
                      </h3>
                      <p className="text-lg text-purple-600 dark:text-purple-400 font-medium">
                        Movidu Technology Pvt. Ltd.
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 dark:text-gray-300 font-medium">
                        11 Jan 2026 – Present
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Noida
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Working as a Business Development Intern in the EdTech sector, contributing to customer acquisition, sales communication, and growth-oriented business activities. Developing practical experience in client interaction, relationship building, and revenue-focused operations in a fast-paced business environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Movidu Highlights */}
            <div className="grid md:grid-cols-3 gap-6">
              {moviduHighlights.map((highlight, index) => (
                <div 
                  key={highlight.title}
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                      <highlight.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {highlight.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
