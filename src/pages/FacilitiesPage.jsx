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
    icon: '🏊',
    title: 'Olympic Swimming Pool',
    category: 'Aquatics',
    tag: 'Flagship',
    desc: 'A fully heated, 50-metre Olympic-standard swimming pool open year-round. Equipped with electronic timing systems, spectator seating for 500, and a separate learner\'s pool.',
    features: ['50m Olympic standard', 'Heated & filtered', 'Flood-lit for evenings', 'Trained lifeguards'],
  },
  {
    id: 2,
    icon: '⛵',
    title: 'Boat Jetty & Marina',
    category: 'Aquatics',
    tag: 'Signature',
    desc: 'Our state-of-the-art jetty on the Buriganga River offers berthing for sailing dinghies, motorboats, kayaks, and canoes. Home to our prestigious rowing squad.',
    features: ['River frontage', 'Boat storage', 'Rowing & kayaking', 'Motorboat hire'],
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
    title: 'Tennis Courts',
    category: 'Sports',
    tag: null,
    desc: 'Four all-weather tennis courts with flood lighting for evening play. Professional coaching available for all skill levels, from beginner to competitive.',
    features: ['4 all-weather courts', 'Flood-lit', 'Pro coaching', 'Racket hire'],
  },
  {
    id: 5,
    icon: '🏸',
    title: 'Badminton & Squash',
    category: 'Sports',
    tag: null,
    desc: 'Six indoor badminton courts and two professional squash courts, all with sprung floors and climate control for optimal performance.',
    features: ['6 badminton courts', '2 squash courts', 'Climate controlled', 'Equipment hire'],
  },
  {
    id: 6,
    icon: '🍽️',
    title: 'The River View Restaurant',
    category: 'Dining',
    tag: 'Popular',
    desc: 'Our signature dining destination offering panoramic views of the Buriganga River. Serving Bangladeshi classics and international cuisine from breakfast through dinner.',
    features: ['River view terrace', 'À la carte & buffet', 'Private dining rooms', 'Catering service'],
  },
  {
    id: 7,
    icon: '☕',
    title: 'Members\' Lounge & Bar',
    category: 'Dining',
    tag: null,
    desc: 'A refined social space for members to relax, network, and unwind. Featuring a well-stocked bar, live music on weekends, and a curated tea and coffee menu.',
    features: ['Full bar service', 'Weekend live music', 'Club library', 'Billiards room'],
  },
  {
    id: 8,
    icon: '🎉',
    title: 'Grand Banquet Hall',
    category: 'Events',
    tag: null,
    desc: 'An elegant ballroom accommodating up to 800 guests, ideal for galas, corporate events, weddings, and national celebrations. Full AV and catering support.',
    features: ['800-guest capacity', 'Full AV system', 'In-house catering', 'Event coordination'],
  },
  {
    id: 9,
    icon: '🌊',
    title: 'Water Polo Arena',
    category: 'Aquatics',
    tag: null,
    desc: 'Dedicated water polo facility with a competition-standard pool, goal posts, and viewing gallery. Home to the DBC Water Polo Championship held annually.',
    features: ['Competition pool', 'Spectator gallery', 'Annual championship', 'Training programs'],
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
