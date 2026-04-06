/**
 * GalleryPage — photo gallery with category filter and lightbox
 */

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppModal from '../components/common/AppModal';
import styles from './GalleryPage.module.scss';

const CATEGORIES = ['All', 'Events', 'Sports', 'Facilities', 'Members', 'Awards'];

// Placeholder gallery items (replace with real API data)
const GALLERY_ITEMS = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  category: CATEGORIES[1 + (i % (CATEGORIES.length - 1))],
  title: `Gallery Photo ${i + 1}`,
  icon: ['🏆', '⛵', '🏊', '🎉', '🚣', '🥇', '🎾', '🌊', '🍽️'][i % 9],
  year: 2020 + (i % 5),
}));

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState(null);

  const filtered = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <Container className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Our Moments</p>
          <h1 className={styles.heroTitle}>Photo Gallery</h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroDesc}>
            Relive the celebrations, championships, and cherished moments of club life.
          </p>
        </Container>
      </div>

      {/* ── Filter ────────────────────────────────────────── */}
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

      {/* ── Gallery Grid ──────────────────────────────────── */}
      <section className={styles.gallery}>
        <Container>
          <p className={styles.resultCount}>
            Showing <strong>{filtered.length}</strong> photos
            {activeCategory !== 'All' && ` in ${activeCategory}`}
          </p>

          <Row className="g-3">
            {filtered.map((item) => (
              <Col key={item.id} lg={3} md={4} sm={6} xs={6}>
                <div
                  className={styles.item}
                  onClick={() => setLightboxItem(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setLightboxItem(item)}
                  aria-label={`View ${item.title}`}
                >
                  {/* Placeholder image box */}
                  <div className={styles.itemBg}>
                    <span className={styles.itemIcon}>{item.icon}</span>
                  </div>
                  <div className={styles.itemOverlay}>
                    <span className={styles.itemCategory}>{item.category}</span>
                    <span className={styles.itemTitle}>{item.title}</span>
                    <span className={styles.itemZoom}>🔍</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ── Lightbox Modal ────────────────────────────────── */}
      <AppModal
        show={!!lightboxItem}
        onHide={() => setLightboxItem(null)}
        title={lightboxItem?.title}
        size="lg"
      >
        {lightboxItem && (
          <div className={styles.lightbox}>
            <div className={styles.lightboxImg}>
              <span className={styles.lightboxIcon}>{lightboxItem.icon}</span>
            </div>
            <div className={styles.lightboxMeta}>
              <span className={styles.lightboxCategory}>{lightboxItem.category}</span>
              <h3 className={styles.lightboxTitle}>{lightboxItem.title}</h3>
              <p className={styles.lightboxYear}>Year: {lightboxItem.year}</p>
            </div>
          </div>
        )}
      </AppModal>
    </>
  );
};

export default GalleryPage;
