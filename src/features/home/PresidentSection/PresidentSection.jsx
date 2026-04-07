import React from 'react';
import { Container } from 'react-bootstrap';
import SectionHeader from '../../../components/common/SectionHeader';
import { getInitials } from '../../../utils/helpers';
import styles from './PresidentSection.module.scss';

const PRESIDENT = {
  name: 'Commodore Abdur Rahim',
  role: 'President',
  tenure: '2023 – 2025',
  bio: 'A distinguished leader with over three decades of association with Dhaka Boat Club, guiding the club through transformative growth and modernisation initiatives.',
};

const PresidentSection = () => (
  <section className={styles.section}>
    <Container>
      <SectionHeader subtitle="The President" title="Club President" centered />
      <div className={styles.wrap}>
        <div className={styles.card}>
          <div className={styles.avatar}>
            <span className={styles.initials}>{getInitials(PRESIDENT.name)}</span>
          </div>
          <div className={styles.body}>
            <div className={styles.badge}>President</div>
            <h3 className={styles.name}>{PRESIDENT.name}</h3>
            <p className={styles.role}>{PRESIDENT.role}</p>
            <p className={styles.tenure}>Tenure: {PRESIDENT.tenure}</p>
            <p className={styles.bio}>{PRESIDENT.bio}</p>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default PresidentSection;
