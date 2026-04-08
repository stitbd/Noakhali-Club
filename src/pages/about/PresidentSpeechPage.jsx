import React from 'react';
import { Container } from 'react-bootstrap';
import SectionHeader from '../../components/common/SectionHeader';

const PresidentSpeechPage = () => (
  <section style={{ padding: '120px 0 80px' }}>
    <Container>
      <SectionHeader subtitle="Message" title="President's Speech" centered />
      <p>President’s message / speech content goes here.</p>
    </Container>
  </section>
);

export default PresidentSpeechPage;