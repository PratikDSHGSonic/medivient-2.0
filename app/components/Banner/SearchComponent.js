


//searchComponent.js
'use client'
import React, { useState } from 'react';
import WaitlistModal from './WaitlistModal';

const SearchComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative bg-white min-h-screen w-full overflow-hidden">
      {/* Mobile Golden Globe Image */}
      <div className="md:hidden absolute left-[30%] top-[60%] transform -translate-x-1/2 -translate-y-1/2 w-[180vw] h-[180vw]">
        <img 
          src="/GoldenGlob.png"
          alt="Golden Globe"
          className="w-full h-full object-contain opacity-50"
        />
      </div>

      {/* Desktop Background Image */}
      <div
        className="hidden md:block absolute right-0 top-0 w-full h-full z-0"
        style={{
          backgroundImage: 'url("/GoldenGlob.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen md:flex md:items-center">
        {/* Left Content */}
        <div className="w-full lg:w-3/6 space-y-4 md:space-y-6 pt-16 md:transform md:-translate-y-16">
          <h1 className="font-staff font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-[#112d4e]">
            AI Driven Transcription, Coding and Billing.
          </h1>

          <p className="font-normal text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wide max-w-xl line-clamp-4 text-[#112d4e]/80">
            At Medvient, we harness AI to optimize your transcription, coding, and billing processes—streamlining your revenue cycle so you can focus on advancing your organization's mission.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-6 md:px-10 py-2 bg-[#ffc83f] text-[#112d4e] font-semibold rounded-md hover:opacity-90 transition-opacity text-sm md:text-base"
            >
              Join waitlist
            </button>
          </div>
        </div>
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default SearchComponent;


