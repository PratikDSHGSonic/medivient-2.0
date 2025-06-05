'use client';
import React from 'react';

const KeyBenefitsSection = () => {
  const benefits = [
    {
      title: 'Reduce Administrative Burden',
      description: 'Automate coding, billing, and documentation tasks',
      icon: '⚡'
    },
    {
      title: 'Improve Accuracy',
      description: 'AI validation reduces errors and claim denials',
      icon: '🎯'
    },
    {
      title: 'Accelerate Revenue',
      description: 'Faster processing and payment posting',
      icon: '🚀'
    },
    {
      title: 'Ensure Compliance',
      description: 'Built-in HIPAA compliance and audit trails',
      icon: '🛡️'
    }
  ];

  return (
    <div className="relative bg-[#112d4e] min-h-screen w-full overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#112d4e] via-[#1a3a5c] to-[#112d4e] opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Side - Main Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                Key Benefits
              </h2>
              <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl">
                Transform your healthcare revenue cycle with AI-powered automation that delivers 
                measurable results and operational excellence.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex-shrink-0 text-2xl">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2 tracking-wide">
                      {benefit.title}
                    </h3>
                    <p className="text-base lg:text-lg text-gray-200 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#ffc83f]/20 to-[#ffc83f]/5 rounded-2xl p-8 lg:p-12 backdrop-blur-sm border border-[#ffc83f]/20">
              <div className="text-center space-y-6">
                <div className="text-6xl lg:text-8xl">📈</div>
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-semibold text-white">
                    Save Time, Reduce Errors, and Get Paid Faster
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    with Medvient's AI Powered Revenue Platform
                  </p>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-4 bg-white/10 rounded-xl">
                    <div className="text-2xl lg:text-3xl font-bold text-[#ffc83f] mb-1">
                      80%
                    </div>
                    <div className="text-sm text-gray-200">
                      Time Saved
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl">
                    <div className="text-2xl lg:text-3xl font-bold text-[#ffc83f] mb-1">
                      95%
                    </div>
                    <div className="text-sm text-gray-200">
                      Accuracy Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyBenefitsSection;