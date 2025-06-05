

// 'use client'
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import NavDropdown from './NavDropdown';
// import MobileMenu from './MobileMenu';
// import { NAV_LINKS, AUTH_LINKS } from '@/utils/constants/navigation';
// import styles from '../../Footer.module.css';
// import Image from 'next/image';

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Handle scroll event
//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 0;
//       setScrolled(isScrolled);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

// const logoUrl = "https://dshgsonic.com/wp-content/uploads/2022/10/dshg-logo1.png"

//   return (
//     <>
//       <header
//         className={`w-full fixed top-0 left-0 right-0 transition-all duration-300 z-50 bg-white` }
//       >
//         <nav className="max-w-full mx-auto px-6 h-[72px] flex items-center justify-between ">
//           {/* Logo with left alignment */}
//           <div className="flex items-center space-x-12">
//             {/* <Link href="/" className="flex items-center">
//               <span className="text-2xl font-bold tracking-tighter">Medvient</span>
//             </Link> */}
//             <div className={styles.logo}>
//               <Image src="/Logo Name Only Navy.png" width={200} height={80} alt="Medvient" />
//             </div>

//             {/* Main Navigation - Hidden on mobile */}
//             {/* <div className="hidden lg:flex items-center space-x-8">
//               {NAV_LINKS.map((link) => (
//                 <NavDropdown key={link.path} link={link} />
//               ))}
//             </div> */}
//           </div>

//           {/* Auth Buttons - Hidden on mobile */}
//           {/* <div className="hidden lg:flex items-center space-x-4">
//             {AUTH_LINKS.map((link) => (
//               <Link
//                 key={link.path}
//                 href={link.path}
//                 className={`px-4 py-[6px] text-[14px] font-medium rounded
//                   ${link.variant === 'primary'
//                     ? 'bg-blue-600 text-white hover:bg-blue-700'
//                     : 'border border-gray-300 text-gray-800 hover:bg-gray-50'
//                   }`}
//               >
//                 {link.title}
//               </Link>
//             ))}
//           </div> */}

//           {/* Mobile Menu Button - Visible only on mobile */}
//           {/* <button
//             className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
//             onClick={toggleMobileMenu}
//             aria-label="Toggle mobile menu"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button> */}
//         </nav>
//       </header>

//       {/* Mobile Menu Component */}
//       <MobileMenu
//         isOpen={isMobileMenuOpen}
//         onClose={() => setIsMobileMenuOpen(false)}
//       />
//     </>
//   );
// };

// export default Navbar;





// 'use client'
// import { useState, useEffect } from 'react';
// import MobileMenu from './MobileMenu';
// import styles from '../../Footer.module.css';

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 0;
//       setScrolled(isScrolled);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <header
//         className={`w-full fixed top-0 left-0 right-0 transition-all duration-300 z-50 
//           ${scrolled ? 'bg-white/80 backdrop-blur-sm' : 'bg-white'}`}
//       >
//         <nav className="max-w-full h-[72px] flex items-center justify-between ">
//           <div className="flex items-center space-x-6 sm:space-x-8 md:space-x-12">
//             <div className="relative flex items-center h-full">
//               <img 
//                 src="/Logo Name Only Navy.png" 
//                 alt="Medvient"
//                 className="h-[150px] sm:h-[100px] md:h-[150px] lg:h-[200px] xl:h-[200px] w-auto"
//                 style={{
//                   transform: scrolled ? 'scale(0.9)' : 'scale(1)',
//                   transition: 'all 0.3s ease'
//                 }}
//               />
//             </div>
//           </div>
//         </nav>
//       </header>

//       <MobileMenu
//         isOpen={isMobileMenuOpen}
//         onClose={() => setIsMobileMenuOpen(false)}
//       />
//     </>
//   );
// };

// export default Navbar;
'use client'
import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';
import styles from '../Footer/Footer.module.css';
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full h-[72px] fixed top-0 left-0 right-0 transition-all duration-300 z-50 
          ${scrolled ? 'bg-white/80 backdrop-blur-sm' : 'bg-white'}`}
      >
        <nav className="max-w-full max-h-full flex items-center align-center justify-between mt-3">
          {/* <div className="flex items-center space-x-12 h-full"> */}
          <div className="h-[72px] flex items-center">
            {/* <img 
              src="/Logo Name Only Navy.png" 
              alt="Medvient"
              className="h-[150px] sm:h-[100px] md:h-[150px] lg:h-[200px] xl:h-[200px] w-auto"
              style={{
                transform: scrolled ? 'scale(0.9)' : 'scale(1)',
                transition: 'all 0.3s ease'
              }}
            /> */}

            <Link href="/">
              <img
                src="/Logo Name Only Navy.png"
                alt="Medvient"
                className="h-[150px] sm:h-[100px] md:h-[150px] lg:h-[200px] xl:h-[200px] w-auto cursor-pointer"
                style={{
                  transform: scrolled ? "scale(0.9)" : "scale(1)",
                  transition: "all 0.3s ease",
                }}
              />
            </Link>
          </div>
          {/* </div> */}
        </nav>
      </header>
{/* 
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      /> */}
    </>
  );
};

export default Navbar;