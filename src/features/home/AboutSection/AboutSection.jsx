import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppButton from '../../../components/common/AppButton';
import SectionHeader from '../../../components/common/SectionHeader';
import styles from './AboutSection.module.scss';

const PILLARS = [
  { icon: '🏆', title: 'Sporting Excellence', desc: 'Nurturing champions in rowing, swimming, polo, and water sports.' },
  { icon: '🤝', title: 'Community & Bonds', desc: 'A family of 5,000+ members united by shared passions and values.' },
  { icon: '⚓', title: 'Maritime Heritage', desc: 'Preserving Bangladesh\'s proud traditions of river culture and seamanship.' },
  { icon: '🌟', title: 'Modern Amenities', desc: 'World-class facilities continuously upgraded to meet global standards.' },
];

const AboutSection = () => (
  <section className={styles.about}>
    {/* ── Full-width background layer ───────────────────── */}
    <div className={styles.bg} />

    <Container className={styles.wrapper}>
      <Row className="g-5 align-items-center">
        {/* ── Left: Image Collage ────────────────────────── */}
        <Col lg={5}>
          <div className={styles.imageGrid}>
            <div className={`${styles.imgBox} ${styles['imgBox--large']}`}>
              <div className={styles.imgPlaceholder}>
                <span className={styles.imgIcon}>⛵</span>
                <span className={styles.imgLabel}>Club on the Dhaka</span>
              </div>
            </div>
            <div className={`${styles.imgBox} ${styles['imgBox--small']}`}>
              <div className={`${styles.imgPlaceholder} ${styles['imgPlaceholder--gold']}`}>
                <span className={styles.imgIcon}>🏅</span>
              </div>
            </div>
            <div className={`${styles.imgBox} ${styles['imgBox--small2']}`}>
              <div className={`${styles.imgPlaceholder} ${styles['imgPlaceholder--dark']}`}>
                <span className={styles.imgIcon}>🚣</span>
              </div>
            </div>
            {/* Founded badge */}
            <div className={styles.badge}>
              <span className={styles.badgeYear}>2017</span>
              <span className={styles.badgeText}>Est.</span>
            </div>
          </div>
        </Col>

        {/* ── Right: Content ────────────────────────────── */}
        <Col lg={7}>
          <SectionHeader
            subtitle="Our Story"
            title="A Club build a better society."
            description="At the heart of Noakhali Club Dhaka lies a shared sense of community and purpose. Since beginning its journey on December 1st, 2017, the Club has stood as more than just a gathering place—it’s a second home where values, vision, and vibrant connections come together. "
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