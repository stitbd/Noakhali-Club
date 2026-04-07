import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppButton from '../../../components/common/AppButton';
import SectionHeader from '../../../components/common/SectionHeader';
import styles from './AboutSection.module.scss';

// 👇 IMPORT YOUR LOCAL IMAGES HERE
import imgMain from "../../../assets/about-main.jpg";
import imgSmall1 from "../../../assets/about-small-1.jpg";
import imgSmall2 from "../../../assets/about-small-2.jpg";

const PILLARS = [
  { icon: '🏆', title: 'Sporting Excellence', desc: 'Nurturing champions in rowing, swimming, polo, and water sports.' },
  { icon: '🤝', title: 'Community & Bonds',   desc: 'A family of 5,000+ members united by shared passions and values.' },
  { icon: '⚓', title: 'Maritime Heritage',   desc: "Preserving Bangladesh's proud traditions of river culture and seamanship." },
  { icon: '🌟', title: 'Modern Amenities',    desc: 'World-class facilities continuously upgraded to meet global standards.' },
];

const AboutSection = () => (
  <section className={styles.about}>
    <Container>
      <Row className="g-5 align-items-center">
        {/* ── Left: Image Collage ──────────────────────── */}
        <Col lg={5}>
          <div className={styles.imageGrid}>
            <div className={`${styles.imgBox} ${styles['imgBox--large']}`}>
              <img src={imgMain} alt="Club on the Dhaka" />
            </div>
            <div className={`${styles.imgBox} ${styles['imgBox--small']}`}>
              <img src={imgSmall1} alt="Sporting Activity" />
            </div>
            <div className={`${styles.imgBox} ${styles['imgBox--small2']}`}>
              <img src={imgSmall2} alt="Rowing Heritage" />
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeYear}>2017</span>
              <span className={styles.badgeText}>Est.</span>
            </div>
          </div>
        </Col>

        {/* ── Right: Content ───────────────────────────── */}
        <Col lg={7}>
          <SectionHeader
            subtitle="Our Story"
            title="A Club Built for a Better Society"
            description="Built on the belief that meaningful change begins with strong relationships, the Club serves as a hub for members striving to grow personally, socially, and intellectually."
            variant="light" // 👈 Ensures dark text for the white background
          />
          <div className={styles.pillars}>
            {PILLARS.map(({ icon, title, desc }) => (
              <div key={title} className={styles.pillar}>
                <div className={styles.pillarIcon}>{icon}</div>
                <div>
                  <h4 className={styles.pillarTitle}>{title}</h4>
                  <p className={styles.pillarDesc}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <AppButton as={Link} to="/facilities" variant="gold" size="lg">
            Discover Our Facilities
          </AppButton>
        </Col>
      </Row>
    </Container>
  </section>
);

export default AboutSection;