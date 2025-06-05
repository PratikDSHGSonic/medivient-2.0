


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
//   background-color: #000;
//   color: #fff;
//   min-height: 100vh;
//   padding: 8rem 12rem;
//   gap: 8rem;
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
//   @media (max-width: 768px) {
//     padding-top: 2rem;
//     gap: 0;
//   }
// `;
// const MainTitle = styled.h2`
//   font-size: 1.5rem;
//   font-weight: 400;
//   margin-bottom: 1rem;
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
//   color: ${props => props['data-active'] ? '#007bff' : '#fff'};
//   font-size: 1.5rem;
//   text-align: left;
//   padding: 0.5rem 0;
//   cursor: pointer;
//   transition: color 0.3s ease;
//   letter-spacing: 2px;
//   font-weight: ${props => props['data-active'] ? '400' : '600'};

//   &:hover {
//     color: ${props => !props['data-active'] && '#007bff'};
//   }
//   @media (max-width: 768px) {
//     font-size: 1.25rem;
//     color: #007bff;
//     font-weight: 600;
//   }
// `;
// const RightSection = styled.div`
//   flex: 2;
//   position: relative;
//   display: flex;
//   align-items: center;
//   background: rgba(255, 255, 255, 0.02);
//   border-radius: 12px;
//   padding: 4rem;
//   border: 1px solid white;
//   @media (max-width: 1024px) {
//     padding: 2rem;
//   }
//   @media (max-width: 768px) {
//     flex-direction: column;
//     gap: 2rem;
//     border: none;
//     padding: 0;
//     background: none;
//     position: relative;
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
//   }
// `;
// const LearnMoreButton = styled.button`
//   background: none;
//   border: 1px solid rgba(255, 255, 255, 0.3);
//   color: #fff;
//   padding: 0.5rem 3rem;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   letter-spacing: 1px;
//   font-size: 0.9rem;
//   &:hover {
//     background: rgba(255, 255, 255, 0.3);
//     color: #000;
//   }
//   @media (max-width: 768px) {
//     position: absolute;
//     bottom: 20px;
//     left: 20px;
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
//           <LearnMoreButton>LEARN MORE</LearnMoreButton>
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
//               <LearnMoreButton>LEARN MORE</LearnMoreButton>
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
//     color: #007bff;
//     font-weight: 600;
//   }
// `;
// const RightSection = styled.div`
// flex: 1;
//   position: relative;
//   display: flex;
//   align-items: center;
//   background: white;
//   border-radius: 12px;
//   padding: 4rem;
//   border: 1px solid white;
//   width: 70%;
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
//           {/* <LearnMoreButton>LEARN MORE</LearnMoreButton> */}
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




//ExploreSection.js
"use client"
import { useState } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
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

const Section = styled.section`
  display: flex;
  background-color: #112d4e;
  color: #112d4e;
  min-height: 100vh;
  padding: 8rem 12rem;
  gap: 4rem;
  @media (max-width: 1024px) {
    padding: 4rem 6rem;
    gap: 4rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 4rem 2rem;
    gap: 3rem;
  }
  @media (max-width: 480px) {
    padding: 2rem 1rem;
    gap: 0rem;
  }
`;

const MobileSection = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 3rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-top: 4rem;
  flex: 0 0 auto;
  width: 25%;
  @media (max-width: 1024px) {
    width: 30%;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 2rem;
    gap: 0;
  }
`;

const MainTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: white;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 768px) {
    gap: 0;
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: ${props => props['data-active'] ? '#ffc83f' : '#fff'};
  font-size: 1.5rem;
  text-align: left;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: color 0.3s ease;
  letter-spacing: 2px;
  font-weight: ${props => props['data-active'] ? '400' : '600'};
  
  &:hover {
    color: ${props => !props['data-active'] && '#ffc83f'};
  }
  @media (max-width: 768px) {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

const RightSection = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 4rem;
  border: 1px solid white;
  width: 70%;
  color: #112d4e;
  @media (max-width: 1024px) {
    padding: 2rem;
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 2rem;
    border: none;
    padding: 0;
    background: none;
    position: relative;
    color: white;
  }
`;

const Content = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    order: 1;
  }
`;

const ContentTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 3rem;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: white;
  }
`;

const LearnMoreButton = styled.button`
  background: #ffc83f;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #112d4e;
  padding: 0.5rem 3rem;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  font-size: 0.9rem;
  &:hover {
    background: #112d4e;
    color: #ffc83f;
  }
  @media (max-width: 768px) {
    position: absolute;
    z-index: 2;
    padding: 0.5rem 2rem;
    font-size: 0.8rem;
  }
  @media (max-width: 480px) {
    padding: 0.5rem 1.5rem;
  }
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
    <Section>
      <LeftSection>
        <MainTitle>Who can Medvient help?</MainTitle>
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
      </LeftSection>
      <RightSection>
        <Content>
          <ContentTitle>
            {sections.find(section => section.id === activeSection).content}
          </ContentTitle>
        </Content>
      </RightSection>
    </Section>
  );

  const MobileView = () => (
    <Section>
      <MainTitle>Explore Medvient</MainTitle>
      {sections.map(section => (
        <MobileSection key={section.id}>
          <NavButton data-active={true}>
            {section.title}
          </NavButton>
          <RightSection>
            <Content>
              <ContentTitle>{section.content}</ContentTitle>
            </Content>
          </RightSection>
        </MobileSection>
      ))}
    </Section>
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