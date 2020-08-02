import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { FaHome } from 'react-icons/fa';

import { PortalLayoutStyled, NavTitle, NavItem } from './PortalLayout.styles';

// Initialize Google Analytics and listen to history
ReactGA.initialize('UA-174220596-1');
const browserHistory = createBrowserHistory();
browserHistory.listen((location) => {
  ReactGA.pageview(location.pathname + location.search);
});

const PortalLayout = ({ children, pathname }) => {
  useEffect(() => {
    // Google Analytics log page view
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <PortalLayoutStyled>
      <div className="layout--main">
        <div className="layout--navbar">
          <div className="navbar--title">
            <NavTitle color> Cherry</NavTitle>
            <NavTitle style={{ marginBottom: '35px' }}>Picker</NavTitle>
          </div>
          <div className="navbar--item">
            <NavItem selected={pathname === '/about'} to="/about">
              About us
            </NavItem>
            <NavItem selected={pathname === '/bookmarks'} to="/bookmarks">
              Bookmarks
            </NavItem>
            <NavItem selected={pathname === '/'} to="/">
              <FaHome />
            </NavItem>
          </div>
        </div>
        <div className="layout--children">{children}</div>
      </div>
    </PortalLayoutStyled>
  );
};

export default PortalLayout;
