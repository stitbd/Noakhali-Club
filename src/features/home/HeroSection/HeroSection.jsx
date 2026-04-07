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
    headline: 'WELCOME TO Noakhali',
    highlight: 'Club Dhaka',
    body: 'Experience the pinnacle of recreation and prestige on the banks of the Turag.',
    cta: 'EXPLORE MEMBERSHIP',
    link: '/membership',
  },
  {
    image: heroBg2,
    eyebrow: 'PREMIER FACILITIES',
    headline: 'WORLD-CLASS',
    highlight: 'AMENITIES',
    body: 'From Olympic-grade pools to fine dining, discover facilities that exceed expectations.',
    cta: 'VIEW FACILITIES',
    link: '/facilities',
  },
  {
    image: heroBg3,
    eyebrow: 'SINCE 2026',
    headline: 'A LEGACY OF',
    highlight: 'EXCELLENCE',
    body: 'Join a distinguished community of members who value tradition, sport, and camaraderie.',
    cta: 'JOIN THE CLUB',
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

          {/* Slide Indicators */}
          <div className={styles.indicators}>
            {SLIDES.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${
                  index === activeSlide ? styles.active : ''
                }`}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveSlide(index);
                    setIsAnimating(false);
                  }, 300);
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
        <span className={styles.scrollText}>SCROLL</span>
      </div>
    </section>
  );
};

export default HeroSection;