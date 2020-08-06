import styled from 'styled-components';
import theme from '../../config/theme';

export const AboutHeader = styled.h1`
  width: 100%;
  text-align: center;
`;

export const AboutText = styled.span`
  white-space: pre-line;
`;

export const HighlightText = styled.span`
  color: ${theme.colours.maroon};
  font-weight: bold;
`;
