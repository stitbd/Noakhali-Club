import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from './NoticePage.module.scss';

const NOTICES = [
  {
    id: 'pinned',
    pinned: true,
    tags: [{ label: 'Urgent', type: 'urgent' }, { label: 'Pinned', type: 'pinned' }],
    title: 'Annual General Meeting (AGM) 2025 — Notice & Agenda',
    excerpt:
      'The Executive Committee hereby notifies all members that the 8th AGM will be held at the Club Hall on May 5, 2025 at 3:00 PM. Agenda includes election of new committee members, budget approval for FY2025–26 and amendments to the club constitution.',
    date: 'April 15, 2025',
  },
  {
    id: 1,
    pinned: false,
    tags: [{ label: 'Financial', type: 'financial' }],
    title: 'Annual Membership Renewal 2025–26 — Last Date April 30',
    excerpt:
      'Members are kindly reminded to renew their annual membership before April 30, 2025 to avoid a late fee surcharge of ৳500. Payment can be made at the reception or via bKash to the club account.',
    date: 'April 10, 2025',
  },
  {
    id: 2,
    pinned: false,
    tags: [{ label: 'Sports', type: 'sports' }],
    title: 'Cricket Team Selection for Annual Tournament 2025',
    excerpt:
      'Interested members wishing to participate in the annual cricket tournament must register with the Sports Secretary by April 25, 2025. A trial session will be held on April 27 at 8:00 AM at the ground.',
    date: 'April 8, 2025',
  },
  {
    id: 3,
    pinned: false,
    tags: [{ label: 'Cultural', type: 'cultural' }],
    title: 'Cultural Sub-Committee Formation — Volunteers Sought',
    excerpt:
      'The club is forming a new Cultural Sub-Committee to organise and manage events throughout the year. Members interested in joining are requested to submit their names and contact details to the Cultural Secretary before May 1.',
    date: 'April 5, 2025',
  },
  {
    id: 4,
    pinned: false,
    tags: [{ label: 'General', type: 'general' }],
    title: 'Club Premises Renovation — Temporary Closure of Dining Hall',
    excerpt:
      'Due to scheduled renovation work, the Main Dining Hall will remain closed from April 20–25, 2025. Members may use the Lounge Café during this period. We apologise for any inconvenience caused.',
    date: 'April 1, 2025',
  },
  {
    id: 5,
    pinned: false,
    tags: [{ label: 'General', type: 'general' }],
    title: 'New Member Induction Ceremony — Welcome to the Club',
    excerpt:
      'The club warmly welcomes 18 new members inducted in Q1 2025. An induction ceremony will be held on May 12, 2025 at 6:00 PM. All existing members are invited to attend and extend a warm welcome.',
    date: 'March 28, 2025',
  },
  {
    id: 6,
    pinned: false,
    tags: [{ label: 'Financial', type: 'financial' }],
    title: 'Audit Report FY2024–25 Available for Member Review',
    excerpt:
      'The independently audited financial report for fiscal year 2024–25 is now available at the club secretariat. Members may review the report during office hours (10AM–5PM, Sunday–Thursday) or request a copy by email.',
    date: 'March 20, 2025',
  },
  {
    id: 7,
    pinned: false,
    tags: [{ label: 'Sports', type: 'sports' }],
    title: 'New Gym Equipment Installed — Open to All Members',
    excerpt:
      'The club is pleased to announce the installation of new fitness equipment in the gymnasium. The gym is now open from 6:00 AM to 10:00 PM daily. Members are requested to follow the usage guidelines posted at the entrance.',
    date: 'March 15, 2025',
  },
];

const NoticePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const nonPinnedNotices = NOTICES.filter((n) => !n.pinned);
  const pinnedNotice = NOTICES.find((n) => n.pinned);
  const serialNotices = nonPinnedNotices.slice(0, 6);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroPattern} />
        <Container className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Official Communication</p>
          <h1 className={styles.heroTitle}>Notice Board</h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroDesc}>
            Official announcements, circulars and updates for all club members
            and stakeholders.
          </p>
        </Container>
      </div>

      <div className={styles.sectionDivider} />

      {/* ── Notice Section ───────────────────────────────── */}
      <section className={styles.noticeSection}>
        <Container>
          <p className={styles.sectionLabel}>Announcements</p>
          <h2 className={styles.sectionTitle}>Latest Notices</h2>
          <p className={styles.sectionSubtitle}>
            All official communications from the Executive Committee. Members
            are requested to read all notices carefully and respond as required.
          </p>

          {/* Urgent Banner */}
          <div className={styles.urgentBanner}>
            <div className={styles.urgentIcon}>⚠</div>
            <div>
              <div className={styles.urgentTitle}>
                Urgent: Annual General Meeting — Action Required
              </div>
              <div className={styles.urgentText}>
                All life members and general members are required to confirm
                attendance for the AGM scheduled on{' '}
                <strong>May 5, 2025</strong>. Proxy forms must be submitted by
                April 30. Contact the Secretary for details.
              </div>
            </div>
          </div>

          {/* Notice List */}
          <div className={styles.noticeList}>
            {/* Pinned Notice */}
            {pinnedNotice && (
              <div className={`${styles.noticeItem} ${styles.noticePinned}`}>
                <span className={styles.pinIcon}>📌</span>
                <div className={styles.noticeBody}>
                  <div className={styles.noticeTags}>
                    {pinnedNotice.tags.map((tag) => (
                      <span key={tag.label} className={`${styles.tag} ${styles[`tag_${tag.type}`]}`}>
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  <h3 className={styles.noticeTitle}>{pinnedNotice.title}</h3>
                  <p className={styles.noticeExcerpt}>{pinnedNotice.excerpt}</p>
                  <div className={styles.noticeMeta}>
                    <span className={styles.noticeDate}>{pinnedNotice.date}</span>
                    <button className={styles.readMore}>Read Full →</button>
                  </div>
                </div>
              </div>
            )}

            {/* Serial Notices */}
            {serialNotices.map((notice, idx) => (
              <div key={notice.id} className={styles.noticeItem}>
                <span className={styles.noticeNum}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className={styles.noticeBody}>
                  <div className={styles.noticeTags}>
                    {notice.tags.map((tag) => (
                      <span key={tag.label} className={`${styles.tag} ${styles[`tag_${tag.type}`]}`}>
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  <h3 className={styles.noticeTitle}>{notice.title}</h3>
                  <p className={styles.noticeExcerpt}>{notice.excerpt}</p>
                  <div className={styles.noticeMeta}>
                    <span className={styles.noticeDate}>{notice.date}</span>
                    <button className={styles.readMore}>Read Full →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className={styles.pagination}>
            <button
              className={styles.pgArrow}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              ‹
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                className={`${styles.pgBtn} ${currentPage === p ? styles.pgBtnActive : ''}`}
                onClick={() => setCurrentPage(p)}
              >
                {p}
              </button>
            ))}
            <button
              className={styles.pgArrow}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              ›
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NoticePage;