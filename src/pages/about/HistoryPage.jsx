import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './HistoryPage.module.scss';

import presidentImg from '../../assets/about-main.jpg';


const HistoryPage = () => {

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <Container className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Est. 2017</p>
          <h1 className={styles.heroTitle}>History</h1>
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
                  <span className={styles.titlePart1}>OUR</span>{' '}
                  <span className={styles.titlePart2}>STORY</span>
                </h2>
                
                <p className={styles.bio}>At the heart of Noakhali Club Dhaka lies a shared sense of community and purpose. Since beginning its journey on December 1st, 2017, the Club has stood as more than just a gathering place—it’s a second home where values, vision, and vibrant connections come together. Built on the belief that meaningful change begins with strong relationships, the Club serves as a hub for members striving to grow personally, socially, and intellectually. Embracing the motto “Want to build a better society,” our members actively pursue initiatives that balance personal development with community well-being. Through ongoing efforts in arts, culture, sports, and social events, Noakhali Club Dhaka continues to foster unity and inspire a stronger, more connected society.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};


export default HistoryPage;
