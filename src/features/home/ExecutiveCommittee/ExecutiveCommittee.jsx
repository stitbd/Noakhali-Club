import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionHeader from '../../../components/common/SectionHeader';
import { getInitials } from '../../../utils/helpers';
import styles from './ExecutiveCommittee.module.scss';

import imgPresident from '../../../assets/committee/president.jpg';
import img01 from '../../../assets/committee/01.jpg';
import img02 from '../../../assets/committee/02.jpg';
import img03 from '../../../assets/committee/03.jpg';
import img04 from '../../../assets/committee/04.jpg';
import img05 from '../../../assets/committee/05.jpg';
import img06 from '../../../assets/committee/06.jpg';
import img07 from '../../../assets/committee/07.jpg';
import img08 from '../../../assets/committee/08.jpg';
import img09 from '../../../assets/committee/09.jpg';
import img10 from '../../../assets/committee/10.jpg';
import img11 from '../../../assets/committee/11.jpg';
import img12 from '../../../assets/committee/12.jpg';
import img13 from '../../../assets/committee/13.jpg';
import img14 from '../../../assets/committee/14.jpg';
import img15 from '../../../assets/committee/15.jpg';
import img16 from '../../../assets/committee/16.jpg';
import img17 from '../../../assets/committee/17.jpg';

const COMMITTEE = [
  { name: 'Mr. MD. Shahidul Ahsan', role: 'President', code: 'P-01', img: imgPresident },
  { name: 'Mr. Mohd Ataur Rahman Bhuiyan', role: 'Vice-President', code: 'VP-01', img: img01 },
  { name: 'Mr. Inamul Haq Khan', role: 'Vice-President', code: 'VP-02', img: img02 },
  { name: 'Mr. Kabir Ahmed', role: 'Vice-President', code: 'VP-03', img: img03 },
  { name: 'Mr. MD. Jamal Uddin', role: 'General Secretary', code: 'GS-01', img: img04 },
  { name: 'Mr. Zafor Ahmed', role: 'Treasurer', code: 'TR-01', img: img05 },
  { name: 'Mr. Abul Kalam Azad', role: 'Executive Member', code: 'EM-01', img: img06 },
  { name: 'Mr. Khondoker Lutfor Rahman (Fatik)', role: 'Executive Member', code: 'EM-02', img: img07 },
  { name: 'Mr. Abdullah Hil Rakib', role: 'Executive Member', code: 'EM-03', img: img08 },
  { name: 'Mr. Mohammad Salim', role: 'Executive Member', code: 'EM-04', img: img09 },
  { name: 'Mr. Ahmed Ullah', role: 'Executive Member', code: 'EM-05', img: img10 },
  { name: 'Mr. MD. Kamal Uddin', role: 'Executive Member', code: 'EM-06', img: img11 },
  { name: 'Mr. Sirajul Islam (Swapon)', role: 'Executive Member', code: 'EM-07', img: img12 },
  { name: 'Md. Zakir Hossain Pervaz', role: 'Executive Member', code: 'EM-08', img: img13 },
  { name: 'Dr. M Mokter Hossen', role: 'Executive Member', code: 'EM-09', img: img14 },
  { name: 'Mohammed Shawkatullah Chowdhury', role: 'Executive Member', code: 'EM-10', img: img15 },
  // { name: 'Mr. MD. Mahfuzur Rahman (Kiran)', role: 'Executive Member', code: 'EM-11', img: img16 },
  // { name: 'Another Member', role: 'Executive Member', code: 'EM-12', img: img17 },
];

const MemberCard = ({ member, index, cardRef }) => {
  return (
    <div
      ref={(el) => {
        cardRef.current[index] = el;
      }}
      className={styles.card}
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

      <div className={styles.body}>
        <h3 className={styles.name}>{member.name}</h3>
        <div className={styles.roleLine} />
        <p className={styles.role}>{member.role}</p>
      </div>

      <div className={styles.cornerAccent} />
    </div>
  );
};

const ExecutiveCommittee = () => {
  const cardRef = useRef([]);

  useEffect(() => {
    const observers = [];

    cardRef.current.forEach((el, i) => {
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add(styles.visible), i * 65);
            obs.unobserve(el);
          }
        },
        { threshold: 0.08 }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // President removed from display
  const members = COMMITTEE.filter((member) => member.role !== 'President');

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeader
          subtitle="2020 – 2022 Term"
          titlePart1="Executive Committee"
          titlePart2="Members"
          centered
          variant="dark"
        />

        <Row className="g-4 justify-content-center">
          {members.map((member, index) => (
            <Col key={index} lg={4} md={6}>
              <MemberCard member={member} index={index} cardRef={cardRef} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ExecutiveCommittee;