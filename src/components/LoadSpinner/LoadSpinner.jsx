import React from 'react';
import ReactLoading from 'react-loading';
import theme from '../../config/theme';
import { Wrapper } from './LoadingSpinner.styles';

const LoadSpinner = () => (
  <Wrapper>
    <ReactLoading type="spin" color={theme.colours.maroon} />
  </Wrapper>
);

export default LoadSpinner;
