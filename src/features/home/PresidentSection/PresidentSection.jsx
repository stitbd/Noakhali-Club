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
  quote: "Welcome to Noakhali Club Dhaka Ltd (NCDL)—a destination where elegance meets community, and tradition blends seamlessly with modern leisure.",
  bio: "Founded on December 1, 2017, Noakhali Club Dhaka Ltd (NCDL) was built on a vision of unity, purpose, and meaningful connection. More than a club, it has grown into a vibrant community where members come together to foster personal growth, cultural engagement, and social impact. Guided by the belief in building a better society, NCDL continues to inspire connection, collaboration, and a refined lifestyle experience."
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
              <span className={styles.titlePart1}>{PRESIDENT.titlePart1}</span>{' '}
              <span className={styles.titlePart2}>{PRESIDENT.titlePart2}</span>
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