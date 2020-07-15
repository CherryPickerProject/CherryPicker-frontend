import React from 'react';
import { Pagination } from 'semantic-ui-react';

const PaginationComponent = ({ totalPages }) => (
  <Pagination
    defaultActivePage={1}
    firstItem={null}
    lastItem={null}
    pointing
    secondary
    totalPages={totalPages}
  />
);

export default PaginationComponent;
