import React from 'react';
import { useInView } from '../hooks/useInView';
import { 
  BarChart3, 
  TrendingUp, 
  Database, 
  PieChart, 
  ExternalLink,
  MonitorSmartphone,
  LineChart
} from 'lucide-react';

const Projects = () => {
  const [ref, isInView] = useInView();

  const projects = [
    {
      title: "Sales Dashboard with EDA",
      description:
        "Built an interactive sales dashboard with exploratory data analysis, trend tracking, and visual insights to support business decision-making.",
      technologies: ["Python", "Power BI", "Excel"],
      icon: BarChart3,
      gradient: "from-blue-500 to-blue-600",
      github: "https://github.com/Harshjha0017"
    },
    {
      title: "Customer Churn Analysis",
      description:
        "Analyzed telecom customer churn patterns to identify key drivers, retention risks, and business opportunities using data visualization and SQL.",
      technologies: ["Python", "SQL", "Power BI"],
      icon: Database,
      gradient: "from-orange-500 to-red-500",
      github: "https://github.com/Harshjha0017"
    },
    {
      title: "Retail Sales Forecasting",
      description:
        "Performed sales forecasting and inventory analysis to improve stock planning, pricing visibility, and business performance reporting.",
      technologies: ["Python", "Power BI", "Matplotlib"],
      icon: LineChart,
      gradient: "from-purple-500 to-purple-600",
      github: "https://github.com/Harshjha0017"
    },
    {
      title: "Term Deposit Prediction",
      description:
        "Analyzed bank marketing data to identify conversion factors and predict customer subscription behavior for term deposit campaigns.",
      technologies: ["Python", "NumPy", "Power BI"],
      icon: PieChart,
      gradient: "from-green-500 to-green-600",
      github: "https://github.com/Harshjha0017"
    },
    {
      title: "Lead Funnel Analysis",
      description:
        "Created a business-focused lead funnel case study to analyze engagement stages, conversion drop-offs, and customer acquisition performance.",
      technologies: ["Excel", "Power BI", "Business Analysis"],
      icon: TrendingUp,
      gradient: "from-teal-500 to-teal-600",
      github: "https://github.com/Harshjha0017"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Projects
          </h2>

          {/* Project Cards + Coming Soon in 6th Position */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-5`}
                  >
                    <project.icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Link - Text + Icon Both Clickable */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600 font-medium text-sm transition-colors mt-auto"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <span>View on GitHub</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}

            {/* Coming Soon Card in 6th Position */}
            <div
              className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg border-2 border-dashed border-gray-300 dark:border-gray-600 transition-all duration-300 h-full ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${projects.length * 150}ms` }}
            >
              <div className="p-6 h-full flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center mb-5">
                  <MonitorSmartphone className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  More Projects Coming Soon
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  I’m actively building more Business Analyst and data-driven case studies to expand this portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
