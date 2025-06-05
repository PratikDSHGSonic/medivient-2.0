'use client';
import React from 'react';
import Image from 'next/image';

const CoreFeaturesSection = () => {
  const features = [
    {
      icon: '📋',
      title: 'Smart Documentation',
      description: 'AI powered audio transcription converts voice recordings into structured Soap notes with intelligent medical coding.'
    },
    {
      icon: '🔍',
      title: 'Intelligent Claims',
      description: 'Automated claim generation, validation, and real-time tracking with clearinghouse integration.'
    },
    {
      icon: '💰',
      title: 'Revenue Analytics',
      description: 'Comprehensive payment management, denial workflows, and real-time finance reporting.'
    },
    {
      icon: '🤖',
      title: 'AI-Powered Features',
      description: 'Natural language queries, intelligent coding suggestions, and revenue optimization.'
    },
    {
      icon: '🔒',
      title: 'HIPAA Compliance',
      description: 'Enterprise-grade security with multi-factor authentication and audit logging.'
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Real-time dashboards, provider performance tracking, and custom reporting.'
    }
  ];

  return (
    <div className="relative bg-white min-h-screen w-full overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#112d4e] to-[#ffc83f]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#112d4e] mb-6 leading-tight">
            Core Features
          </h2>
          <p className="text-lg lg:text-xl text-[#112d4e]/80 max-w-3xl mx-auto leading-relaxed">
            Streamline medical transcription, coding, billing, and revenue management 
            while ensuring HIPAA compliance and maximizing efficiency
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#ffc83f]/30"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-semibold text-[#112d4e] mb-3 tracking-wide">
                {feature.title}
              </h3>
              
              <p className="text-base lg:text-lg text-[#112d4e]/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 lg:mt-24">
          <div className="bg-[#112d4e] rounded-xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-light text-white mb-4">
              TRY MEDVIENT FOR FREE
            </h3>
            <p className="text-lg text-[#ffc83f] mb-6">
              Be among the first to experience Medvient at no cost – limited slots available!
            </p>
            <button className="px-8 lg:px-12 py-3 bg-[#ffc83f] text-[#112d4e] font-semibold rounded-md hover:opacity-90 transition-opacity text-base lg:text-lg">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreFeaturesSection;