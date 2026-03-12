import React from 'react';
import { useInView } from '../hooks/useInView';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const [ref, isInView] = useInView();

  const certifications = [
    {
      title: "Business Analysis",
      provider: "Microsoft / LinkedIn",
      description: "Certification covering business analysis methodologies, requirements gathering, and strategic analysis techniques.",
      icon: Award,
      gradient: "from-blue-500 to-blue-600",
      verified: true,
      link: "https://www.linkedin.com/learning/certificates/7932a84858fed6d488dbcf5468758141b45718f733f784ec1323a1f5693436c7?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BMOLbn4B7QlOojOpmaqcXmQ%3D%3D"
    },
    {
      title: "Marketing Research Fundamentals",
      provider: "VMEdu",
      credentialId: "604249",
      description: "Certification in marketing research principles, data collection methods, and consumer behavior analysis.",
      icon: Award,
      gradient: "from-teal-500 to-teal-600",
      verified: true,
      link: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/MarketingResearchFundamentals-HarshJha-604249.pdf"
    },
    {
      title: "GDSC Certification",
      provider: "Google Developer Student Clubs",
      description: "Recognition for participation and contribution through GDSC programs and community initiatives.",
      icon: Award,
      gradient: "from-green-500 to-green-600",
      verified: true,
      link: "https://certificate.givemycertificate.com/c/e1b997b6-6aa9-4551-96d0-ccc227d189c5"
    },
    {
      title: "OCI 2025 AI Foundations Associate",
      provider: "Oracle",
      description: "Oracle certification validating AI concepts, OCI machine learning foundations, and cloud AI understanding.",
      icon: Award,
      gradient: "from-red-500 to-red-600",
      verified: true,
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=954076ECF1D053E04C71F1A15B534564B01E6449661EE71B5F6D834FCF519F15"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center mb-5`}>
                    <cert.icon className="h-7 w-7 text-white" />
                  </div>

                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
                      {cert.title}
                    </h3>
                    {cert.verified && (
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    )}
                  </div>

                  <p className="text-base text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {cert.provider}
                  </p>

                  {cert.credentialId && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <strong>Credential ID:</strong> {cert.credentialId}
                    </p>
                  )}

                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5 flex-grow">
                    {cert.description}
                  </p>

                  <div className="inline-flex items-center space-x-2 text-blue-500 font-medium text-sm mt-auto">
                    <span>View Certificate</span>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors"
                      aria-label={`View ${cert.title} certificate`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
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

export default Certifications;
