/**
 * HeroSection — full-viewport hero for the Home page
 * Animated text, CTA buttons, scroll indicator
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppButton from '../../../components/common/AppButton';
import styles from './HeroSection.module.scss';

const SLIDES = [
  {
    headline: 'Excellence on the Water',
    subheadline: 'Since 1954',
    body: 'A premier sporting and social institution fostering camaraderie, athletic achievement, and the timeless joy of life on the river.',
  },
  {
    headline: 'World-Class Facilities',
    subheadline: 'For Our Members',
    body: 'From our Olympic-grade swimming pool to our fleet of racing boats, every facility is maintained to the highest international standard.',
  },
  {
    headline: 'A Legacy of Champions',
    subheadline: 'Sporting Tradition',
    body: 'Home to national champions and rising stars across rowing, swimming, and water polo — we cultivate greatness in every member.',
  },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActiveSlide((prev) => (prev + 1) % SLIDES.length);
        setAnimating(false);
      }, 500);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[activeSlide];

  return (
    <section className={styles.hero}>
      {/* ── FULL-VIEWPORT BACKGROUND LAYER ───────────────── */}
      <div className={styles.bg}>
        <div className={styles.bgOverlay} />
        <div className={styles.bgPattern} />
      </div>

      {/* ── Decorative Elements ───────────────────────────── */}
      <div className={styles.decorLine} />
      <div className={styles.decorCircle} />

      {/* ── CENTERED CONTENT WRAPPER ──────────────────────── */}
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          <div className={`${styles.content} ${animating ? styles['content--fade'] : ''}`}>
            {/* ── Pre-title ───────────────────────────────── */}
            <div className={styles.preTitle}>
              <span className={styles.preTitleLine} />
              <span className={styles.preTitleText}>Noakhali Club Dhaka Ltd</span>
              <span className={styles.preTitleLine} />
            </div>

            {/* ── Subheadline ─────────────────────────────── */}
            <p className={styles.subheadline}>{slide.subheadline}</p>

            {/* ── Main Headline ───────────────────────────── */}
            <h1 className={styles.headline}>{slide.headline}</h1>

            {/* ── Gold divider ────────────────────────────── */}
            <div className={styles.divider} />

            {/* ── Body ────────────────────────────────────── */}
            <p className={styles.body}>{slide.body}</p>

            {/* ── CTAs ────────────────────────────────────── */}
            <div className={styles.ctas}>
              <AppButton as={Link} to="/reservation" variant="gold" size="lg">
                Book a Reservation
              </AppButton>
              <AppButton as={Link} to="/facilities" variant="outline" size="lg">
                Explore Facilities
              </AppButton>
            </div>

            {/* ── Slide Dots ──────────────────────────────── */}
            <div className={styles.dots}>
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === activeSlide ? styles['dot--active'] : ''}`}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ── Stats Bar ───────────────────────────────────── */}
          <div className={styles.statsBar}>
            {[
              { value: '70+', label: 'Years of Legacy' },
              { value: '5,000+', label: 'Active Members' },
              { value: '20+', label: 'Facilities' },
              { value: '100+', label: 'Championships' },
            ].map(({ value, label }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator ─────────────────────────────── */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;