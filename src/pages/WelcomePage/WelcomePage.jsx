import React, { useState, useEffect, useRef } from 'react';
import {
  Grid, Image, Divider
} from 'semantic-ui-react';
import { LandingFilter } from '../../components/LandingFilter/LandingFilter';
import PortalLayout from '../../layouts/PortalLayout';
import { Timeline } from '../../components/Timeline/Timeline';
import style, { Container } from './WelcomePage.styles';
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
          <Container>
            <Grid relaxed="very" columns={3}>
              <Timeline
                allCategories={allCategories.current}
                active={active}
                onClick={handleTimelineChange}
              />
              <Grid.Column mobile={4} tablet={3} computer={2} />
              <Grid.Column mobile={12} tablet={8} computer={6}>
                <LandingFilter categoryProp={active} />
              </Grid.Column>
              <Divider hidden />
              <Grid.Column mobile={8} tablet={6} computer={4}>
                <Image.Group>
                  <Image src={active['topTwoPhotos'][0]} />
                  <Image src={active['topTwoPhotos'][1]} />
                </Image.Group>
              </Grid.Column>
            </Grid>
          </Container>
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
