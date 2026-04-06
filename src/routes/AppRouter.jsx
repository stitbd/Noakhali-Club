/**
 * Application routes
 * Uses React Router v6 createBrowserRouter + lazy loading
 */

import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LoadingSpinner from '../components/common/LoadingSpinner';

// ── Lazy-loaded page components ──────────────────────────────
const HomePage        = lazy(() => import('../pages/HomePage'));
const LeadershipPage  = lazy(() => import('../pages/LeadershipPage'));
const FacilitiesPage  = lazy(() => import('../pages/FacilitiesPage'));
const GalleryPage     = lazy(() => import('../pages/GalleryPage'));
const ReservationPage = lazy(() => import('../pages/ReservationPage'));
const NotFoundPage    = lazy(() => import('../pages/NotFoundPage'));

// ── Page fallback ────────────────────────────────────────────
const PageFallback = () => (
  <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <LoadingSpinner size="lg" label="Loading page…" />
  </div>
);

// ── Wrap lazy pages with Suspense ────────────────────────────
const withSuspense = (Component) => (
  <Suspense fallback={<PageFallback />}>
    <Component />
  </Suspense>
);

// ── Route definitions ────────────────────────────────────────
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true,          element: withSuspense(HomePage) },
      { path: 'leadership',   element: withSuspense(LeadershipPage) },
      { path: 'facilities',   element: withSuspense(FacilitiesPage) },
      { path: 'gallery',      element: withSuspense(GalleryPage) },
      { path: 'reservation',  element: withSuspense(ReservationPage) },
      { path: '*',            element: withSuspense(NotFoundPage) },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
