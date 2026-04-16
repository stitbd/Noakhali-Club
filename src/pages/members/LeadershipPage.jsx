import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionHeader from '../../components/common/SectionHeader';
import { getInitials } from '../../utils/helpers';
import styles from './LeadershipPage.module.scss';

import imgPresident from '../../assets/committee/president.jpg';
import img01 from '../../assets/committee/placeholder.jpg';
import img02 from '../../assets/committee/placeholder.jpg';
import img03 from '../../assets/committee/placeholder.jpg';
import img04 from '../../assets/committee/placeholder.jpg';
import img05 from '../../assets/committee/placeholder.jpg';
import img06 from '../../assets/committee/placeholder.jpg';
import img07 from '../../assets/committee/placeholder.jpg';
import img08 from '../../assets/committee/placeholder.jpg';
import img09 from '../../assets/committee/placeholder.jpg';
import img10 from '../../assets/committee/placeholder.jpg';
import img11 from '../../assets/committee/placeholder.jpg';
import img12 from '../../assets/committee/placeholder.jpg';
import img13 from '../../assets/committee/placeholder.jpg';
import img14 from '../../assets/committee/placeholder.jpg';
import img15 from '../../assets/committee/placeholder.jpg';
import img16 from '../../assets/committee/placeholder.jpg';
import img17 from '../../assets/committee/placeholder.jpg';

const PRESIDENT = {
  name: 'Mr. Mohd. Ataur Rahman Bhuiyan (Manik)',
  role: 'President',
  code: 'P-01',
  img: imgPresident,
  tenure: '2024 – 2026',
  bio: 'A distinguished leader with over three decades of association with Noakhali Club Dhaka Ltd, Mr. Ataur Rahman Bhuiyan has guided the club through transformative growth and modernisation initiatives.',
};

const COMMITTEE = [
  { name: 'Mr. Mohammed Abdul Hai',                  role: 'General Secretary', code: 'GS-01', img: img01 },
  { name: 'Mr. Md. Kamal Uddin',                     role: 'Treasurer',         code: 'TR-01', img: img02 },
  { name: 'Mr. Mohammed Shamsuddin Ahmed (Salim)',   role: 'Director',          code: 'D-01',  img: img03 },
  { name: 'Mr. Md. Tafazzal Hossain Forhad',        role: 'Director',          code: 'D-02',  img: img04 },
  { name: 'Barrister Imam Hossain Tareq',            role: 'Director',          code: 'D-03',  img: img05 },
  { name: 'Mr. Abul Kalam Azad',                     role: 'Director',          code: 'D-04',  img: img06 },
  { name: 'Mr. Azizur Rahman Kiran',                 role: 'Director',          code: 'D-05',  img: img07 },
  { name: 'Mr. Mohammad Anwoar Hossain Monto',      role: 'Director',          code: 'D-06',  img: img08 },
  { name: 'Mr. Md. Mahfuzur Rahman Kiron',           role: 'Director',          code: 'D-07',  img: img09 },
  { name: 'Mr. Md. Salim Chowdhury',                 role: 'Director',          code: 'D-08',  img: img10 },
  { name: 'Mr. Md. Monjurul Azim (Sumon)',           role: 'Director',          code: 'D-09',  img: img11 },
  { name: 'Mr. Md. Zakir Hossain Parvez',            role: 'Director',          code: 'D-10',  img: img12 },
  { name: 'Mr. Md. Salah Uddin',                     role: 'Director',          code: 'D-11',  img: img13 },
  { name: 'Mr. Ahmed Ullah',                          role: 'Director',          code: 'D-12',  img: img14 },
  { name: 'Mr. A.K.M. Ayub Ullah',                   role: 'Director',          code: 'D-13',  img: img15 },
  { name: 'Mr. Fazla Azim (Sudan)',                   role: 'Director',          code: 'D-14',  img: img16 },
];

const MemberCard = ({ member, index, cardRef, featured = false }) => {
  return (
    <div
      ref={(el) => {
        if (cardRef && el) cardRef.current[index] = el;
      }}
      className={`${styles.card} ${featured ? styles['card--featured'] : ''}`}
    >
      <div className={styles.photoArea}>
        <span className={styles.codeBadge}>{member.code}</span>

        {member.img ? (
          <img src={member.img} alt={member.name} className={styles.photo} />
        ) : (
          <div className={styles.initialsCircle}>
            <span className={styles.initialsText}>{getInitials(member.name)}</span>
          </div>
        )}

        <div className={styles.photoOverlay} />
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.name}>{member.name}</h3>
        <span className={styles.goldBadge}>{member.role}</span>
        {member.tenure && <p className={styles.tenure}>{member.tenure}</p>}
        {member.bio && <p className={styles.bio}>{member.bio}</p>}
      </div>

      <div className={styles.cornerAccent} />
    </div>
  );
};

const LeadershipPage = () => {
  const cardRef = useRef([]);

  useEffect(() => {
    const observers = [];

    cardRef.current.forEach((el, i) => {
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Stagger reveal on scroll: adds 65ms delay per card to feel premium
            setTimeout(() => el.classList.add(styles.visible), i * 65);
            obs.unobserve(el);
          }
        },
        { threshold: 0.08 } // ~8% of the card must be visible before triggering
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Optional: remove President from display in the grid
  const members = COMMITTEE.filter((m) => m.role !== 'President');

  return (
      <>
        {/* ── Hero ──────────────────────────────────────────── */}
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
  
  
        {/* ── Description Section ──────────────────────────── */}

      {/* ── President ──────────────────────────────────────── */}
      <section className={styles.presidentSection}>
        <Container>
          <SectionHeader subtitle="The President" title="Club President" centered />
          <div className={styles.presidentWrap}>
            <MemberCard member={PRESIDENT} index={0} cardRef={cardRef} featured />
          </div>
        </Container>
      </section>

      {/* ── Committee ──────────────────────────────────────── */}
      <section className={styles.committeeSection}>
        <Container>
          <SectionHeader subtitle="2020 – 2022 Term" title="Executive Committee Members" centered />
          <Row className="g-4 justify-content-center">
            {members.map((member, index) => (
              <Col key={index} lg={4} md={6}>
                <MemberCard member={member} index={index + 1} cardRef={cardRef} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LeadershipPage;