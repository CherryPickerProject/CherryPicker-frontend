import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { Explore, ButtonText } from './ExploreButton.styles';

const ExploreButton = ({ handleSubmit } = {}) => (
  <div>
    <Explore
      to={handleSubmit}
    >
      <ButtonText>Explore</ButtonText>
      <FiArrowRightCircle />
    </Explore>
  </div>
);

export default ExploreButton;
