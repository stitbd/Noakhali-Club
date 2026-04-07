import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SectionHeader from '../../../components/common/SectionHeader';
import AppButton from '../../../components/common/AppButton';
import styles from './FacilitiesPreview.module.scss';

const FACILITIES = [
  { icon: '🏊', title: 'Swimming Pool',        desc: 'Olympic-standard heated pools for training and leisure, open year-round.',                tag: 'Aquatics'     },
  { icon: '⛵', title: 'Boat Jetty & Marina',  desc: 'State-of-the-art jetty accommodating sailing boats, motorboats, and kayaks.',             tag: 'Water Sports' },
  { icon: '💪', title: 'Gym & Fitness Centre', desc: 'Fully equipped modern gymnasium with personal trainers available daily.',                  tag: 'Fitness'      },
  { icon: '🍽️', title: 'Restaurant & Lounge',  desc: 'Fine dining and casual lounge offering Bangladeshi and international cuisines.',           tag: 'Dining'       },
  { icon: '🎾', title: 'Sports Courts',         desc: 'Tennis, badminton, and squash courts for year-round competitive play.',                    tag: 'Sports'       },
  { icon: '🎉', title: 'Banquet & Event Hall',  desc: 'Elegant event spaces for corporate gatherings, weddings, and gala nights.',               tag: 'Events'       },
];

const FacilitiesPreview = () => (
  /* section = full-width background */
  <section className={styles.section}>
    {/* Bootstrap Container keeps content readable */}
    <Container>
      <div className={styles.header}>
        <SectionHeader
          subtitle="What We Offer"
          title="World-Class Facilities"
          description="Every facility at Noakhali Club Dhaka is designed to deliver an exceptional experience — from sporting performance to relaxed socialising."
          centered
        />
      </div>

      <Row className="g-4">
        {FACILITIES.map(({ icon, title, desc, tag }) => (
          <Col key={title} lg={4} md={6}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>{icon}</div>
              <div className={styles.cardTag}>{tag}</div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
              <Link to="/facilities" className={styles.cardLink}>
                Learn more <span>→</span>
              </Link>
            </div>
          </Col>
        ))}
      </Row>

      <div className={styles.cta}>
        <AppButton as={Link} to="/facilities" variant="outline" size="lg">
          View All Facilities
        </AppButton>
      </div>
    </Container>
  </section>
);

export default FacilitiesPreview;
