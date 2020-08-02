import React, { useState } from 'react';
import { LandingFilter } from '../../components/LandingFilter/LandingFilter';
import PortalLayout from '../../layouts/PortalLayout';
import { Timeline } from '../../components/Timeline/Timeline';
import style from './App.styles';

const App = ({ location: { pathname } } = {}) => {
  // TODO: Retrieve allCategories from API
  const allCategories = [
    'F&B',
    'Meeting',
    'Sports',
    'Unique',
    'Outdoor',
    'Weddings',
    'Auditorium',
    'Other'
  ];
  const [active, setActive] = useState('F&B');
  const handleTimelineChange = (name) => {
    setActive(name);
  };

  return (
    <PortalLayout pathname={pathname}>
      <div style={style.main}>
        <Timeline
          allCategories={allCategories}
          active={active}
          onClick={handleTimelineChange}
        />
        <LandingFilter category={active} />
      </div>
    </PortalLayout>
  );
};

export default App;
