import React from 'react';
import { useInView } from '../hooks/useInView';
import { Briefcase, Database, Settings, Users, CheckCircle } from 'lucide-react';

const Skills = () => {
  const [ref, isInView] = useInView();

  const skillCategories = [
    {
      title: 'Business Analysis',
      icon: Briefcase,
      color: 'text-blue-500',
      bg: 'from-blue-500 to-blue-600',
      skills: [
        'Business Analysis',
        'Requirements Gathering',
        'Requirement Documentation',
        'BRD / FRD',
        'User Stories',
        'Process Modeling',
        'Workflow Analysis',
        'SDLC',
        'Agile Methodology',
        'Stakeholder Communication'
      ]
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      color: 'text-teal-500',
      bg: 'from-teal-500 to-teal-600',
      skills: [
        'Python',
        'SQL',
        'Excel',
        'Power BI',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Seaborn',
        'Data Cleaning',
        'EDA',
        'Dashboarding',
        'Data Visualization'
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Settings,
      color: 'text-purple-500',
      bg: 'from-purple-500 to-purple-600',
      skills: [
        'Jira',
        'Lucidchart',
        'Power BI',
        'Excel',
        'Google Sheets',
        'GitHub',
        'VS Code',
        'MS Office',
        'Canva'
      ]
    },
    {
      title: 'Business Development & Soft Skills',
      icon: Users,
      color: 'text-orange-500',
      bg: 'from-orange-500 to-red-500',
      skills: [
        'Business Communication',
        'Client Communication',
        'Lead Generation',
        'Sales Operations',
        'Customer Acquisition',
        'Market Research',
        'Conversion Strategy',
        'Problem Solving',
        'Relationship Building',
        'Presentation Skills'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.bg} flex items-center justify-center`}>
                      <category.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="inline-flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-700 rounded-full shadow-sm border border-gray-200 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle className={`h-4 w-4 ${category.color}`} />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
