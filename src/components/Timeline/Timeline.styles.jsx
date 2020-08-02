import styled from 'styled-components';
import theme from '../../config/theme';

export const TimelineText = styled.span`
  outline: none;
  vertical-align: middle;
  position: relative;
  margin-left: 40px;
`;

export const TimelineDot = styled.span`
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: -11px;
  height: 25px;
  width: 25px;
  display: inline-block;
  border-radius: 50%;
  position: relative;

  background-color: ${(props) => (props.active
    ? theme.colours.maroon
    : theme.colours.grey)};

  :hover {
    color: black;
    cursor: pointer;
  }
`;

export const TimelineVerticalLine = styled.div`
  z-index: 999;
  left: 15px;
  position: absolute;
  width: 3px;
  margin: auto;
  background-color: ${theme.colours.grey};

  @media only screen and (min-width: ${theme.breakpoint.desktop}) {
    left: 100px;
  }

  ${TimelineDot} + ${TimelineDot} {
    margin-top: 80px;
  }

`;

export const TimelineWrapper = styled.div`
  height:50px;
`;