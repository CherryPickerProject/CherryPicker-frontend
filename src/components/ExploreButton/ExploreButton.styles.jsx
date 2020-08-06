import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../config/theme';

export const Explore = styled(Link)`
  font-size: 50px;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  color: ${theme.colours.maroon};
  :hover {
    color: ${theme.colours.maroon};
    opacity: 0.8;
  }
`;
export const ButtonText = styled.span`
  font-size: 1rem;
  margin-right: 10px;
`;


