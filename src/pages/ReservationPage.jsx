/**
 * ReservationPage — multi-field reservation request form
 * Uses useForm hook + AppInput components
 */

import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import AppInput from '../components/common/AppInput';
import AppButton from '../components/common/AppButton';
import useForm from '../hooks/useForm';
import { submitReservation } from '../services/reservationService';
import styles from './ReservationPage.module.scss';

const FACILITIES = [
  { value: 'swimming-pool',   label: 'Swimming Pool' },
  { value: 'boat-jetty',      label: 'Boat Jetty & Marina' },
  { value: 'gym',             label: 'Gym & Fitness Centre' },
  { value: 'tennis',          label: 'Tennis Courts' },
  { value: 'badminton-squash',label: 'Badminton & Squash' },
  { value: 'restaurant',      label: 'River View Restaurant' },
  { value: 'banquet',         label: 'Grand Banquet Hall' },
  { value: 'members-lounge',  label: "Members' Lounge" },
];

const TIME_SLOTS = [
  { value: '08:00', label: '08:00 AM' },
  { value: '10:00', label: '10:00 AM' },
  { value: '12:00', label: '12:00 PM' },
  { value: '14:00', label: '02:00 PM' },
  { value: '16:00', label: '04:00 PM' },
  { value: '18:00', label: '06:00 PM' },
  { value: '20:00', label: '08:00 PM' },
];

const INITIAL_VALUES = {
  name: '', email: '', phone: '', facilityId: '',
  date: '', time: '', guests: '', notes: '',
};

const validate = (values) => {
  const errors = {};
  if (!values.name.trim())       errors.name       = 'Full name is required.';
  if (!values.email.trim())      errors.email      = 'Email address is required.';
  else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Please enter a valid email.';
  if (!values.phone.trim())      errors.phone      = 'Phone number is required.';
  if (!values.facilityId)        errors.facilityId = 'Please select a facility.';
  if (!values.date)              errors.date       = 'Please select a date.';
  if (!values.time)              errors.time       = 'Please select a time slot.';
  if (!values.guests || isNaN(values.guests) || +values.guests < 1)
                                 errors.guests     = 'Enter a valid number of guests.';
  return errors;
};

const INFO_ITEMS = [
  { icon: '📞', label: 'Phone', value: '+88 01713005821' },
  { icon: '✉',  label: 'Email', value: 'noakhlaiclubdhaka@yahoo.com' },
  { icon: '🕐', label: 'Hours', value: 'Mon–Fri 9AM–6PM, Sat 9AM–3PM' },
  { icon: '📍', label: 'Location', value: 'Gaus-E-Pak Bhaban, 17th Floor, 28/G/1 Toyenbee Circular Road, Motijheel C/A, Dhaka-1000' },
];

