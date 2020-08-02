import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { GoButton, ButtonText } from './ExploreButton.styles';

const ExploreButton = ({ handleSubmit } = {}) => (
  <div>
    <GoButton
      to={handleSubmit}
    >
      <ButtonText>Explore</ButtonText>
      <FiArrowRightCircle />
    </GoButton>
  </div>
);

export default ExploreButton;
