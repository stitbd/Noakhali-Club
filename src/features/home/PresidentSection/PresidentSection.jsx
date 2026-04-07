import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './PresidentSection.module.scss';
// 👇 UPDATE THIS PATH to your actual image location
import presidentImg from '../../../assets/president.jpg';

const PRESIDENT = {
  name: 'MD. Shahidul Ahsan',
  title: 'President, NCDL',
  eyebrow: 'Leadership Insights',
  titlePart1: 'Message From',
  titlePart2: 'The President',
  quote: "Welcome to Noakhali Club Dhaka Ltd (NCDL), the premier recreational boating and social club in Bangladesh. Our vision is to provide an elite sanctuary for our members, combining the passion for boating with world-class amenities.",
  bio: "Since our establishment in 2017, we have dedicated ourselves to fostering a vibrant community of distinguished individuals. We invite you to explore our facilities, engage with our community, and experience the finest waterfront lifestyle on the shores of the Turag."
};

const PresidentSection = () => (
  <section className={styles.section}>
    <Container>
      <Row className="align-items-center g-5">
        {/* ── Left: Image Card ────────────────────────────── */}
        <Col lg={5}>
          <div className={styles.imageWrapper}>
            <img src={presidentImg} alt={PRESIDENT.name} className={styles.image} />
            <div className={styles.overlay}>
              <h3 className={styles.name}>{PRESIDENT.name}</h3>
              <span className={styles.role}>{PRESIDENT.title}</span>
            </div>
          </div>
        </Col>

        {/* ── Right: Content ──────────────────────────────── */}
        <Col lg={7}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>{PRESIDENT.eyebrow}</span>
            <h2 className={styles.heading}>
              {PRESIDENT.titlePart1} <span className={styles.gold}>{PRESIDENT.titlePart2}</span>
            </h2>
            <div className={styles.divider} />
            
            <blockquote className={styles.quote}>
              "{PRESIDENT.quote}"
            </blockquote>
            
            <p className={styles.bio}>{PRESIDENT.bio}</p>
            
            <div className={styles.signature}>
              <div className={styles.sigLine} />
              <div>
                <span className={styles.sigName}>{PRESIDENT.name}</span>
                <span className={styles.sigTitle}>{PRESIDENT.title}</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default PresidentSection;