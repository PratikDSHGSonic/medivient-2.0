


// //ExploreSection.js
// "use client"
// import { useState } from 'react';
// import styled from 'styled-components';

// const MainContainer = styled.div`
//   .desktop-view {
//     display: block;
//   }
//   .mobile-view {
//     display: none;
//   }
//   @media (max-width: 768px) {
//     .desktop-view {
//       display: none;
//     }
//     .mobile-view {
//       display: block;
//     }
//   }
// `;

// const Section = styled.section`
//   display: flex;
//   background-color: #112d4e;
//   color: #112d4e;
//   min-height: 100vh;
//   padding: 8rem 12rem;
//   gap: 4rem;
//   @media (max-width: 1024px) {
//     padding: 4rem 6rem;
//     gap: 4rem;
//   }
//   @media (max-width: 768px) {
//     flex-direction: column;
//     padding: 4rem 2rem;
//     gap: 3rem;
//   }
//   @media (max-width: 480px) {
//     padding: 2rem 1rem;
//     gap: 0rem;
//   }
// `;

// const MobileSection = styled.div`
//   @media (max-width: 768px) {
//     display: flex;
//     flex-direction: column;
//     gap: 2rem;
//     margin-bottom: 3rem;
//   }
// `;

// const LeftSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 4rem;
//   padding-top: 4rem;
//   flex: 0 0 auto;
//   width: 25%;
//   @media (max-width: 1024px) {
//     width: 30%;
//   }
//   @media (max-width: 768px) {
//     width: 100%;
//     padding-top: 2rem;
//     gap: 0;
//   }
// `;

// const MainTitle = styled.h2`
//   font-size: 1.5rem;
//   font-weight: 400;
//   margin-bottom: 1rem;
//   color: white;
//   @media (max-width: 768px) {
//     font-size: 1.25rem;
//   }
// `;

// const Navigation = styled.nav`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   @media (max-width: 768px) {
//     gap: 0;
//   }
// `;

// const NavButton = styled.button`
//   background: none;
//   border: none;
//   color: ${props => props['data-active'] ? '#ffc83f' : '#fff'};
//   font-size: 1.5rem;
//   text-align: left;
//   padding: 0.5rem 0;
//   cursor: pointer;
//   transition: color 0.3s ease;
//   letter-spacing: 2px;
//   font-weight: ${props => props['data-active'] ? '400' : '600'};
  
//   &:hover {
//     color: ${props => !props['data-active'] && '#ffc83f'};
//   }
//   @media (max-width: 768px) {
//     font-size: 1.25rem;
//     font-weight: 600;
//   }
// `;

// const RightSection = styled.div`
//   flex: 1;
//   position: relative;
//   display: flex;
//   align-items: center;
//   background: white;
//   border-radius: 12px;
//   padding: 4rem;
//   border: 1px solid white;
//   width: 70%;
//   color: #112d4e;
//   @media (max-width: 1024px) {
//     padding: 2rem;
//     width: 60%;
//   }
//   @media (max-width: 768px) {
//     width: 100%;
//     flex-direction: column;
//     gap: 2rem;
//     border: none;
//     padding: 0;
//     background: none;
//     position: relative;
//     color: white;
//   }
// `;

// const Content = styled.div`
//   width: 100%;
//   @media (max-width: 768px) {
//     order: 1;
//   }
// `;

// const ContentTitle = styled.h3`
//   font-size: 1.5rem;
//   font-weight: 400;
//   margin-bottom: 3rem;
//   line-height: 1.2;
//   @media (max-width: 768px) {
//     font-size: 1.25rem;
//     margin-bottom: 2rem;
//     color: white;
//   }
// `;

// const LearnMoreButton = styled.button`
//   background: #ffc83f;
//   border: 1px solid rgba(255, 255, 255, 0.3);
//   color: #112d4e;
//   padding: 0.5rem 3rem;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   letter-spacing: 1px;
//   font-size: 0.9rem;
//   &:hover {
//     background: #112d4e;
//     color: #ffc83f;
//   }
//   @media (max-width: 768px) {
//     position: absolute;
//     z-index: 2;
//     padding: 0.5rem 2rem;
//     font-size: 0.8rem;
//   }
//   @media (max-width: 480px) {
//     padding: 0.5rem 1.5rem;
//   }
// `;

