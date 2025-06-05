'use client';
import React, { useState } from 'react';

const PerfectForSection = () => {
  const [activeCard, setActiveCard] = useState(0);

  const targetAudiences = [
    {
      title: 'Healthcare Providers',
      subtitle: 'Physicians, Nurse Practitioners, PAs',
      description: 'Streamline your clinical documentation and focus more time on patient care with intelligent AI-powered transcription and coding.',
      icon: '👨‍⚕️',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Billing Professionals',
      subtitle: 'Billing specialists & coding professionals',
      description: 'Enhance accuracy and efficiency in your billing processes with automated claim generation and intelligent error detection.',
      icon: '💼',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Practice Administrators',
      subtitle: 'Office managers and revenue cycle managers',
      description: 'Optimize your practice operations with comprehensive analytics and streamlined workflow management tools.',
      icon: '📊',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Patient Portal',
      subtitle: 'Secure access for statements and payments',
      description: 'Provide your patients with a seamless, secure portal for accessing their billing information and making payments.',
      icon: '🏥',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="relative bg-gray-50 min-h-screen w-full overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#ffc83f]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#112d4e]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#112d4e] mb-6 leading-tight">
            Perfect For
          </h2>
          <p className="text-lg lg:text-xl text-[#112d4e]/80 max-w-3xl mx-auto leading-relaxed">
            Medvient is designed to transform workflows across all aspects of healthcare revenue management
          </p>
        </div>

        {/* Desktop View - Grid Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {targetAudiences.map((audience, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#ffc83f]/30 overflow-hidden"
                onMouseEnter={() => setActiveCard(index)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${audience.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {audience.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-[#112d4e] mb-2 group-hover:text-[#112d4e] transition-colors">
                        {audience.title}
                      </h3>
                      <p className="text-sm font-medium text-[#ffc83f] uppercase tracking-wider mb-3">
                        {audience.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-base lg:text-lg text-[#112d4e]/70 leading-relaxed group-hover:text-[#112d4e]/80 transition-colors">
                    {audience.description}
                  </p>

                  {/* Hover Effect Arrow */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center text-[#112d4e] font-medium">
                      <span className="mr-2">Learn More</span>
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View - Card Slider */}
        <div className="lg:hidden">
          <div className="space-y-6">
            {targetAudiences.map((audience, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-3xl">{audience.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#112d4e] mb-1">
                      {audience.title}
                    </h3>
                    <p className="text-sm font-medium text-[#ffc83f] uppercase tracking-wider mb-3">
                      {audience.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-base text-[#112d4e]/70 leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-24">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-light text-[#112d4e] mb-4">
              Ready to Transform Your Practice?
            </h3>
            <p className="text-lg text-[#112d4e]/70 mb-8">
              Experience the future of healthcare revenue cycle management. Let Medvient streamline your workflows so you can focus on what matters most - patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 lg:px-12 py-3 bg-[#112d4e] text-white font-semibold rounded-md hover:opacity-90 transition-opacity text-base lg:text-lg">
                Enroll Today - Contact us to schedule a personalized demonstration
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfectForSection;