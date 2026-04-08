import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './LeadershipPage.module.scss';

const DiplomateMemberPage = () => {

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <Container className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Diplomate member </p>
          <h1 className={styles.heroTitle}>Diplomate member </h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroDesc}>
            Want to build a better society.
          </p>
        </Container>
      </div>


      {/* ── Description Section ──────────────────────────── */}
      <section className={styles.descriptionSection}>
        <Container>
          <p className={styles.descriptionText}>
            At the heart of Noakhali Club Dhaka lies a shared sense of community and purpose. 
            Since beginning its journey on December 1st, 2017, the Club has stood as more than 
            just a gathering place—it's a second home where values, vision, and vibrant connections 
            come together. Built on the belief that meaningful change begins with strong relationships, 
            the Club serves as a hub for members striving to grow personally, socially, and intellectually. 
            Embracing the motto "Want to build a better society," our members actively pursue initiatives 
            that balance personal development with community well-being. Through ongoing efforts in arts, 
            culture, sports, and social events, Noakhali Club Dhaka continues to foster unity and inspire 
            a stronger, more connected society.
          </p>
        </Container>
      </section>
    </>
  );
};

export default DiplomateMemberPage;