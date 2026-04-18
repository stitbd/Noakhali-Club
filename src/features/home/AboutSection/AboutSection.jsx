import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './AboutSection.module.scss';

// 👇 IMPORT YOUR LOCAL IMAGES HERE
import imgMain from "../../../assets/about-main.jpg";
import imgSmall1 from "../../../assets/about-small-1.jpg";
import member1 from "../../../assets/committee/president.jpg";
import member2 from "../../../assets/committee/02.jpg";
import member3 from "../../../assets/committee/03.jpg";

const AboutSection = () => (
  <section className={styles.about}>
    <Container>
      <Row className="g-0 align-items-center">

        {/* ── Left: Image Collage ──────────────────────── */}
        <Col lg={6}>
          <div className={styles.imageGrid}>

            {/* Large top-left image */}
            <div className={`${styles.imgBox} ${styles['imgBox--large']}`}>
              <img src={imgMain} alt="Dhaka Boat Club waterfront view" />
            </div>

            {/* Small top-right image */}
            <div className={`${styles.imgBox} ${styles['imgBox--small']}`}>
              <img src={imgSmall1} alt="Club facilities and dining" />
            </div>

            {/* Badge: bottom-left, overlapping both images */}
            <div className={styles.badge}>
              <div className={styles.badgeLeft}>
                <span className={styles.badgeYear}>12 Years of</span>
                <span className={styles.badgeText}>Pure Legacy</span>
              </div>

              <div className={styles.badgeDivider} />

              <div className={styles.badgeRight}>
                <div className={styles.memberAvatars}>
                  <img src={member1} alt="Member" />
                  <img src={member2} alt="Member" />
                  <img src={member3} alt="Member" />
                  <span className={styles.memberCountBubble}>+1200</span>
                </div>
                <span className={styles.membersLabel}>of Members</span>
              </div>
            </div>

          </div>
        </Col>

        {/* ── Right: Content Card ──────────────────────── */}
        <Col lg={6}>
          <div className={styles.content}>

            <div className={styles.estText}>
              <span>Est. 2017</span>
            </div>

            <h2 className={styles.title}>
              <span className={styles.titlePart1}>OUR</span>
              <span className={styles.titlePart2}>STORY</span>
            </h2>

            <p className={styles.description}>
              Built on the belief that meaningful change begins with strong relationships, 
              the Club serves as a hub for members striving to grow personally, socially, and intellectually.
            </p>

            <p className={styles.description}>
              Welcome to Noakhali Club Dhaka Ltd (NCDL), the capital's premier social hub for the Noakhali community. 
              Established in 2017, our club offers a unique blend of cultural heritage and modern recreation, 
              providing members with top-tier facilities including tennis, squash, and billiards in a sophisticated environment.
            </p>

            <p className={styles.description}>
              More than just a sports center, NCDL is a vibrant community where families connect and lifelong friendships are forged. 
              We are dedicated to celebrating our shared milestones and keeping members updated on exclusive events, 
              relying on your active participation to help our journey continue to flourish.
            </p>

            <Link to="/legacy" className={styles.legacyLink}>
              Our Legacy
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>

          </div>
        </Col>

      </Row>
    </Container>
  </section>
);

export default AboutSection;