/**
 * FacilitiesPage — full club facilities listing
 */

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/common/SectionHeader';
import AppButton from '../components/common/AppButton';
import styles from './FacilitiesPage.module.scss';

const CATEGORIES = ['All', 'Aquatics', 'Sports', 'Dining', 'Events', 'Fitness'];

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
    icon: '🛋️',
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

const FacilitiesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? FACILITIES
    : FACILITIES.filter((f) => f.category === activeCategory);

  return (
    <>
      {/* ── Page Hero ──────────────────────────────────── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <Container className={styles.heroContent}>
          <p className={styles.heroEyebrow}>What We Offer</p>
          <h1 className={styles.heroTitle}>Club Facilities</h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroDesc}>
            Every amenity crafted for excellence — from competitive sports to refined leisure.
          </p>
        </Container>
      </div>

      {/* ── Category Filter ─────────────────────────────── */}
      <section className={styles.filterSection}>
        <Container>
          <div className={styles.filters}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles['filterBtn--active'] : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Facilities Grid ─────────────────────────────── */}
      <section className={styles.facilitiesSection}>
        <Container>
          <Row className="g-4">
            {filtered.map((facility) => (
              <Col key={facility.id} lg={4} md={6}>
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>{facility.icon}</div>
                    {facility.tag && (
                      <span className={styles.cardTag}>{facility.tag}</span>
                    )}
                  </div>
                  <span className={styles.cardCategory}>{facility.category}</span>
                  <h3 className={styles.cardTitle}>{facility.title}</h3>
                  <p className={styles.cardDesc}>{facility.desc}</p>
                  <ul className={styles.featureList}>
                    {facility.features.map((f) => (
                      <li key={f} className={styles.featureItem}>
                        <span className={styles.featureDot} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
          </Row>

          {/* ── Reservation CTA ───────────────────────── */}
          <div className={styles.bottomCta}>
            <div className={styles.ctaBox}>
              <h3 className={styles.ctaTitle}>Ready to Experience Our Facilities?</h3>
              <p className={styles.ctaDesc}>
                Book a facility tour or make a reservation for your next visit.
              </p>
              <AppButton as={Link} to="/reservation" variant="gold" size="lg">
                Make a Reservation
              </AppButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FacilitiesPage;
