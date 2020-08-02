import styled from 'styled-components';
import theme from '../../config/theme';

export const TimelineText = styled.span`
  margin-left: 35px;
  outline: none;
  vertical-align: middle;
`;

export const TimelineDot = styled.span`
  margin-top: 30px;
  margin-left: -11px;
  height: 25px;
  width: 25px;
  background-color: ${theme.colours.grey};
  box-shadow: 0 0 0 0.1em ${theme.colours.grey} inset;
  display: inline-block;
  border-radius: 50%;

  color: ${(props) => (props.active
    ? 'black'
    : theme.colours.grey)};

  box-shadow: ${(props) => (props.active
    ? '0 0 0 0.3em #960F4A inset'
    : 'none')};

  ${TimelineText}:hover {
    color: black;
    cursor: pointer;
  }
`;

export const TimelineWrapper = styled.div`
  z-index: 999;
  left: 15px;
  position: absolute;
  width: 3px;
  margin: auto;
  height: 500px;
  background-color: ${theme.colours.grey};

  @media only screen and (min-width: ${theme.breakpoint.desktop}) {
    left: 100px;
  }

  ${TimelineDot} + ${TimelineDot} {
    margin-top: 80px;
  }
`;
