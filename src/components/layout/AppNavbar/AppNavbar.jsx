import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import useScrollPosition from '../../../hooks/useScrollPosition';
import config from '../../../utils/config';
import logo from '../../../assets/logo.png';
import styles from './AppNavbar.module.scss';

const NAV_LINKS = [
  { to: '/',              label: 'Home',        end: true },
  { to: '/about',         label: 'About'        },
  { to: '/leadership',    label: 'EC Members'   },
  { to: '/facilities',    label: 'Facilities'   },
  { to: '/menu',          label: 'Menu'         },
  { to: '/events',        label: 'Events'       },
  { to: '/gallery',       label: 'Gallery'      },
  { to: '/notice',        label: 'Notice'       },
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
      <Container fluid className={styles.navContainer}>
        {/* Brand / Logo - Left Side */}
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className={styles.brand} 
          onClick={() => setExpanded(false)}
        >
          <div className={styles.brandLogo}>
            <img 
              src={logo} 
              alt={`${config.site.name} Logo`} 
              className={styles.logoImg}
            />
          </div>
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle
          aria-controls="main-nav"
          className={styles.toggle}
        >
          <span className={`${styles.toggleBar} ${expanded ? styles['toggleBar--open'] : ''}`} />
          <span className={`${styles.toggleBar} ${expanded ? styles['toggleBar--open'] : ''}`} />
          <span className={`${styles.toggleBar} ${expanded ? styles['toggleBar--open'] : ''}`} />
        </Navbar.Toggle>

        {/* Nav Links - Centered */}
        <Navbar.Collapse id="main-nav" className={styles.navCollapse}>
          <div className={styles.navCenterWrapper}>
            <Nav className={styles.navLinks}>
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
            </Nav>

            {/* CTA Button */}
            <div className={styles.ctaWrap}>
              <Link
                to="/reservation"
                className={styles.ctaBtn}
                onClick={() => setExpanded(false)}
              >
                Reservation
              </Link>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;