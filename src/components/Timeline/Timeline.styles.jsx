import styled from 'styled-components';
import theme from '../../config/theme';

export const TimelineText = styled.span`
  display: inline-flex;
  justify-content: space-between;
  outline: none;
  vertical-align: middle;
  position: relative;
  margin-left: 40px;
`;

export const TimelineDot = styled.span`
  display: inline-flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 20px;
  margin-left: -11px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  position: relative;
  z-index: 999;

  background-color: ${(props) => (props.active ? theme.colours.maroon : theme.colours.grey)};

  :hover {
    color: black;
    cursor: pointer;
    transform: scale(1.25);
    transition: transform 0.4s;
  }
`;

export const TimelineVerticalLine = styled.div`
  width: 3px;
  margin-left: 90px;
  background-color: ${theme.colours.grey};
`;

export const TimelineWrapper = styled.div`
  display: flex;
  padding: 10px 0 20px;
  justify-content: space-between;
`;

export const ArrowUp = styled.div`
  position: absolute;
  margin-left: 76px;

  :hover {
    color: black;
    cursor: pointer;
    transform: scale(1.25);
    transition: transform 0.4s;
  }
`;

export const ArrowDown = styled.div`
  position: absolute;
  margin-left: 76px;
  margin-top: -30px;

  :hover {
    color: black;
    cursor: pointer;
    transform: scale(1.25);
    transition: transform 0.4s;
  }
`;
