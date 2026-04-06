import React from 'react';
import { Link } from 'react-router-dom';
import AppButton from '../../../components/common/AppButton';
import styles from './CTABanner.module.scss';

const CTABanner = () => (
  <section className={styles.banner}>
    <div className={styles.bg} />
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Become a Member</span>
          <h2 className={styles.title}>Join the Legacy of Noakhali Club Dhaka Ltd</h2>
          <p className={styles.desc}>
            Experience unparalleled sports, social events, and riverside elegance.
            Membership is an invitation to be part of Bangladesh's most storied club.
          </p>
          <div className={styles.actions}>
            <AppButton as={Link} to="/reservation" variant="gold" size="lg">
              Apply for Membership
            </AppButton>
            <AppButton as={Link} to="/facilities" variant="ghost" size="lg">
              Explore the Club
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;
