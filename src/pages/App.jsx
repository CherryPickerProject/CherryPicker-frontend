import React, { useState } from 'react';
import LandingFilter from '../components/LandingFilter/LandingFilter';
import PortalLayout from '../layouts/PortalLayout';
import Timeline from '../components/Timeline/Timeline';

const App = ({ location: { pathname } } = {}) => {
  const [category, setCategory] = useState('Party');
  const handleTimelineChange = (name, e) => {
    e.preventDefault();
    [...document.getElementById('categoryList').children].forEach((child) => {
      child.classList.remove('active');
    });
    document.getElementById(name).classList.add('active');
    setCategory(name);
  };

  return (
    <PortalLayout pathname={pathname}>
      <Timeline onClick={handleTimelineChange} />
      <LandingFilter category={category} />
    </PortalLayout>
  );
};

export default App;
