/**
 * LeadershipPage — Executive Committee / Leadership
 */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionHeader from '../components/common/SectionHeader';
import { getInitials } from '../utils/helpers';
import styles from './LeadershipPage.module.scss';

const PRESIDENT = {
  name: 'Commodore Abdur Rahim',
  role: 'President',
  tenure: '2023 – 2025',
  bio: 'A distinguished leader with over three decades of association with Noakhali Club Dhaka Ltd, Commodore Abdur Rahim has guided the club through transformative growth and modernisation initiatives.',
};

const COMMITTEE = [
  { name: 'Vice Admiral (Retd.) Kamal Hossain', role: 'Vice President' },
  { name: 'Brigadier (Retd.) Shafiqul Islam', role: 'General Secretary' },
  { name: 'Mr. Tanvir Ahmed', role: 'Joint Secretary' },
  { name: 'Mr. Rezaul Karim', role: 'Treasurer' },
  { name: 'Mr. Anisur Rahman', role: 'Sports Secretary' },
  { name: 'Mrs. Fatema Begum', role: 'Social & Cultural Secretary' },
  { name: 'Mr. Shahidul Alam', role: 'House Secretary' },
  { name: 'Mr. Monjurul Haque', role: 'Executive Member' },
  { name: 'Mrs. Nasrin Akter', role: 'Executive Member' },
  { name: 'Mr. Saidur Rahman', role: 'Executive Member' },
  { name: 'Mr. Golam Mostafa', role: 'Executive Member' },
  { name: 'Mr. Rafiqul Islam', role: 'Executive Member' },
];

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

const LeadershipPage = () => (
  <>
    {/* ── Page Hero ──────────────────────────────────────── */}
    <div className={styles.hero}>
      <div className={styles.heroBg} />
      <Container className={styles.heroContent}>
        <p className={styles.heroEyebrow}>Our Leadership</p>
        <h1 className={styles.heroTitle}>Executive Committee</h1>
        <div className={styles.heroDivider} />
        <p className={styles.heroDesc}>
          Guiding Noakhali Club Dhaka Ltd with vision, integrity, and an unwavering commitment to our members.
        </p>
      </Container>
    </div>

    {/* ── President ──────────────────────────────────────── */}
    <section className={styles.presidentSection}>
      <Container>
        <SectionHeader subtitle="The President" title="Club President" centered />
        <div className={styles.presidentWrap}>
          <MemberCard {...PRESIDENT} featured />
        </div>
      </Container>
    </section>

    {/* ── Committee ──────────────────────────────────────── */}
    <section className={styles.committeeSection}>
      <Container>
        <SectionHeader subtitle="2023 – 2025 Term" title="Executive Committee Members" centered />
        <Row className="g-4 justify-content-center">
          {COMMITTEE.map((member) => (
            <Col key={member.name} lg={4} md={6}>
              <MemberCard {...member} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  </>
);

export default LeadershipPage;
