import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/common/SectionHeader';

const NoticePage = () => (
  <section style={{ padding: '120px 0 80px' }}>
    <Container>
      <SectionHeader subtitle="Notice" title="Notice" centered />
      <p>History of Noakhali Club Dhaka Ltd – replace this with your content.</p>
    </Container>
  </section>
);

export default NoticePage;