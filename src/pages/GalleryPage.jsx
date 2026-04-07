/**
 * GalleryPage — photo gallery with category filter and lightbox
 */

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppModal from '../components/common/AppModal';
import styles from './GalleryPage.module.scss';

const CATEGORIES = ['All', 'Events', 'Sports', 'Facilities', 'Members', 'Awards'];

// Import all gallery images (Vite-compatible)
const galleryModules = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

const galleryImages = Object.fromEntries(
  Object.entries(galleryModules).map(([path, module]) => [path.split('/').pop(), module]),
);

// Create gallery items with real images
const GALLERY_ITEMS = [
  // Events (5 images)
  { id: 1, category: 'Events', title: 'Annual Gala Dinner', image: galleryImages['01.jpg'], year: 2024 },
  { id: 2, category: 'Events', title: 'Welcome Party', image: galleryImages['02.jpg'], year: 2024 },
  { id: 3, category: 'Events', title: 'Christmas Celebration', image: galleryImages['03.jpg'], year: 2023 },
  { id: 4, category: 'Events', title: 'New Year Bash', image: galleryImages['04.jpg'], year: 2024 },
  { id: 5, category: 'Events', title: 'Club Anniversary', image: galleryImages['05.jpg'], year: 2023 },
  
  // Sports (5 images)
  { id: 6, category: 'Sports', title: 'Cricket Tournament', image: galleryImages['06.jpg'], year: 2024 },
  { id: 7, category: 'Sports', title: 'Football Championship', image: galleryImages['07.jpg'], year: 2023 },
  { id: 8, category: 'Sports', title: 'Tennis Match', image: galleryImages['08.jpg'], year: 2024 },
  { id: 9, category: 'Sports', title: 'Swimming Competition', image: galleryImages['09.jpg'], year: 2023 },
  { id: 10, category: 'Sports', title: 'Marathon Day', image: galleryImages['10.jpg'], year: 2024 },
  
  // Facilities (3 images)
  { id: 11, category: 'Facilities', title: 'Swimming Pool', image: galleryImages['11.jpg'], year: 2024 },
  { id: 12, category: 'Facilities', title: 'Gym Center', image: galleryImages['12.jpg'], year: 2023 },
  { id: 13, category: 'Facilities', title: 'Club Restaurant', image: galleryImages['13.jpg'], year: 2024 },
  
  // Members (4 images)
  { id: 14, category: 'Members', title: 'Member Meetup', image: galleryImages['14.jpg'], year: 2024 },
  { id: 15, category: 'Members', title: 'Family Day', image: galleryImages['15.jpg'], year: 2023 },
  { id: 16, category: 'Members', title: 'Club Retreat', image: galleryImages['16.jpg'], year: 2024 },
  { id: 17, category: 'Members', title: 'Volunteer Appreciation', image: galleryImages['17.jpg'], year: 2023 },
  
  // Awards (3 images)
  { id: 18, category: 'Awards', title: 'Best Club Award', image: galleryImages['01.jpg'], year: 2024 },
  { id: 19, category: 'Awards', title: 'Sports Excellence', image: galleryImages['02.jpg'], year: 2023 },
  { id: 20, category: 'Awards', title: 'Community Service Award', image: galleryImages['03.jpg'], year: 2024 },
];

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
                  <div className={styles.itemBg}>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className={styles.itemImage}
                    />
                  </div>
                  <div className={styles.itemOverlay}>
                    <span className={styles.itemCategory}>{item.category}</span>
                    <span className={styles.itemTitle}>{item.title}</span>
                    <span className={styles.itemYear}>{item.year}</span>
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
              <img 
                src={lightboxItem.image} 
                alt={lightboxItem.title}
                className={styles.lightboxImage}
              />
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
