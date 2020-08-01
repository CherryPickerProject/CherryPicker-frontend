import styled from 'styled-components';
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

export {
  CategoryHeader, BriefText, ButtonWrapper
};
