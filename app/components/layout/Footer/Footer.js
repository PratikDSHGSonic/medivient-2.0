



// Footer.js
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* <div className={styles.container}>
        <div className={styles.leftSection}>
          <button className={styles.button}>ORDER A TEST</button>
          <button className={styles.button}>LOG IN</button>
          <button className={`${styles.button} ${styles.contactButton}`}>
            CONTACT US
          </button>
          
          <div className={styles.socialIcons}>

            <Link href="#" className={styles.socialIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </Link>

            <Link href="#" className={styles.socialIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>

  
            <Link href="#" className={styles.socialIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </Link>


            <Link href="#" className={styles.socialIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </Link>
          </div>
        </div>

      
        <div className={styles.rightSection}>
          <div className={styles.mainLinks}>
            <div className={styles.linkColumn}>
              <h3>PROVIDERS</h3>
              <ul className={styles.linkList}>
                <li><Link href="#">Oncology</Link></li>
                <li><Link href="#">Neurology & Psychiatry</Link></li>
                <li><Link href="#">Cardiology</Link></li>
                <li><Link href="#">Dermatology</Link></li>
                <li><Link href="#">Radiology</Link></li>
                <li><Link href="#">Academic & Research Centers</Link></li>
                <li><Link href="#">EHR Integration</Link></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3>LIFE SCIENCES</h3>
              <ul className={styles.linkList}>
                <li><Link href="#">Life Sciences Overview</Link></li>
                <li><Link href="#">Sequencing</Link></li>
                <li><Link href="#">Data Collaborations</Link></li>
                <li><Link href="#">Biological Modeling</Link></li>
                <li><Link href="#">Companion Diagnostics</Link></li>
                <li><Link href="#">Omics Solutions</Link></li>
                <li><Link href="#">Clinical Trials Execution</Link></li>
                <li><Link href="#">Clinical Trials Enrollment</Link></li>
                <li><Link href="#">CRO Services</Link></li>
                <li><Link href="#">Care Gap Solutions</Link></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3>PATIENTS</h3>
              <ul className={styles.linkList}>
                <li><Link href="#">Patients Overview</Link></li>
                <li><Link href="#">Oncology</Link></li>
                <li><Link href="#">Clinical Trials</Link></li>
                <li><Link href="#">Neurology & Psychiatry</Link></li>
              </ul>
            </div>
          </div>

          <div className={styles.secondaryLinks}>
            <div className={styles.linkColumn}>
              <h3>RESOURCES</h3>
              <ul className={styles.linkList}>
                <li><Link href="#">Publications</Link></li>
                <li><Link href="#">Content</Link></li>
                <li><Link href="#">Events</Link></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3>ABOUT US</h3>
              <ul className={styles.linkList}>
                <li><Link href="#">Our History</Link></li>
                <li><Link href="#">Our Technology</Link></li>
                <li><Link href="#">Our Team</Link></li>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="#">Culture</Link></li>
                <li><Link href="#">News</Link></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3>HOMEPAGE</h3>
              <ul className={styles.linkList}>
                <li><Link href="#">Responsible Disclosure</Link></li>
                <li><Link href="#">FAQ</Link></li>
                <li><Link href="#">Media Library</Link></li>
                <li><Link href="#">Document Library</Link></li>
                <li><Link href="#">Investors</Link></li>
              </ul>
            </div>
          </div>
        </div>

        
        <div className={styles.mobileOnlyLinks}>
          <ul className={styles.linkList}>
            <li><Link href="#">Homepage</Link></li>
            <li><Link href="#">Responsible Disclosure</Link></li>
            <li><Link href="#">FAQ</Link></li>
            <li><Link href="#">Media Library</Link></li>
            <li><Link href="#">Document Library</Link></li>
            <li><Link href="#">Investors</Link></li>
          </ul>
        </div>
      </div> */}

      
      <div className={styles.bottomSection}>
        <div className={styles.bottomContainer}>
          <div className={styles.logo}>
            <Image src="/Alternate Logo Option for White Background.png" width={120} height={24} alt="Medvient" />
          </div>
          <div className={styles.bottomLinks}>
            <span>All Content Copyright 2025</span>
            <span className={styles.separator}>|</span>
            <Link href="/privacy-policy">Privacy and Compliance Policies</Link>
            <span className={styles.separator}>|</span>
            <Link href="/terms-of-use">Terms of Use</Link>
            {/* <span className={styles.separator}>|</span>
            <Link href="#">Cookies Settings</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;