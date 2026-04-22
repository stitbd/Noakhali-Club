import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import useScrollPosition from '../../../hooks/useScrollPosition';
import config from '../../../utils/config';
import logo from '../../../assets/logo.png';
import styles from './AppNavbar.module.scss';

// Nav items definition (now can include dropdowns)
const NAV_ITEMS = [
  { type: 'link', to: '/', label: 'Home', end: true },
  {
    type: 'dropdown',
    label: 'About',
    items: [
      { to: '/about/history', label: 'History' },
      { to: '/about/speech', label: 'President Speech' }
    ]
  },
  {
    type: 'dropdown',
    label: 'Members',
    items: [
      { to: '/membersList', label: 'Member’s List' },
      { to: '/leadership', label: 'EC Member' },
      { to: '/members/life', label: 'Life Member' },
      { to: '/members/donor', label: 'Donor Member' },
      { to: '/members/permanent', label: 'Permanent Member' },
      { to: '/members/corporate', label: 'Corporate Member' },
      { to: '/members/foreign', label: 'Foreign Member' },
      { to: '/members/honorary', label: 'Honorary Member' },
      { to: '/members/use-club', label: 'Use club Member' },
      { to: '/members/associate', label: 'Associate Member' },
      { to: '/members/diplomate', label: 'Diplomate Member' },
    ]
  },
  { type: 'link', to: '/facilities', label: 'Facilities' },
  { type: 'link', to: '/menu', label: 'Menu' },
  { type: 'link', to: '/events', label: 'Events' },
  {
    type: 'dropdown',
    label: 'Gallery',
    items: [
      { to: '/gallery', label: 'Photo Gallery' },
      { to: '/video', label: 'Video Gallery' }
    ]
  },
  { type: 'link', to: '/notice', label: 'Notice' },
];

const AppNavbar = () => {
  const scrollY = useScrollPosition();
  const [expanded, setExpanded] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  const isScrolled = scrollY > 60;

  const handleMouseEnter = (index) => {
    if (!expanded) {
      setHoveredDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    setHoveredDropdown(null);
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
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
        />

        {/* Nav Links - Right Side */}
        <Navbar.Collapse id="main-nav" className={styles.navCollapse}>
          <Nav className={styles.navLinks}>
            {NAV_ITEMS.map((navItem, i) => {
              if (navItem.type === 'link') {
                const { to, label, end } = navItem;
                return (
                  <Nav.Item key={to}>
                    <NavLink
                      to={to}
                      end={end}
                      className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles['navLink--active'] : ''} ${isScrolled ? styles['navLink--scrolled'] : ''}`
                      }
                      onClick={() => setExpanded(false)}
                    >
                      {label}
                    </NavLink>
                  </Nav.Item>
                );
              }

              // dropdown item
              const { label, items } = navItem;
              const showDropdown = hoveredDropdown === i && !expanded;
              
              return (
                <div
                  key={`dropdown-${i}`}
                  className={`${styles.dropdownWrapper} ${expanded ? styles['dropdownWrapper--mobile'] : ''}`}
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavDropdown
                    title={label}
                    id={`nav-dropdown-${label.toLowerCase().replace(/ /g, '-')}`}
                    show={showDropdown}
                    className={`${styles.dropdown} ${isScrolled ? styles['dropdown--scrolled'] : ''}`}
                  >
                    {items.map((sub, j) => (
                      <NavDropdown.Item
                        key={j}
                        as={Link}
                        to={sub.to}
                        className={styles.dropdownItem}
                        onClick={() => setExpanded(false)}
                      >
                        {sub.label}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                </div>
              );
            })}
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;