/**
 * MainLayout — wraps all pages with Navbar + Footer
 * Used by the router's <Outlet> pattern
 */

import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AppNavbar from '../components/layout/AppNavbar';
import AppFooter from '../components/layout/AppFooter';
import styles from './MainLayout.module.scss';

const MainLayout = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className={styles.layout}>
      <AppNavbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
};

export default MainLayout;
