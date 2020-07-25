import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../config/theme';

const CategoryHeader = styled.h1`
  font-size: 3rem;
  font-weight: 500;
`;
const BriefText = styled.div`
  color: ${theme.colours.maroon};
  text-align: justify;
`;
const ButtonWrapper = styled.div`
  text-align: end;
`;
const GoButton = styled(Link)`
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
const ButtonText = styled.span`
  font-size: 1rem;
  margin-right: 10px;
`;

export {
  CategoryHeader, BriefText, ButtonWrapper, GoButton, ButtonText
};
