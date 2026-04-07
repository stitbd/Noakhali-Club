import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppButton from '../../../components/common/AppButton';
import styles from './HeroSection.module.scss';

const SLIDES = [
  { headline: 'Excellence on the Water',  subheadline: 'Since 1954',        body: 'A premier sporting and social institution fostering camaraderie, athletic achievement, and the timeless joy of life on the river.' },
  { headline: 'World-Class Facilities',   subheadline: 'For Our Members',   body: 'From our Olympic-grade swimming pool to our fleet of racing boats, every facility is maintained to the highest international standard.' },
  { headline: 'A Legacy of Champions',    subheadline: 'Sporting Tradition', body: 'Home to national champions and rising stars across rowing, swimming, and water polo — we cultivate greatness in every member.' },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [animating, setAnimating]     = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setAnimating(true);
      setTimeout(() => { setActiveSlide(p => (p + 1) % SLIDES.length); setAnimating(false); }, 500);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const slide = SLIDES[activeSlide];

  return (
    /* section = full-width dark background */
    <section className={styles.hero}>
      {/* Background fills 100vw */}
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.bgDots} />
        <div className={styles.bgGlow} />
        <div className={styles.bgFade} />
      </div>
      <div className={styles.decorLine}   aria-hidden="true" />
      <div className={styles.decorCircle} aria-hidden="true" />

      {/* Bootstrap Container keeps content readable */}
      <Container className={styles.inner}>
        {/* Text block */}
        <div className={`${styles.content} ${animating ? styles['content--fade'] : ''}`}>
          <div className={styles.preTitle}>
            <span className={styles.preLine} />
            <span className={styles.preText}>Noakhali Club Dhaka</span>
            <span className={styles.preLine} />
          </div>

          <p className={styles.subheadline}>{slide.subheadline}</p>
          <h1 className={styles.headline}>{slide.headline}</h1>
          <div className={styles.divider} />
          <p className={styles.body}>{slide.body}</p>

          <div className={styles.ctas}>
            <AppButton as={Link} to="/reservation" variant="gold"    size="lg">Book a Reservation</AppButton>
            <AppButton as={Link} to="/facilities"  variant="outline" size="lg">Explore Facilities</AppButton>
          </div>

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

        {/* Stats bar */}
        <div className={styles.statsBar}>
          {[
            { value: '10+',    label: 'Years of Legacy' },
            { value: '1,000+', label: 'Active Members'  },
            { value: '20+',    label: 'Facilities'      },
            { value: '15+',   label: 'Championships'   },
          ].map(({ value, label }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statValue}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </Container>

      {/* Scroll hint */}
      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.mouse}><div className={styles.wheel} /></div>
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;
