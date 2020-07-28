import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../config/theme';

export const PortalLayoutStyled = styled('div')`
  display: flex;
  height: 100%;
  width: 100%;

  .layout--main {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;

    .layout--navbar {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 7%;
      align-items: center;
      position: fixed;
      z-index: 9;
      background-color: ${theme.colours.white};

      .navbar--item {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 800px;
        //edit here to adjust the nav-item
        @media only screen and (max-width: ${theme.breakpoint.widescreen}) {
          padding-left: 700px;
        }
        @media only screen and (max-width: ${theme.breakpoint.desktop}) {
          padding-left: 450px;
        }
        @media only screen and (max-width: ${theme.breakpoint.tablet}) {
          padding-left: 350px;
        }
        @media only screen and (max-width: ${theme.breakpoint.mobile}) {
          padding-left: 120px;
        }
      }

      .navbar--title {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        height: 30px;
        padding-left: 80px;
      }
    }

    .layout--children {
      flex: 1 1 auto;
      margin-top: 60px;
    }
  }
`;

export const NavItem = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colours.maroon};
  text-decoration: ${({ selected }) => (selected ? 'underline' : 'none')};
  padding: 0px 0px 0px 40px;

  :hover {
    color: ${theme.colours.maroon};
    opacity: 0.8;
  }
`;

export const NavTitle = styled.h1`
  font-size: 40px;
  color: ${({ color } = {}) => (color ? theme.colours.maroon : theme.colours.black)};
`;
