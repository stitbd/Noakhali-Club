import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './PresidentSection.module.scss';
// 👇 UPDATE THIS PATH to your actual image location
import presidentImg from '../../../assets/president.jpg';

const PRESIDENT = {
  name: 'Mohd. Ataur Rahman Bhuiyan',
  title: 'President, NCDL',
  eyebrow: 'Leadership Insights',
  titlePart1: 'Message From',
  titlePart2: 'The President',
  quote: "Welcome to Noakhali Club Dhaka Ltd (NCDL)—a destination where elegance meets community, and tradition blends seamlessly with modern leisure.",
  bio: "It is with great pleasure that I welcome you to the official website of Noakhali Club Dhaka Ltd. As the President of this esteemed Club, I am happy to extend my warmest greetings to each of you. It’s my privilege to lead our inclusive community of Members who share a common passion for excellence, camaraderie, and the pursuit of a dynamic and fulfilling lifestyle.  Remaining a central focal point for a wide range of social, cultural, and recreational activities within our cherished city. Whether you're seeking a serene environment to relax, a platform to network with like-minded individuals, or an opportunity to engage in sports and cultural events, Noakhali Club Dhaka Ltd has something special for you. It's a place where individuals from diverse backgrounds come together to celebrate life, make memories, and create meaningful relationships. At Noakhali Club Dhaka Ltd, we believe in the power of connections, the joy of shared experiences, and the beauty of lifelong friendships. "
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