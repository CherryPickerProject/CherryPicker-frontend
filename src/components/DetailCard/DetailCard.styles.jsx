import theme from '../../config/theme';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SegmentStyle = {
  borderColor: theme.colours.maroon
};

export const ButtonWrapper = styled.button`
  font-size: 30px;
  color: ${theme.colours.maroon};
  :hover {
    color: ${theme.colours.maroon};
    opacity: 0.8;
  }
  border: transparent;
  background: transparent;
  align-items: center;
  position: relative;
`;