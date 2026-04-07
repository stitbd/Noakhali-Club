import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionHeader from '../../../components/common/SectionHeader';
import { getInitials } from '../../../utils/helpers';
import styles from './ExecutiveCommittee.module.scss';

const COMMITTEE = [
  { name: 'Mr. MD. Shahidul Ahsan', role: 'President' },
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

const ExecutiveCommittee = () => (
  <section className={styles.section}>
    <Container>
      <SectionHeader
        subtitle="2020 – 2022 Term"
        titlePart1="Executive Committee"
        titlePart2="Members"
        centered={true}
        variant="dark"
      />
      <Row className="g-4 justify-content-center">
        {COMMITTEE.map(({ name, role }, index) => (
          <Col key={index} lg={4} md={6}>
            <div className={styles.card}>
              <div className={styles.avatar}>
                <span className={styles.initials}>{getInitials(name)}</span>
              </div>
              <div className={styles.body}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.role}>{role}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default ExecutiveCommittee;