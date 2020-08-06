import React from 'react';
import AboutUs from '../../components/AboutUs/AboutUs';
import PortalLayout from '../../layouts/PortalLayout';

const App = ({ location: { pathname } = {} } = {}) => (
  <PortalLayout pathname={pathname}>
    <AboutUs />
  </PortalLayout>
);

export default App;
