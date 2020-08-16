import React, { useState, useEffect, useRef } from 'react';
import { LandingFilter } from '../../components/LandingFilter/LandingFilter';
import PortalLayout from '../../layouts/PortalLayout';
import { Timeline } from '../../components/Timeline/Timeline';
import style from './WelcomePage.styles';
import CherryPickerApi from '../../api/CherryPickerApi';
import { useErrorStatus } from '../../ErrorHandler';
import LoadSpinner from '../../components/LoadSpinner/LoadSpinner';

const WelcomePage = ({ location: { pathname } } = {}) => {

  const allCategories = useRef([]);
  const [active, setActive] = useState();
  const { setErrorStatusCode } = useErrorStatus();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await CherryPickerApi.getCategories();
        allCategories.current = response.data;
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
          <LandingFilter categoryProp={active} />
        </div>
      )
        : (
          // Display loading spinner
          <LoadSpinner />
        )}
    </PortalLayout>
  );
};

export default WelcomePage;
