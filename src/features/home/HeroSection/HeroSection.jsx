import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppButton from '../../../components/common/AppButton';
import styles from './HeroSection.module.scss';

import heroBg from '../../../assets/about-main.jpg';
import heroBg2 from '../../../assets/about-main.jpg';
import heroBg3 from '../../../assets/about-main.jpg';

const SLIDES = [
  {
    image: heroBg,
    eyebrow: 'EST. 2017 • FINEST CLUB',
    headline: 'WELCOME TO ',
    highlight: 'Noakhali Club Dhaka Ltd',
    body: 'Want to build a better society',
    cta: 'EXPLORE MEMBERSHIP',
    link: '/membership',
  },
  {
    image: heroBg2,
    eyebrow: 'EST. 2017 • FINEST CLUB',
    headline: 'WELCOME TO ',
    highlight: 'Noakhali Club Dhaka Ltd',
    body: 'Want to build a better society',
    cta: 'EXPLORE MEMBERSHIP',
    link: '/membership',
  },
  {
    image: heroBg3,
    eyebrow: 'EST. 2017 • FINEST CLUB',
    headline: 'WELCOME TO ',
    highlight: 'Noakhali Club Dhaka Ltd',
    body: 'Want to build a better society',
    cta: 'EXPLORE MEMBERSHIP',
    link: '/membership',
  },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);

  // Preload images
  useEffect(() => {
    const images = [];
    SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
      images.push(img);
    });
    setLoadedImages(images);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveSlide((prev) => (prev + 1) % SLIDES.length);
        setIsAnimating(false);
      }, 600);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Scroll to next section
  const scrollToNextSection = () => {
    // Try to find the about section by looking for common patterns
    let nextSection = document.querySelector('[class*="about"], [class*="About"]');

    // If not found, try to find any section after hero
    if (!nextSection) {
      const allSections = document.querySelectorAll('section');
      const heroSection = document.querySelector('[class*="hero"], [class*="Hero"]');
      if (heroSection && allSections.length > 1) {
        const sectionsArray = Array.from(allSections);
        const heroIndex = sectionsArray.indexOf(heroSection);
        if (heroIndex !== -1 && heroIndex + 1 < sectionsArray.length) {
          nextSection = sectionsArray[heroIndex + 1];
        }
      }
    }

    // If still not found, scroll to a position below the hero
    if (!nextSection) {
      window.scrollTo({
        top: window.innerHeight + 100, // Scroll past the hero section
        behavior: 'smooth'
      });
      return;
    }

    // Scroll to the found section
    nextSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const currentSlide = SLIDES[activeSlide];

  return (
    <section className={styles.hero}>
      {/* Background Slides */}
      <div className={styles.bgContainer}>
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`${styles.bgSlide} ${
              index === activeSlide ? styles.active : ''
            } ${index === activeSlide && isAnimating ? styles.fadeOut : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        {/* Overlay */}
        <div className={styles.overlay} />
      </div>

      <Container className={styles.container}>
        <div className={styles.content}>
          {/* Eyebrow */}
          <div className={`${styles.eyebrow} ${isAnimating ? styles.fadeUp : ''}`}>
            {currentSlide.eyebrow}
          </div>

          {/* Headline */}
          <h1 className={`${styles.headline} ${isAnimating ? styles.fadeUp : ''}`}>
            <span className={styles.headlineWhite}>{currentSlide.headline}</span>
            <span className={styles.headlineGold}>{currentSlide.highlight}</span>
          </h1>

          {/* Body */}
          <p className={`${styles.body} ${isAnimating ? styles.fadeUp : ''}`}>
            {currentSlide.body}
          </p>

          {/* CTA Button */}
          <div className={`${styles.ctaWrapper} ${isAnimating ? styles.fadeUp : ''}`}>
            <AppButton
              as={Link}
              to={currentSlide.link}
              variant="gold"
              size="lg"
              className={styles.ctaButton}
            >
              {currentSlide.cta}
              <span className={styles.arrow}>→</span>
            </AppButton>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator} onClick={scrollToNextSection}>
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
        <span className={styles.scrollText}>SCROLL</span>
      </div>
    </section>
  );
};

export default HeroSection;