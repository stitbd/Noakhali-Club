import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './PresidentSpeechPage.module.scss';
import presidentImg from '../../assets/president.jpg';

const PRESIDENT = {
  name: 'Mohd. Ataur Rahman Bhuiyan',
  title: 'President, NCDL',
  eyebrow: 'Leadership Insights',
  titlePart1: 'Message From',
  titlePart2: 'The President',
  quote: "Welcome to Noakhali Club Dhaka Ltd (NCDL)—a destination where elegance meets community, and tradition blends seamlessly with modern leisure.",
  bio: "It is with great pleasure that I welcome you to the official website of Noakhali Club Dhaka Ltd. As the President of this esteemed Club, I am happy to extend my warmest greetings to each of you. It’s my privilege to lead our inclusive community of Members who share a common passion for excellence, camaraderie, and the pursuit of a dynamic and fulfilling lifestyle.  Remaining a central focal point for a wide range of social, cultural, and recreational activities within our cherished city. Whether you're seeking a serene environment to relax, a platform to network with like-minded individuals, or an opportunity to engage in sports and cultural events, Noakhali Club Dhaka Ltd has something special for you. It's a place where individuals from diverse backgrounds come together to celebrate life, make memories, and create meaningful relationships. At Noakhali Club Dhaka Ltd, we believe in the power of connections, the joy of shared experiences, and the beauty of lifelong friendships. As we embark on this digital journey with our website, you'll find up-to-date information on upcoming events, member-exclusive benefits, and a glimpse into the soul of our Club life. We're continually evolving to meet the needs and desires of our members. Your feedback is invaluable as we continuously strive to improve and exceed your expectations. Our dedicated team, both on the management and staff side, is dedicated to ensuring that your experience at the club is nothing short of extraordinary. I encourage you to explore our website, discover the numerous opportunities it offers, and make the most of your membership.  Thank you for being part of the Noakhali Club Dhaka Ltd family. Together, we'll create lasting moments and nurture a sense of belonging that will last a lifetime."
};

const PresidentSpeechPage = () => {

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <Container className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Leadership</p>
          <h1 className={styles.heroTitle}>President's Message</h1>
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
                {/* <div className={styles.divider} />
                
                <blockquote className={styles.quote}>
                  "{PRESIDENT.quote}"
                </blockquote> */}
                
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
    </>
  );
};


export default PresidentSpeechPage;