// const ExploreSection = () => {
//   const [activeSection, setActiveSection] = useState('Physician Practices & Clinics');

//   const sections = [
//     {
//       id: 'Physician Practices & Clinics',
//       title: 'Physician Practices & Clinics',
//       content: "AI optimizes dictation, transcription, coding, and billing, enabling small and large practices to improve efficiency and reduce administrative overhead."
//     },
//     {
//       id: 'Hospitals & Health Systems',
//       title: 'Hospitals & Health Systems',
//       content: "Large health organizations benefit from streamlined revenue cycles, improved documentation accuracy, and faster claim processing."
//     },
//     {
//       id: 'Ambulatory Surgical Centers & Outpatient Facilities',
//       title: 'Ambulatory Surgical Centers & Outpatient Facilities',
//       content: "These facilities experience accelerated workflows and enhanced compliance, reducing claim rejections and delays."
//     },
//     {
//       id: 'Revenue Cycle Management Service Providers',
//       title: 'Revenue Cycle Management Service Providers',
//       content: "Third-party billing and coding companies leverage AI to boost operational efficiency, ensuring accurate and timely reimbursements for their clients."
//     }
//   ];

//   const DesktopView = () => (
//     <Section>
//       <LeftSection>
//         <MainTitle>Who can Medvient help?</MainTitle>
//         <Navigation>
//           {sections.map(section => (
//             <NavButton
//               key={section.id}
//               data-active={activeSection === section.id}
//               onClick={() => setActiveSection(section.id)}
//             >
//               {section.title}
//             </NavButton>
//           ))}
//         </Navigation>
//       </LeftSection>
//       <RightSection>
//         <Content>
//           <ContentTitle>
//             {sections.find(section => section.id === activeSection).content}
//           </ContentTitle>
//         </Content>
//       </RightSection>
//     </Section>
//   );

//   const MobileView = () => (
//     <Section>
//       <MainTitle>Explore Medvient</MainTitle>
//       {sections.map(section => (
//         <MobileSection key={section.id}>
//           <NavButton data-active={true}>
//             {section.title}
//           </NavButton>
//           <RightSection>
//             <Content>
//               <ContentTitle>{section.content}</ContentTitle>
//             </Content>
//           </RightSection>
//         </MobileSection>
//       ))}
//     </Section>
//   );

//   return (
//     <MainContainer>
//       <div className="desktop-view">
//         <DesktopView />
//       </div>
//       <div className="mobile-view">
//         <MobileView />
//       </div>
//     </MainContainer>
//   );
// };

// export default ExploreSection;





"use client"
import { useState } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: #112d4e;
  min-height: 100vh;
  padding: 4rem 0;
  
  .desktop-view {
    display: block;
  }
  .mobile-view {
    display: none;
  }
  @media (max-width: 768px) {
    .desktop-view {
      display: none;
    }
    .mobile-view {
      display: block;
    }
  }
`;

// First Row - Heading Section
const HeaderSection = styled.div`
  padding: 2rem 12rem;
  margin-bottom: 3rem;
  
  @media (max-width: 1024px) {
    padding: 2rem 6rem;
  }
  @media (max-width: 768px) {
    padding: 2rem 2rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const MainTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: white;
  text-align: center;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

// Second Row - Content Section
const ContentSection = styled.div`
  display: flex;
  padding: 0 12rem;
  gap: 4rem;
  align-items: center;
  min-height: 60vh;
  
  @media (max-width: 1024px) {
    padding: 0 6rem;
    gap: 3rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 2rem;
    gap: 2rem;
    align-items: stretch;
  }
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

// Left Column - Navigation
const NavigationColumn = styled.div`
  flex: 0 0 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex: none;
    width: 100%;
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: ${props => props['data-active'] ? '#ffc83f' : '#fff'};
  font-size: 1.2rem;
  text-align: left;
  padding: 1.2rem 0;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  font-weight: ${props => props['data-active'] ? '500' : '400'};
  line-height: 1.4;
  border-radius: 8px;
  
  &:hover {
    color: ${props => !props['data-active'] && '#ffc83f'};
    padding-left: 0.5rem;
    transform: translateX(8px);
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1rem 0;
    text-align: center;
  }
`;

// Right Column - Content Box
const ContentColumn = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContentBox = styled.div`
  background: white;
  border-radius: 16px;
  padding: 3rem;
  color: #112d4e;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  
  @media (max-width: 1024px) {
    padding: 2.5rem;
  }
  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }
