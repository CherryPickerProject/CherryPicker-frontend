import React, { useState, useEffect, useRef } from 'react';
import { LandingFilter } from '../../components/LandingFilter/LandingFilter';
import PortalLayout from '../../layouts/PortalLayout';
import { Timeline } from '../../components/Timeline/Timeline';
import style from './WelcomePage.styles';
import { getCategories } from '../../config/axios';
import { useErrorStatus } from '../../ErrorHandler';

const WelcomePage = ({ location: { pathname } } = {}) => {
  // Retrieve allCategories from API
  const allCategories = useRef([]);
  const [active, setActive] = useState([]);
  const { setErrorStatusCode } = useErrorStatus();
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await getCategories;
        allCategories.current = response.data.data;
        setActive(allCategories.current[0]);
      } catch (e) {
        // Show error message
        setErrorStatusCode(400);
      }
    }
    fetchCategories();
  }, [setErrorStatusCode]);

  const handleTimelineChange = (activeItem) => {
    setActive(activeItem);
  };

  return (
    <PortalLayout pathname={pathname}>
      {allCategories.current.length > 0 ? (
        <div style={style.main}>
          <Timeline
            allCategories={allCategories.current}
            active={active}
            onClick={handleTimelineChange}
          />
          <LandingFilter category={active} />
        </div>
      )
        : null }
      {/* TODO: Display loading instead of null */}
    </PortalLayout>
  );
};

export default WelcomePage;
