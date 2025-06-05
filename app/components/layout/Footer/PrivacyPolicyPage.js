// 'use client';
// import React from 'react';

// const PrivacyPolicyPage = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <h1 className="text-4xl sm:text-5xl font-light text-[#112d4e] mb-12">
//           Privacy Policy
//         </h1>
        
//         <div className="prose max-w-none text-[#112d4e]/80">
//           <section className="mb-12">
//             <h2 className="text-2xl font-semibold text-[#112d4e] mb-6">1. Information Collection</h2>
//             <p className="mb-4">
//               Medvient collects and processes healthcare information solely for the purpose of providing our AI-driven transcription, coding, and billing services. This includes:
//             </p>
//             <ul className="list-disc pl-6 mb-4">
//               <li className="mb-2">Medical dictation recordings</li>
//               <li className="mb-2">Patient health information</li>
//               <li className="mb-2">Healthcare provider information</li>
//               <li className="mb-2">Billing and insurance information</li>
//             </ul>
//           </section>

//           <section className="mb-12">
//             <h2 className="text-2xl font-semibold text-[#112d4e] mb-6">2. HIPAA Compliance</h2>
//             <p className="mb-4">
//               As a healthcare service provider, we maintain strict HIPAA compliance in all our operations. Our AI systems are designed with privacy-first architecture, ensuring all protected health information (PHI) is properly secured and managed.
//             </p>
//           </section>

//           <section className="mb-12">
//             <h2 className="text-2xl font-semibold text-[#112d4e] mb-6">3. Data Security</h2>
//             <p className="mb-4">
//               We implement industry-leading security measures to protect your data:
//             </p>
//             <ul className="list-disc pl-6 mb-4">
//               <li className="mb-2">End-to-end encryption for all data transmission</li>
//               <li className="mb-2">Secure cloud storage with regular backups</li>
//               <li className="mb-2">Access controls and authentication protocols</li>
//               <li className="mb-2">Regular security audits and updates</li>
//             </ul>
//           </section>

//           <section className="mb-12">
//             <h2 className="text-2xl font-semibold text-[#112d4e] mb-6">4. AI Processing</h2>
//             <p className="mb-4">
//               Our AI systems process healthcare data in compliance with all applicable regulations. We maintain transparency about our AI processing methods while protecting our proprietary technology.
//             </p>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrivacyPolicyPage;



'use client';
import React, { useState, useEffect } from 'react';
import { Shield, Lock, Database, UserCog } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const sections = [
    {
      id: "information-collection",
      icon: <Database className="w-12 h-12 text-[#ffc83f]" />,
      title: "Information Collection & Use",
      subsections: [
        {
          subtitle: "Personal Information",
          text: "Medvient collects and processes healthcare information solely for providing our AI-driven transcription, coding, and billing services. This includes medical dictation recordings, patient health information, healthcare provider data, and billing details."
        },
        {
          subtitle: "Technical Data",
          text: "We automatically collect technical information about your interactions with our platform to improve our services and ensure security. This includes usage data, device information, and service performance metrics."
        }
      ]
    },
    {
      id: "hipaa-compliance",
      icon: <Shield className="w-12 h-12 text-[#ffc83f]" />,
      title: "HIPAA Compliance & Security",
      subsections: [
        {
          subtitle: "HIPAA Standards",
          text: "As a healthcare service provider, we maintain strict HIPAA compliance across all operations. Our AI systems feature privacy-first architecture ensuring protected health information (PHI) security."
        },
        {
          subtitle: "Security Measures",
          text: "We implement end-to-end encryption, secure cloud storage, strict access controls, and regular security audits to protect your data. Our security protocols are regularly updated to meet evolving healthcare privacy standards."
        }
      ]
    },
    {
      id: "ai-processing",
      icon: <Lock className="w-12 h-12 text-[#ffc83f]" />,
      title: "AI Data Processing",
      subsections: [
        {
          subtitle: "Processing Methods",
          text: "Our AI systems process healthcare data in compliance with all applicable regulations while maintaining transparency about our methods. We ensure that all AI processing adheres to privacy-preserving principles."
        },
        {
          subtitle: "Data Retention",
          text: "We retain processed data only as long as necessary for service provision and compliance requirements. Our retention policies are designed to balance service quality with privacy protection."
        }
      ]
    },
    {
      id: "user-rights",
      icon: <UserCog className="w-12 h-12 text-[#ffc83f]" />,
      title: "Your Rights & Choices",
      subsections: [
        {
          subtitle: "Access Rights",
          text: "You have the right to access, correct, or delete your personal information in accordance with applicable laws. We provide transparent processes for exercising these rights."
        },
        {
          subtitle: "Communication Preferences",
          text: "You can choose how we communicate with you and manage your notification preferences. We respect your choices and make it easy to update your communication settings."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-[#112d4e] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-light mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            We prioritize the protection of your data through advanced security measures 
            and strict compliance with healthcare regulations.
          </p>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveIndex(index);
                  document.getElementById(section.id).scrollIntoView({ behavior: 'smooth' });
                }}
                className={`whitespace-nowrap px-4 py-2 rounded-lg transition-colors duration-300 ${
                  activeIndex === index 
                    ? 'bg-[#112d4e] text-white' 
                    : 'text-[#112d4e] hover:bg-gray-100'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-24">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className={`transform transition-all duration-1000 ${
                isVisible[section.id]
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-[#112d4e] rounded-lg">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-[#112d4e] mb-6">
                    {section.title}
                  </h2>
                  <div className="space-y-8">
                    {section.subsections.map((subsection, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-medium text-[#112d4e] mb-3">
                          {subsection.subtitle}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {subsection.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Contact Section */}
        {/* <div className="max-w-4xl mx-auto mt-16 p-8 bg-white rounded-lg shadow-sm text-center">
          <p className="text-gray-600 mb-4">
            Last updated: February 13, 2025
          </p>
          <p className="text-gray-600 mb-6">
            If you have any questions about our privacy practices, please contact our Privacy Officer.
          </p>
          <button className="bg-[#ffc83f] text-[#112d4e] px-8 py-3 rounded-lg hover:bg-[#112d4e] hover:text-[#ffc83f] transition-colors duration-300">
            Contact Privacy Team
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;