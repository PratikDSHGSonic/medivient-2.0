// 'use client';
// import React from 'react';

// const TermsOfUsePage = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <h1 className="text-4xl sm:text-5xl font-light text-[#112d4e] mb-12">
//           Terms of Use
//         </h1>
        
//         <div className="prose max-w-none text-[#112d4e]/80">
//           <section className="mb-12">
//             <h2 className="text-2xl font-semibold text-[#112d4e] mb-6">1. Acceptance of Terms</h2>
//             <p className="mb-4">
//               By accessing and using Medvient's AI-driven transcription, coding, and billing services, you agree to be bound by these Terms of Use. These terms govern your access to and use of our services, including any updates, new features, and capabilities.
//             </p>
//           </section>

//           <section className="mb-12">
//             <h2 className="text-2xl font-semibold text-[#112d4e] mb-6">2. Service Description</h2>
//             <p className="mb-4">
//               Medvient provides AI-powered healthcare documentation services, including but not limited to:
//             </p>
//             <ul className="list-disc pl-6 mb-4">
//               <li className="mb-2">Automated medical transcription services</li>
//               <li className="mb-2">AI-assisted medical coding</li>
//               <li className="mb-2">Automated billing processing</li>
//               <li className="mb-2">Revenue cycle management solutions</li>
//             </ul>
//           </section>

//           <section className="mb-12">
//             <h2 className="text-2xl font-semibold text-[#112d4e] mb-6">3. User Obligations</h2>
//             <p className="mb-4">
//               Users must ensure all submitted information is accurate and compliant with applicable healthcare regulations. Users are responsible for maintaining the confidentiality of their account credentials and for all activities conducted through their account.
//             </p>
//           </section>

//           <section className="mb-12">
//             <h2 className="text-2xl font-semibold text-[#112d4e] mb-6">4. Data Usage</h2>
//             <p className="mb-4">
//               All data processed through our services must comply with HIPAA regulations and other applicable healthcare privacy laws. Users must obtain necessary patient consents for data processing through our platform.
//             </p>
//           </section>

//           <section className="mb-12">
//             <h2 className="text-2xl font-semibold text-[#112d4e] mb-6">5. Service Limitations</h2>
//             <p className="mb-4">
//               While our AI technology strives for optimal accuracy, users should review all AI-generated content for accuracy before clinical or billing use. Medvient is not responsible for decisions made based on AI-generated outputs.
//             </p>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TermsOfUsePage;






'use client';
import React, { useState, useEffect } from 'react';
import { Shield, FileText, Bell, Lock } from 'lucide-react';

const TermsOfUsePage = () => {
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
      id: "acceptance",
      icon: <FileText className="w-12 h-12 text-[#ffc83f]" />,
      title: "Acceptance of Terms",
      content: `By accessing and using Medvient's AI-driven transcription, coding, and billing services, 
                you agree to be bound by these Terms of Use. These terms govern your access to and use of 
                our services, including any updates, new features, and capabilities.`
    },
    {
      id: "services",
      icon: <Shield className="w-12 h-12 text-[#ffc83f]" />,
      title: "Service Description",
      content: `Medvient provides AI-powered healthcare documentation services, including automated medical 
                transcription, AI-assisted medical coding, automated billing processing, and revenue cycle 
                management solutions. Our services are designed to enhance healthcare operations while 
                maintaining strict compliance with industry regulations.`
    },
    {
      id: "obligations",
      icon: <Bell className="w-12 h-12 text-[#ffc83f]" />,
      title: "User Obligations",
      content: `Users must ensure all submitted information is accurate and compliant with applicable 
                healthcare regulations. You are responsible for maintaining the confidentiality of your 
                account credentials and for all activities conducted through your account.`
    },
    {
      id: "privacy",
      icon: <Lock className="w-12 h-12 text-[#ffc83f]" />,
      title: "Privacy & Security",
      content: `We implement robust security measures to protect your data and maintain compliance with 
                HIPAA regulations. All data processed through our services must comply with healthcare 
                privacy laws, and users must obtain necessary patient consents.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-[#112d4e] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-light mb-6">
            Terms of Use
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Please read these terms carefully before using our AI-powered healthcare services.
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
          {sections.map((section, index) => (
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
                <div>
                  <h2 className="text-2xl font-semibold text-[#112d4e] mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Last Updated Section */}
        {/* <div className="max-w-4xl mx-auto mt-16 p-8 bg-white rounded-lg shadow-sm text-center">
          <p className="text-gray-600">
            Last updated: February 13, 2025
          </p>
          <button className="mt-6 bg-[#ffc83f] text-[#112d4e] px-8 py-3 rounded-lg hover:bg-[#112d4e] hover:text-[#ffc83f] transition-colors duration-300">
            Download PDF Version
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default TermsOfUsePage;