import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from './EventsPage.module.scss';

const FILTERS = ['All Events', 'Sports', 'Cultural', 'Social', 'Annual'];

const EVENTS = [
  {
    id: 1,
    day: '28',
    month: 'Apr',
    type: 'Annual Sports',
    filter: 'Sports',
    title: 'Annual Cricket Tournament 2025',
    venue: 'Mirpur Cricket Ground, Dhaka',
    time: '9:00 AM – 6:00 PM',
    status: 'open',
    statusLabel: 'Registration Open',
  },
  {
    id: 2,
    day: '10',
    month: 'May',
    type: 'Cultural Night',
    filter: 'Cultural',
    title: 'Noakhali Cultural Evening & Baishakhi Utsab',
    venue: 'Club Main Hall, Kafrul',
    time: '6:30 PM – 10:30 PM',
    status: 'soon',
    statusLabel: 'Filling Fast',
  },
  {
    id: 3,
    day: '18',
    month: 'May',
    type: 'Social',
    filter: 'Social',
    title: 'Members Iftar & Networking Dinner',
    venue: 'Club Rooftop Terrace',
    time: '6:00 PM – 9:30 PM',
    status: 'full',
    statusLabel: 'House Full',
  },
  {
    id: 4,
    day: '01',
    month: 'Jun',
    type: 'Sports',
    filter: 'Sports',
    title: 'Inter-District Carrom Championship',
    venue: 'Club Indoor Sports Hall',
    time: '10:00 AM – 5:00 PM',
    status: 'open',
    statusLabel: 'Registration Open',
  },
  {
    id: 5,
    day: '15',
    month: 'Jun',
    type: 'Annual',
    filter: 'Annual',
    title: '7th Foundation Day Celebration',
    venue: 'Club Grounds & Main Hall',
    time: 'All Day Event',
    status: 'open',
    statusLabel: 'Registration Open',
  },
  {
    id: 6,
    day: '28',
    month: 'Jun',
    type: 'Social',
    filter: 'Social',
    title: "Children's Summer Fun Day",
    venue: 'Club Garden & Pool Area',
    time: '9:00 AM – 4:00 PM',
    status: 'open',
    statusLabel: 'Registration Open',
  },
  {
    id: 7,
    day: '12',
    month: 'Jul',
    type: 'Cultural',
    filter: 'Cultural',
    title: 'Annual Photography & Art Exhibition',
    venue: 'Club Gallery Hall',
    time: '11:00 AM – 8:00 PM',
    status: 'open',
    statusLabel: 'Registration Open',
  },
  {
    id: 8,
    day: '20',
    month: 'Jul',
    type: 'Sports',
    filter: 'Sports',
    title: 'Badminton Doubles Tournament',
    venue: 'Club Sports Complex',
    time: '8:00 AM – 4:00 PM',
    status: 'soon',
    statusLabel: 'Filling Fast',
  },
];

const STATS = [
  { num: '7+', label: 'Years Active' },
  { num: '40+', label: 'Events per Year' },
  { num: '500+', label: 'Members' },
  { num: '12+', label: 'Districts Represented' },
];

const EventsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All Events');

  const filtered =
    activeFilter === 'All Events'
      ? EVENTS
      : EVENTS.filter((e) => e.filter === activeFilter);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroPattern} />
        <Container className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Community & Culture</p>
          <h1 className={styles.heroTitle}>Club Events</h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroDesc}>
            Bringing members together through sports, culture, and meaningful
            celebrations across the year.
          </p>
        </Container>
      </div>

      <div className={styles.sectionDivider} />

      {/* ── Events Section ───────────────────────────────── */}
      <section className={styles.eventsSection}>
        <Container>
          <p className={styles.sectionLabel}>Upcoming & Recent</p>
          <h2 className={styles.sectionTitle}>Events Calendar</h2>
          <p className={styles.sectionSubtitle}>
            Stay connected with all club activities. Members must register in
            advance for ticketed events. Guests must be accompanied by members.
          </p>

          {/* Filter */}
          <div className={styles.filterRow}>
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`${styles.filterBtn} ${activeFilter === f ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className={styles.eventsGrid}>
            {filtered.map((event) => (
              <div key={event.id} className={styles.eventCard}>
                <div className={styles.eventCardTop}>
                  <div className={styles.eventDateRow}>
                    <div className={styles.eventDateBox}>
                      <div className={styles.eventDay}>{event.day}</div>
                      <div className={styles.eventMonth}>{event.month}</div>
                    </div>
                    <span className={styles.eventType}>{event.type}</span>
                  </div>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <p className={styles.eventVenue}>📍 {event.venue}</p>
                </div>
                <div className={styles.eventCardBottom}>
                  <span className={styles.eventTime}>⏰ {event.time}</span>
                  <div className={styles.eventActions}>
                    <span className={`${styles.eventStatus} ${styles[`status_${event.status}`]}`}>
                      {event.statusLabel}
                    </span>
                    <button className={styles.eventCta}>
                      {event.status === 'full' ? 'Waitlist' : 'Register'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className={styles.statsBar}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default EventsPage;