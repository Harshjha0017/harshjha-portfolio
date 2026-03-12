import React from 'react';
import { useInView } from '../hooks/useInView';

const About = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 p-1">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img 
                      src="/profile-image.jpg" 
                      alt="Harsh Jha - Data Analyst & Business Analyst"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hidden">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-4xl font-bold text-white">HJ</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Professional Photo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* About Text */}
            <div className="space-y-6">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="mb-6">
                  "When I’m not analyzing data, I’m usually working on real-world business problems,
                  building case studies, improving lead conversion strategies, or exploring how analytics can drive smarter decisions.."
                </p>
                
                <p className="mb-6">
                  I’m an aspiring Business Analyst with a strong interest in data analytics, business strategy, and process improvement. 
                  I combine hands-on business development experience with technical skills in Python, SQL, Power BI, 
                  and Excel to solve practical business problems and turn data into actionable insights.
                </p>
                
                <p>
                 Through my experience at Movidu Technology, Noida, I’ve worked on lead generation, student outreach, follow-ups, and conversion strategy, 
                 gaining real exposure to sales funnels, customer communication, and business growth. 
                 I’m currently focused on building impactful Business Analyst projects and strengthening my ability to connect business understanding with data-driven decision-making.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-full">
                  <span className="text-blue-800 dark:text-blue-200 font-medium">Data Analysis</span>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-full">
                  <span className="text-gray-800 dark:text-blue-200 font-medium">Business Analysis</span>
                </div>
                <div className="bg-teal-100 dark:bg-teal-900 px-4 py-2 rounded-full">
                  <span className="text-teal-800 dark:text-teal-200 font-medium">Business Strategy</span>
                </div>
                <div className="bg-purple-100 dark:bg-purple-900 px-4 py-2 rounded-full">
                  <span className="text-purple-800 dark:text-purple-200 font-medium">Problem Solving</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
