/**
 * LeadershipPage — Executive Committee / Leadership
 */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionHeader from '../components/common/SectionHeader';
import { getInitials } from '../utils/helpers';
import styles from './LeadershipPage.module.scss';

const PRESIDENT = {
  name: 'Mr. MD. Shahidul Ahsan',
  role: 'President',
  tenure: '2020 – 2022',
  bio: 'A distinguished leader with over three decades of association with Noakhali Club Dhaka Ltd, Mr. MD. Shahidul Ahsan has guided the club through transformative growth and modernisation initiatives.',
};

const COMMITTEE = [
  { name: 'Mr. Mohd Ataur Rahman Bhuiyan', role: 'Vice-President' },
  { name: 'Mr. Inamul Haq Khan', role: 'Vice-President' },
  { name: 'Mr. Kabir Ahmed', role: 'Vice-President' },
  { name: 'Mr. MD. Jamal Uddin', role: 'General Secretary' },
  { name: 'Mr. Zafor Ahmed', role: 'Treasurer' },
  { name: 'Mr. Abul Kalam Azad', role: 'Executive Member' },
  { name: 'Mr. Khondoker Lutfor Rahman (Fatik)', role: 'Executive Member' },
  { name: 'Mr. Abdullah Hil Rakib', role: 'Executive Member' },
  { name: 'Mr. Mohammad Salim', role: 'Executive Member' },
  { name: 'Mr. Ahmed Ullah', role: 'Executive Member' },
  { name: 'Mr. MD. Kamal Uddin', role: 'Executive Member' },
  { name: 'Mr. Sirajul Islam (Swapon)', role: 'Executive Member' },
  { name: 'Md. Zakir Hossain Pervaz', role: 'Executive Member' },
  { name: 'Dr. M Mokter Hossen', role: 'Executive Member' },
  { name: 'Mohammed Shawkatullah Chowdhury', role: 'Executive Member' },
  { name: 'Mr. MD. Mahfuzur Rahman (kiran)', role: 'Executive Member' },
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