`;

const ContentTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: #112d4e;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;

const LearnMoreButton = styled.button`
  background: #ffc83f;
  border: 1px solid rgba(255, 200, 63, 0.3);
  color: #112d4e;
  padding: 0.75rem 2.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 8px;
  margin-top: 1.5rem;
  
  &:hover {
    background: #112d4e;
    color: #ffc83f;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 2rem;
    font-size: 0.9rem;
    margin-top: 1rem;
    width: 100%;
  }
`;

// Mobile specific styles
const MobileSection = styled.div`
  padding: 0 2rem;
  
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const MobileContentItem = styled.div`
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const MobileNavButton = styled(NavButton)`
  text-align: center;
  color: #ffc83f;
  font-weight: 500;
  margin-bottom: 1rem;
  padding: 1rem 0;
  border-bottom: 2px solid rgba(255, 200, 63, 0.3);
`;

const ExploreSection = () => {
  const [activeSection, setActiveSection] = useState('Physician Practices & Clinics');

  const sections = [
    {
      id: 'Physician Practices & Clinics',
      title: 'Physician Practices & Clinics',
      content: "AI optimizes dictation, transcription, coding, and billing, enabling small and large practices to improve efficiency and reduce administrative overhead."
    },
    {
      id: 'Hospitals & Health Systems',
      title: 'Hospitals & Health Systems',
      content: "Large health organizations benefit from streamlined revenue cycles, improved documentation accuracy, and faster claim processing."
    },
    {
      id: 'Ambulatory Surgical Centers & Outpatient Facilities',
      title: 'Ambulatory Surgical Centers & Outpatient Facilities',
      content: "These facilities experience accelerated workflows and enhanced compliance, reducing claim rejections and delays."
    },
    {
      id: 'Revenue Cycle Management Service Providers',
      title: 'Revenue Cycle Management Service Providers',
      content: "Third-party billing and coding companies leverage AI to boost operational efficiency, ensuring accurate and timely reimbursements for their clients."
    }
  ];

  const DesktopView = () => (
    <>
      {/* First Row - Heading */}
      <HeaderSection>
        <MainTitle>Who can Medvient help?</MainTitle>
      </HeaderSection>
      
      {/* Second Row - Navigation and Content */}
      <ContentSection>
        {/* Left Column - Navigation */}
        <NavigationColumn>
          <Navigation>
            {sections.map(section => (
              <NavButton
                key={section.id}
                data-active={activeSection === section.id}
                onClick={() => setActiveSection(section.id)}
              >
                {section.title}
              </NavButton>
            ))}
          </Navigation>
        </NavigationColumn>
        
        {/* Right Column - Content Box */}
        <ContentColumn>
          <ContentBox>
            <ContentTitle>
              {sections.find(section => section.id === activeSection).content}
            </ContentTitle>
            <LearnMoreButton>
              Learn More
            </LearnMoreButton>
          </ContentBox>
        </ContentColumn>
      </ContentSection>
    </>
  );

  const MobileView = () => (
    <MobileSection>
      <HeaderSection>
        <MainTitle>Who can Medvient help?</MainTitle>
      </HeaderSection>
      
      {sections.map(section => (
        <MobileContentItem key={section.id}>
          <MobileNavButton>
            {section.title}
          </MobileNavButton>
          <ContentBox>
            <ContentTitle>{section.content}</ContentTitle>
            <LearnMoreButton>
              Learn More
            </LearnMoreButton>
          </ContentBox>
        </MobileContentItem>
      ))}
    </MobileSection>
  );

  return (
    <MainContainer>
      <div className="desktop-view">
        <DesktopView />
      </div>
      <div className="mobile-view">
        <MobileView />
      </div>
    </MainContainer>
  );
};

export default ExploreSection;