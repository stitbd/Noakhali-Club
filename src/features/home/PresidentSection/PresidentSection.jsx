/**
 * PresidentSection — Executive Committee / Leadership
 */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SectionHeader from '../../../components/common/SectionHeader';
import { getInitials } from '../../../utils/helpers';
import styles from './PresidentSection.module.scss';

const PRESIDENT = {
  name: 'Commodore Abdur Rahim',
  role: 'President',
  tenure: '2023 – 2025',
  bio: 'A distinguished leader with over three decades of association with Noakhali Club Dhaka Ltd, Commodore Abdur Rahim has guided the club through transformative growth and modernisation initiatives.',
};

const MemberCard = ({ name, role, tenure, bio, featured = false }) => (
  <div className={`${styles.card} ${featured ? styles['card--featured'] : ''}`}>
    <div className={`${styles.avatar} ${featured ? styles['avatar--featured'] : ''}`}>
      <span className={styles.initials}>{getInitials(name)}</span>
    </div>
    <div className={styles.cardBody}>
      {featured && <div className={styles.goldBadge}>President</div>}
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.role}>{role}</p>
      {tenure && <p className={styles.tenure}>Tenure: {tenure}</p>}
      {bio && <p className={styles.bio}>{bio}</p>}
    </div>
  </div>
);

const PresidentSection = () => (
  <>
    {/* ── Page Hero ──────────────────────────────────────── */}
  
    {/* ── President ──────────────────────────────────────── */}
    <section className={styles.presidentSection}>
      <Container>
        <SectionHeader subtitle="The President" title="Club President" centered />
        <div className={styles.presidentWrap}>
          <MemberCard {...PRESIDENT} featured />
        </div>
      </Container>
    </section>
  </>
);

export default PresidentSection;