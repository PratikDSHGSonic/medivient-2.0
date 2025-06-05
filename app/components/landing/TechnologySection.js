// 'use client';
// import React from 'react';
// import Image from 'next/image';


// const TechnologySection = () => {
//   const technologies = [
//     {
//       title: 'ACCURATE',
//       description: 'AI enabled recording reducing errors and ensuring reliable records'
//     },
//     {
//       title: 'AUTOMATED',
//       description: 'Automated transcription accelerates record availability for downstream processes'
//     },
//     {
//       title: 'PRECISION',
//       description: 'Intelligent coding algorithms enhance accuracy in code assignment ensuring compliance'
//     },
//     {
//       title: 'EFFICIENT',
//       description: 'AI-driven billing streamlines claim submissions and payment processing'
//     }
//   ];

//   return (


//     <div className="bg-white min-h-screen w-full flex items-center py-20">
//       <div className="container mx-auto px-4 md:px-6">
//         {/* Main Title - Centered */}
//         {/* Main Title - Left-aligned on mobile, centered on larger screens */}
//         <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-16 text-left md:text-center max-w-4xl mx-auto">
//           Discover our innovative technology
//         </h2>

//         {/* Content Grid - Centered */}
//         <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
//           {/* Left Column - Technology List */}
//           <div className="space-y-6">
//             {technologies.map((tech, index) => (
//               <div
//                 key={index}
//                 className="bg-[#112d4e] w-full max-w-[400px] from-gray-900 to-gray-800 
//                       rounded-lg p-6 hover:from-gray-800 hover:to-gray-700 
//                       transition-all duration-300 cursor-pointer"
//               >
//                 <h3 className="text-xl font-bold text-white mb-2">
//                   {tech.title}
//                 </h3>
//                 <p className="text-gray-300 text-base">
//                   {tech.description}
//                 </p>
//               </div>
//             ))}

//             {/* Explore Link */}

//           </div>

//           {/* Right Column - Image */}
//           <div className="relative h-full p-4 bg-[#112d4e]">
//             {/* Main Image Container - Height matches cards */}
//             <div className="relative h-full"> {/* Subtracting height of white box */}
//               <Image
//                 src="/section3.jpg"
//                 alt="Technology Preview"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default TechnologySection;



//TechnologySection.js
'use client';
import React from 'react';
import Image from 'next/image';

const TechnologySection = () => {
  const technologies = [
    {
      title: 'ACCURATE',
      description: 'AI enabled recording reducing errors and ensuring reliable records'
    },
    {
      title: 'AUTOMATED',
      description: 'Automated transcription accelerates record availability for downstream processes'
    },
    {
      title: 'PRECISION',
      description: 'Intelligent coding algorithms enhance accuracy in code assignment ensuring compliance'
    },
    {
      title: 'EFFICIENT',
      description: 'AI-driven billing streamlines claim submissions and payment processing'
    }
  ];

  return (
    <div className="bg-white min-h-screen w-full flex items-center py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-16 text-left md:text-center max-w-4xl mx-auto">
          Discover our innovative technology
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column - Technology List */}
          <div className="space-y-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-[#112d4e] w-full max-w-[400px] from-gray-900 to-gray-800 
                      rounded-lg p-6 hover:from-gray-800 hover:to-gray-700 
                      transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {tech.title}
                </h3>
                <p className="text-gray-300 text-base">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column - Image - Hidden on mobile, visible from md breakpoint up */}
          <div className="hidden md:block relative h-full p-4 bg-[#112d4e]">
            <div className="relative h-full">
              <Image
                src="/section3.jpg"
                alt="Technology Preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;