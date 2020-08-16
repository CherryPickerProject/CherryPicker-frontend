import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { Explore, ButtonText } from './ExploreButton.styles';

export const ExploreButton = ({ handleExploreButtonClick } = {}) => (
  <div>
    <Explore
      onClick={handleExploreButtonClick}
    >
      <ButtonText>Explore</ButtonText>
      <FiArrowRightCircle />
    </Explore>
  </div>
);
