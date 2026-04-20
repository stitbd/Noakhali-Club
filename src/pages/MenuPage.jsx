import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from './MenuPage.module.scss';

const CATEGORIES = ['All Items', 'Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Beverages'];

const MENU_ITEMS = [
  {
    id: 1,
    icon: '🍛',
    badge: 'popular',
    badgeLabel: 'Popular',
    name: 'Noakhali Special Bhuna Khichuri',
    desc: 'Aromatic slow-cooked lentil rice with hilsa fry and begun bhaji',
    price: '৳ 350',
    category: 'Lunch',
  },
  {
    id: 2,
    icon: '🐟',
    badge: 'popular',
    badgeLabel: 'Popular',
    name: 'Ilish Bhapa (Hilsa Steamed)',
    desc: 'Premium Padma hilsa steamed in mustard & green chilli paste',
    price: '৳ 650',
    category: 'Lunch',
  },
  {
    id: 3,
    icon: '🥩',
    badge: 'new',
    badgeLabel: 'New',
    name: 'Mutton Rezala',
    desc: 'Tender mutton in aromatic white gravy, Mughal-style preparation',
    price: '৳ 550',
    category: 'Dinner',
  },
  {
    id: 4,
    icon: '🍗',
    badge: null,
    name: 'Deshi Murgi Ranna',
    desc: 'Free-range country chicken cooked with traditional spice blend',
    price: '৳ 420',
    category: 'Dinner',
  },
  {
    id: 5,
    icon: '🥗',
    badge: 'veg',
    badgeLabel: 'Veg',
    name: 'Mixed Vegetable Curry',
    desc: 'Seasonal vegetables in a light, flavourful Bengali gravy',
    price: '৳ 180',
    category: 'Lunch',
  },
  {
    id: 6,
    icon: '🍜',
    badge: null,
    name: 'Club Noodles (Continental)',
    desc: 'Stir-fried noodles with mixed vegetables and choice of protein',
    price: '৳ 280',
    category: 'Snacks',
  },
  {
    id: 7,
    icon: '🫖',
    badge: null,
    name: 'Malai Cha (Milk Tea)',
    desc: 'Traditional thick Bengali milk tea with cardamom & ginger',
    price: '৳ 60',
    category: 'Beverages',
  },
  {
    id: 8,
    icon: '🧁',
    badge: 'new',
    badgeLabel: 'New',
    name: 'Mishti Doi Sundae',
    desc: 'House-set sweet yoghurt with seasonal fruit compote',
    price: '৳ 150',
    category: 'Snacks',
  },
  {
    id: 9,
    icon: '🍳',
    badge: 'veg',
    badgeLabel: 'Veg',
    name: 'Full English Breakfast',
    desc: 'Eggs, toast, grilled tomato, baked beans and mushrooms',
    price: '৳ 320',
    category: 'Breakfast',
  },
  {
    id: 10,
    icon: '🍞',
    badge: 'veg',
    badgeLabel: 'Veg',
    name: 'Club Sandwich',
    desc: 'Three-layer sandwich with fresh vegetables, cheese & sauces',
    price: '৳ 220',
    category: 'Snacks',
  },
  {
    id: 11,
    icon: '🥤',
    badge: null,
    name: 'Fresh Lime Soda',
    desc: 'Freshly squeezed lime with sparkling water, mint and salt or sugar',
    price: '৳ 80',
    category: 'Beverages',
  },
  {
    id: 12,
    icon: '🍚',
    badge: 'popular',
    badgeLabel: 'Popular',
    name: 'Kacchi Biryani (Half)',
    desc: 'Slow-dum Dhaka-style mutton kacchi with borhani',
    price: '৳ 480',
    category: 'Dinner',
  },
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Items');

  const filtered =
    activeCategory === 'All Items'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroPattern} />
        <Container className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Culinary Experience</p>
          <h1 className={styles.heroTitle}>Special Menu</h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroDesc}>
            Savour the finest Bengali cuisine and continental delights crafted
            for our esteemed members.
          </p>
        </Container>
      </div>

      <div className={styles.sectionDivider} />

      {/* ── Menu Section ─────────────────────────────────── */}
      <section className={styles.menuSection}>
        <Container>
          <p className={styles.sectionLabel}>Our Offerings</p>
          <h2 className={styles.sectionTitle}>Dining at the Club</h2>
          <p className={styles.sectionSubtitle}>
            Available exclusively for members and their guests. Orders can be
            placed at the reception or through the club steward.
          </p>

          {/* Category Filter */}
          <div className={styles.filterRow}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className={styles.menuGrid}>
            {filtered.map((item) => (
              <div key={item.id} className={styles.menuCard}>
                <div className={styles.menuIcon}>{item.icon}</div>
                <div className={styles.menuInfo}>
                  {item.badge && (
                    <span className={`${styles.badge} ${styles[`badge_${item.badge}`]}`}>
                      {item.badgeLabel}
                    </span>
                  )}
                  <div className={styles.menuName}>{item.name}</div>
                  <div className={styles.menuDesc}>{item.desc}</div>
                  <div className={styles.menuPrice}>{item.price}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Dining Note */}
          <div className={styles.diningNote}>
            <span className={styles.diningNoteIcon}>📋</span>
            <p className={styles.diningNoteText}>
              <strong>Dining Hours:</strong> Breakfast 7:00–10:00 AM · Lunch
              12:30–3:00 PM · Dinner 7:30–10:30 PM. For large group bookings or
              special arrangements, please contact the Club Manager at least 48
              hours in advance. All prices are inclusive of VAT.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default MenuPage;