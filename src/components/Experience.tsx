import React from 'react';
import { useInView } from '../hooks/useInView';
import { Building, Briefcase, CheckCircle } from 'lucide-react';

const Experience = () => {
  const [ref, isInView] = useInView();

  const experiences = [
    {
      title: "Founder",
      company: "Labourmate",
      duration: "2023 – Now Closed",
      location: "Nashik",
      icon: Building,
      gradient: "from-blue-500 to-teal-500",
      description:
        "Founded and led a platform-based startup connecting newcomer laborers with contractors in the construction industry, addressing key market gaps through structured business solutions.",
      points: [
        "Built a platform to connect laborers and contractors in the construction sector",
        "Identified market gaps and designed practical workforce solutions",
        "Worked on platform trust, payment flow, and contractor-labor coordination",
        "Focused on improving worker access, fairness, and operational efficiency"
      ]
    },
    {
      title: "Business Development Intern",
      company: "Movidu Technology Pvt. Ltd.",
      duration: "11 Jan 2026 – Present",
      location: "Noida",
      icon: Briefcase,
      gradient: "from-purple-500 to-indigo-500",
      description:
        "Working in business development within the EdTech sector, contributing to customer acquisition, sales communication, and growth-oriented business activities in a fast-paced environment.",
      points: [
        "Supported business growth through customer acquisition and outreach initiatives",
        "Developed strong client communication and relationship-building skills",
        "Contributed to sales-focused operations and engagement activities",
        "Gained practical exposure to revenue-oriented business processes"
      ]
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.title + exp.company}
                className={`bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center flex-shrink-0`}>
                      <exp.icon className="h-7 w-7 text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {exp.title}
                          </h3>
                          <p className="text-base text-blue-600 dark:text-blue-400 font-medium">
                            {exp.company}
                          </p>
                        </div>

                        <div className="text-left sm:text-right">
                          <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                            {exp.duration}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {exp.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-3 mt-auto">
                    {exp.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          {point}
                        </p>
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

export default Experience;
