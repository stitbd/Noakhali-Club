import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppButton from '../../../components/common/AppButton';
import styles from './CTABanner.module.scss';

const CTABanner = () => (
  <section className={styles.banner}>
    <Container className={styles.inner}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>Become a Member</span>
        
        <h2 className={styles.title}>
          <span className={styles.titlePart1}>Join the Legacy of </span>
          <span className={styles.titlePart2}>Noakhali Club Dhaka</span>
        </h2>
        
        <p className={styles.desc}>
          Built on tradition and community spirit, NCDL offers refined sports, vibrant social life, and timeless elegance.
        </p>
        
        <div className={styles.actions}>
          <AppButton as={Link} to="/reservation" variant="gold" size="lg">
            Apply for Membership
          </AppButton>
          <AppButton as={Link} to="/facilities" variant="outline" size="lg">
            Explore the Club
          </AppButton>
        </div>
      </div>
    </Container>
  </section>
);

export default CTABanner;