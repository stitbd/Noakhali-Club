import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionHeader from '../../../components/common/SectionHeader';
import { getInitials } from '../../../utils/helpers';
import styles from './ExecutiveCommittee.module.scss';

const COMMITTEE = [
  { name: 'Vice Admiral (Retd.) Kamal Hossain', role: 'Vice President'             },
  { name: 'Brigadier (Retd.) Shafiqul Islam',   role: 'General Secretary'          },
  { name: 'Mr. Tanvir Ahmed',                   role: 'Joint Secretary'            },
  { name: 'Mr. Rezaul Karim',                   role: 'Treasurer'                  },
  { name: 'Mr. Anisur Rahman',                  role: 'Sports Secretary'           },
  { name: 'Mrs. Fatema Begum',                  role: 'Social & Cultural Secretary' },
  { name: 'Mr. Shahidul Alam',                  role: 'House Secretary'            },
  { name: 'Mr. Monjurul Haque',                 role: 'Executive Member'           },
  { name: 'Mrs. Nasrin Akter',                  role: 'Executive Member'           },
  { name: 'Mr. Saidur Rahman',                  role: 'Executive Member'           },
  { name: 'Mr. Golam Mostafa',                  role: 'Executive Member'           },
  { name: 'Mr. Rafiqul Islam',                  role: 'Executive Member'           },
];

const ExecutiveCommittee = () => (
  <section className={styles.section}>
    <Container>
      <SectionHeader subtitle="2023 – 2025 Term" title="Executive Committee Members" centered />
      <Row className="g-4 justify-content-center">
        {COMMITTEE.map(({ name, role }) => (
          <Col key={name} lg={4} md={6}>
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