const ReservationPage = () => {
  const handleSubmit = async (values) => {
    await submitReservation(values);
  };

  const {
    values, errors, touched, isSubmitting,
    submitError, submitSuccess,
    handleChange, handleBlur, handleSubmit: onSubmit,
  } = useForm(INITIAL_VALUES, validate, handleSubmit);

  // Min date = tomorrow
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split('T')[0];

  return (
    <>
      {/* ── Hero ────────────────────────────────────────── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <Container className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Plan Your Visit</p>
          <h1 className={styles.heroTitle}>Make a Reservation</h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroDesc}>
            Reserve facilities, book dining, or schedule your next event at Noakhali Club Dhaka Ltd.
          </p>
        </Container>
      </div>

      {/* ── Form Section ────────────────────────────────── */}
      <section className={styles.formSection}>
        <Container>
          <Row className="g-5">
            {/* ── Form ────────────────────────────────── */}
            <Col lg={8}>
              <div className={styles.formCard}>
                <div className={styles.formCardHeader}>
                  <h2 className={styles.formTitle}>Reservation Details</h2>
                  <p className={styles.formSubtitle}>
                    Complete the form below and our team will confirm within 24 hours.
                  </p>
                </div>

                {submitSuccess && (
                  <Alert variant="success" className={styles.successAlert}>
                    ✅ Your reservation request has been received! We'll contact you within 24 hours.
                  </Alert>
                )}

                {submitError && (
                  <Alert variant="danger" className={styles.errorAlert}>
                    ⚠ {submitError}
                  </Alert>
                )}

                <form onSubmit={onSubmit} noValidate>
                  {/* ── Personal Info ─────────────────── */}
                  <div className={styles.fieldGroup}>
                    <h3 className={styles.fieldGroupTitle}>Personal Information</h3>
                    <Row className="g-3">
                      <Col md={6}>
                        <AppInput label="Full Name" name="name" type="text"
                          value={values.name} onChange={handleChange} onBlur={handleBlur}
                          error={touched.name && errors.name}
                          placeholder="Your full name" required />
                      </Col>
                      <Col md={6}>
                        <AppInput label="Email Address" name="email" type="email"
                          value={values.email} onChange={handleChange} onBlur={handleBlur}
                          error={touched.email && errors.email}
                          placeholder="you@example.com" required />
                      </Col>
                      <Col md={6}>
                        <AppInput label="Phone Number" name="phone" type="tel"
                          value={values.phone} onChange={handleChange} onBlur={handleBlur}
                          error={touched.phone && errors.phone}
                          placeholder="+880 1XXX XXXXXX" required />
                      </Col>
                      <Col md={6}>
                        <AppInput label="Number of Guests" name="guests" type="number"
                          value={values.guests} onChange={handleChange} onBlur={handleBlur}
                          error={touched.guests && errors.guests}
                          placeholder="e.g. 4" required min="1" max="800" />
                      </Col>
                    </Row>
                  </div>

                  {/* ── Booking Details ───────────────── */}
                  <div className={styles.fieldGroup}>
                    <h3 className={styles.fieldGroupTitle}>Booking Details</h3>
                    <Row className="g-3">
                      <Col md={12}>
                        <AppInput label="Select Facility" name="facilityId" type="select"
                          value={values.facilityId} onChange={handleChange} onBlur={handleBlur}
                          error={touched.facilityId && errors.facilityId}
                          options={FACILITIES} placeholder="Choose a facility" required />
                      </Col>
                      <Col md={6}>
                        <AppInput label="Preferred Date" name="date" type="date"
                          value={values.date} onChange={handleChange} onBlur={handleBlur}
                          error={touched.date && errors.date}
                          min={minDateStr} required />
                      </Col>
                      <Col md={6}>
                        <AppInput label="Preferred Time" name="time" type="select"
                          value={values.time} onChange={handleChange} onBlur={handleBlur}
                          error={touched.time && errors.time}
                          options={TIME_SLOTS} placeholder="Select a time slot" required />
                      </Col>
                      <Col md={12}>
                        <AppInput label="Special Requests / Notes" name="notes" type="textarea"
                          value={values.notes} onChange={handleChange} onBlur={handleBlur}
                          placeholder="Any dietary requirements, accessibility needs, or special arrangements…"
                          rows={4} />
                      </Col>
                    </Row>
                  </div>

                  <div className={styles.formFooter}>
                    <p className={styles.formNote}>
                      * Reservations are subject to availability and member status verification.
                    </p>
                    <AppButton
                      type="submit"
                      variant="gold"
                      size="lg"
                      loading={isSubmitting}
                      disabled={isSubmitting}
                    >
                      Submit Reservation Request
                    </AppButton>
                  </div>
                </form>
              </div>
            </Col>

            {/* ── Sidebar ──────────────────────────── */}
            <Col lg={4}>
              <div className={styles.sidebar}>
                <h3 className={styles.sidebarTitle}>Contact & Information</h3>
                <ul className={styles.infoList}>
                  {INFO_ITEMS.map(({ icon, label, value }) => (
                    <li key={label} className={styles.infoItem}>
                      <span className={styles.infoIcon}>{icon}</span>
                      <div>
                        <span className={styles.infoLabel}>{label}</span>
                        <span className={styles.infoValue}>{value}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className={styles.sidebarNote}>
                  <h4 className={styles.sidebarNoteTitle}>Booking Policy</h4>
                  <ul className={styles.policyList}>
                    <li>Reservations must be made at least 24 hours in advance.</li>
                    <li>Cancellations require 12 hours notice.</li>
                    <li>Facility bookings are for members and authorised guests only.</li>
                    <li>Confirmation will be sent to your registered email.</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ReservationPage;
