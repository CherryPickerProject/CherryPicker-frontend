import React, { useState } from 'react';
import { LandingFilter } from '../components/LandingFilter/LandingFilter';
import PortalLayout from '../layouts/PortalLayout';
import { Timeline } from '../components/Timeline/Timeline';

const App = ({ location: { pathname } } = {}) => {

  // TODO: Retrieve allCategories from API
  const allCategories = ["F&B", "Meeting", "Sports", "Unique", "Outdoor", "Weddings", "Auditorium", "Other"]
  const [active, setActive] = useState('F&B');
  const handleTimelineChange = (name) => {
    setActive(name);
  };

  return (
    <PortalLayout pathname={pathname}>
      <Timeline allCategories={allCategories} active={active} onClick={handleTimelineChange} />
      <LandingFilter category={active} />
    </PortalLayout>
  );
};

export default App;
