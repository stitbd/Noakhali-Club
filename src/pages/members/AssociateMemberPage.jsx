import React from 'react';
import { Container } from 'react-bootstrap';
import SectionHeader from '../../components/common/SectionHeader';

const AssociateMemberPage = () => (
  <section style={{ padding: '120px 0 80px' }}>
    <Container>
      <SectionHeader subtitle="Membership" title="Donor Members" centered />
      <p>Donor member list goes here (from data / API or static data).</p>
    </Container>
  </section>
);

export default AssociateMemberPage;