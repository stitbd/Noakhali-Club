/**
 * AppNavbar — site-wide navigation
 * - Transparent on top, solid on scroll
 * - Active link highlighting via React Router
 * - Mobile responsive with hamburger toggle
 */

import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import useScrollPosition from '../../../hooks/useScrollPosition';
import config from '../../../utils/config';
// ✅ Import logo image from assets
import logo from '../../../assets/logo.png';
import styles from './AppNavbar.module.scss';

const NAV_LINKS = [
  { to: '/',              label: 'Home',        end: true },
  { to: '/about',         label: 'About'   },
  { to: '/leadership',    label: 'EC Members'   },
  { to: '/facilities',    label: 'Facilities'   },
  { to: '/menu',          label: 'Menu'  },
  { to: '/events',        label: 'Events'  },
  { to: '/gallery',       label: 'Gallery'      },
  { to: '/notice',        label: 'Notice'  },
];

const AppNavbar = () => {
  const scrollY = useScrollPosition();
  const [expanded, setExpanded] = useState(false);

  const isScrolled = scrollY > 60;

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      className={`${styles.navbar} ${isScrolled ? styles['navbar--scrolled'] : ''}`}
      fixed="top"
    >
      <Container>
        {/* ── Brand / Logo ───────────────────────────── */}
        <Navbar.Brand as={Link} to="/" className={styles.brand} onClick={() => setExpanded(false)}>
          {/* ✅ Logo Image with transparent background */}
          <div className={styles.brandLogo}>
            <img 
              src={logo} 
              alt={`${config.site.name} Logo`} 
              className={styles.logoImg}
            />
          </div>
        </Navbar.Brand>

        {/* ── Mobile Toggle ──────────────────────────── */}
        <Navbar.Toggle
          aria-controls="main-nav"
          className={styles.toggle}
        >
          <span className={`${styles.toggleBar} ${expanded ? styles['toggleBar--open'] : ''}`} />
          <span className={`${styles.toggleBar} ${expanded ? styles['toggleBar--open'] : ''}`} />
          <span className={`${styles.toggleBar} ${expanded ? styles['toggleBar--open'] : ''}`} />
        </Navbar.Toggle>

        {/* ── Nav Links ──────────────────────────────── */}
        <Navbar.Collapse id="main-nav">
          <Nav className={`ms-auto ${styles.navLinks}`}>
            {NAV_LINKS.map(({ to, label, end }) => (
              <Nav.Item key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles['navLink--active'] : ''}`
                  }
                  onClick={() => setExpanded(false)}
                >
                  {label}
                </NavLink>
              </Nav.Item>
            ))}

            {/* ── CTA Button ─────────────────────────── */}
            <Nav.Item className={styles.ctaWrap}>
              <Link
                to="/reservation"
                className={styles.ctaBtn}
                onClick={() => setExpanded(false)}
              >
                Reservation
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;