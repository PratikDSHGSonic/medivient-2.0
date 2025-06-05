


//AIPowerSection.js
'use client';
import React from 'react';
import Image from 'next/image';

const AIPowerSection = () => {
  const capabilities = [
    {
      title: 'PROVIDER ENCOUNTER & DICTATION',
      description: 'AI-enabled voice recognition'
    },
    {
      title: 'TRANSCRIPTION' ,
      description: 'NLP based error free transcription'
    },
    {
      title: 'CODING',
      description: 'AI automates the extraction and assignment of standardized codes'
    },
    {
      title: 'BILLING',
      description: 'Intelligent algorithms streamlines billing efficiency'
    }
  ];

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#112d4e]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/backgroundBlue1.webp"
          alt="Background Gradient"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative max-h-full max-w-full flex items-center">
        <div className="container mx-auto px-8 py-20 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24">
            {/* Left Side - Main Text */}
            <div className="max-w-2xl mb-12 items-end space-y-8">
              <h2 className="text-2xl lg:text-3xl font-light text-white leading-[200%]">
              Medvient AI revolutionizes the revenue cycle by capturing real-time dictation,  
                <br />
                ensuring swift and accurate transcription,
                <br />
                automating precise coding, and streamlining efficient billing
              </h2>
            </div>

            {/* Right Side - Capabilities List */}
            {/* <div className="space-y-12 items-center">
              {capabilities.map((item, index) => (
                <div key={index}>
                  <h3 className="text-xl lg:text-2xl font-semibold text-white tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-200 font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div> */}
            <div className="space-y-12 max-w-2xl mx-auto">
              {capabilities.map((item, index) => (
                <div key={index}>
                  <h3 className="text-xl lg:text-2xl font-semibold text-white tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-200 font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPowerSection;