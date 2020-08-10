import React, { useState } from 'react';
import { LandingFilter } from '../../components/LandingFilter/LandingFilter';
import PortalLayout from '../../layouts/PortalLayout';
import { Timeline } from '../../components/Timeline/Timeline';
import style from './WelcomePage.styles';

const WelcomePage = ({ location: { pathname } } = {}) => {
  // TODO: Retrieve allCategories from API
  const allCategories = [
    {
      categoryName: 'F&B',
      description: 'Explore our list of restaurants and Cafes which make great places for meetings or celebrations.',
      images: ['https://react.semantic-ui.com/images/wireframe/image.png', 'https://react.semantic-ui.com/images/wireframe/image.png']
    }, {
      categoryName: 'Meeting',
      description: 'Explore our list of ballrooms, conference halls or classrooms which can help host your next company event or something as simple as a group project meeting.'
    }, {
      categoryName: 'Sports',
      description: 'Check out our list of sports facilities where you can organise the next fun bonding activity for you and your friends.'
    }, {
      categoryName: 'Unique',
      description: 'Finding the next unique venue to host your event? Check out some of our unique offerings which include boat cruises, art studios to host your next private event.'
    }, {
      categoryName: 'Outdoor',
      description: 'Seeking for your next outdoor adventure? Come explore our outdoor venues selections.'
    }, {
      categoryName: 'Wedding',
      description: 'Explore our venues which are ideal for hosting large scale or small scale wedding celebrations.'
    }, {
      categoryName: 'Auditorium',
      description: 'Looking to showcase the musical drama that you and your team has spent days practising? Look no further than our selections here.'
    }, {
      categoryName: 'Others',
      description: 'Cannot find what you want in the other categories? Check out our offerings here :)'
    }
  ];
  const [active, setActive] = useState(allCategories[0]);

  const handleTimelineChange = (activeItem) => {
    setActive(activeItem);
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

export default WelcomePage;
