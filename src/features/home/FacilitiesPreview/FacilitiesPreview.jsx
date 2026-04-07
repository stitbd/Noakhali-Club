import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SectionHeader from '../../../components/common/SectionHeader';
import AppButton from '../../../components/common/AppButton';
import styles from './FacilitiesPreview.module.scss';

const FACILITIES = [
  {
    id: 1,
    icon: '🏛️',
    title: 'Conference Hall',
    category: 'Events',
    tag: null,
    desc: 'A fully equipped modern conference hall with state-of-the-art audiovisual systems, high-speed Wi-Fi, and executive seating. Perfect for corporate meetings, seminars, and private gatherings.',
    features: ['AV equipment', 'High-speed Wi-Fi', 'Executive seating', 'Catering available'],
  },
  {
    id: 2,
    icon: '🥖',
    title: 'Bakery',
    category: 'Dining',
    tag: null,
    desc: 'Freshly baked artisanal breads, pastries, and cakes daily. Our master bakers use traditional techniques and premium ingredients to create delightful treats for members.',
    features: ['Fresh daily', 'Artisanal breads', 'Custom cakes', 'Takeaway available'],
  },
  {
    id: 3,
    icon: '💪',
    title: 'Gym & Fitness Centre',
    category: 'Fitness',
    tag: null,
    desc: 'Modern gymnasium with premium cardio equipment, free weights, resistance machines, and a dedicated stretching and yoga studio. Personal trainers available.',
    features: ['Latest equipment', 'Personal trainers', 'Yoga studio', 'Open 6AM – 10PM'],
  },
  {
    id: 4,
    icon: '🎾',
    title: 'Indoor Sports',
    category: 'Sports',
    tag: null,
    desc: 'Multi-purpose indoor sports arena featuring basketball, volleyball, and futsal courts with professional-grade flooring and lighting systems.',
    features: ['Basketball court', 'Volleyball net', 'Futsal ready', 'Spectator area'],
  },
  {
    id: 5,
    icon: '🛋️',
    title: 'Lobby',
    category: 'Events',
    tag: null,
    desc: 'Elegantly designed central lobby with comfortable seating, ambient lighting, and a welcoming atmosphere. Ideal for informal meetings, reading, or relaxing.',
    features: ['Comfortable seating', 'Ambient lighting', 'Reading area', 'Refreshment corner'],
  },
  {
    id: 6,
    icon: '📚',
    title: 'Library',
    category: 'Events',
    tag: null,
    desc: 'A quiet, well-stocked library with a vast collection of books, journals, and digital resources. Cozy reading nooks and study carrels for focused work.',
    features: ['Wide book collection', 'Digital resources', 'Reading nooks', 'Silent study area'],
  },
];

const FacilitiesPreview = () => (
  /* section = full-width background */
  <section className={styles.section}>
    {/* Bootstrap Container keeps content readable */}
    <Container>
        <SectionHeader
          subtitle="What We Offer"
            titlePart1="World-Class"
            titlePart2="Facilities"
            description="Every facility at Noakhali Club Dhaka is designed to deliver an exceptional experience — from sporting performance to relaxed socialising."
            centered={true}
            variant="dark"
        />

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
