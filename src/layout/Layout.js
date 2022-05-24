import React from 'react';

import { Footer, Header } from '../components';
import { Container } from './LayoutStyles';

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
