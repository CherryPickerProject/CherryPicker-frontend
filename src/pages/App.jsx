import React, { useState, useEffect } from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../config/theme';
import PortalLayout from '../layouts/PortalLayout';

const Gobutton = styled(Link)`
  font-size: 50px;
  font-weight: bold;
  color: ${theme.colours.maroon};

  :hover {
    color: ${theme.colours.maroon};
    opacity: 0.8;
  }
`;

const App = ({ location: { pathname } } = {}) => {
  const [query, setQuery] = useState();

  useEffect(() => {
    setQuery(
      /* eslint-disable-next-line */
      '?q=keyword="birthday"&region="east"&pax=10&rating=5&priceRange=1000&time=afternoon'
    );
  });
  return (
    <PortalLayout pathname={pathname}>
      <Gobutton to={`/detail/${query}`}>
        <FiArrowRightCircle />
      </Gobutton>
    </PortalLayout>
  );
};

export default App;
