import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './LegacyPage.module.scss';
import AppButton from '../../components/common/AppButton';

import presidentImg from '../../assets/about-main.jpg';


const LegacyPage = () => {

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <Container className={styles.heroContent}>
          <p className={styles.heroEyebrow}>About the Club</p>
          <h1 className={styles.heroTitle}>Our Legacy & Vision</h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroDesc}>
            Want to build a better society.
          </p>
        </Container>
      </div>


      {/* ── Description Section ──────────────────────────── */}
      <section className={styles.descriptionSection}>
        <Container>
          <Row className="align-items-center g-5">
            {/* ── Left: Image Card ────────────────────────────── */}
            <Col lg={5}>
              <div className={styles.imageWrapper}>
                <img src={presidentImg} className={styles.image} />
                <div className={styles.overlay}>
                  <span className={styles.role}>NCDL</span>
                </div>
              </div>
            </Col>

            {/* ── Right: Content ──────────────────────────────── */}
            <Col lg={7}>
              <div className={styles.content}>
                <h2 className={styles.heading}>
                  <span className={styles.titlePart1}>Legacy &</span>{' '}
                  <span className={styles.titlePart2}>History</span>
                </h2>
                
                <p className={styles.bio}>Welcome to Noakhali Club Dhaka Ltd (NCDL), the distinguished destination for heritage, connection, and community in the heart of the capital. Since our founding in 2017, NCDL has served as a premier social hub, dedicated to fostering the traditions and spirit of our roots while providing a sophisticated environment for our members for over a decade.</p>
                <p className={styles.bio}>The Noakhali Club Dhaka was born from a shared vision to create a space where identity and excellence meet. It stands as a unique institution in Dhaka, offering a bridge between our rich cultural history and the modern urban lifestyle. While we take immense pride in our heritage, the club is a dynamic center for recreation, featuring top-tier facilities for tennis, squash, billiards, and a variety of other indoor and outdoor sports.</p>
                <p className={styles.bio}>NCDL is more than just a club; it is a sanctuary where families gather to unwind and professionals build lasting networks. This platform is designed to keep our community informed, celebrate our collective achievements, and highlight upcoming milestones. As we continue to evolve, the engagement and insights of our members remain the heartbeat of our progress.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── Vision / Mission / Values ──────────────────────────── */}
      <section className={styles.visionSection}>
        <Container>
          <Row className="g-4 justify-content-center">
            <Col lg={4} md={6}>
              <div className={`${styles.visionCard} ${styles.visionCardDark}`}>
                <div className={styles.visionIcon}>👁️</div>
                <h3 className={styles.visionTitle}>Our Vision</h3>
                <p className={styles.visionText}>
                  To be the benchmark for luxury boating and social clubs in South Asia, recognized for our commitment to quality and prestige.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className={`${styles.visionCard} ${styles.visionCardGold}`}>
                <div className={styles.visionIcon}>🎯</div>
                <h3 className={styles.visionTitle}>Our Mission</h3>
                <p className={styles.visionText}>
                  To foster a vibrant community through exceptional waterfront experiences, elite networking, and world-class hospitality.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className={`${styles.visionCard} ${styles.visionCardLight}`}>
                <div className={styles.visionIcon}>💎</div>
                <h3 className={styles.visionTitle}>Our Values</h3>
                <p className={styles.visionText}>
                  Integrity, Excellence, Heritage, and Community are the pillars that support everything we do at Noakhali Club Dhaka.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── Stats Bar ───────────────────────────────────────────── */}
      <section className={styles.statsSection}>
        <Container>
          <Row className="text-center g-4">
            {[
              { value: '1,500+', label: 'Global Members' },
              { value: '50+',    label: 'Luxury Boats' },
              { value: '04+',    label: 'Premium Restaurants' },
              { value: '12+',    label: 'Years Registry' },
            ].map((stat) => (
              <Col key={stat.label} xs={6} md={3}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <Container className="text-center">
          <h2 className={styles.ctaTitle}>Ready to witness our legacy?</h2>
          <p className={styles.ctaDesc}>
            We invite you to visit our premises and experience the atmosphere first-hand. Our membership committee is ready to assist you.
          </p>
          
          <div className={styles.actions}>
            <AppButton as={Link} to="/reservation" variant="gold" size="lg">
              BOOK A VISIT
            </AppButton>
            <AppButton as={Link} to="/" variant="outline" size="lg">
            Check Membership Requirements →
            </AppButton>
          </div>
        </Container>
      </section>
    </>
  );
};


export default LegacyPage;
