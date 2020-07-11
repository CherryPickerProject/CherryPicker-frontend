import React from 'react';
import { Pagination } from 'semantic-ui-react';

const PaginationComponent = ({ totalPage }) => (
  <Pagination
    defaultActivePage={1}
    firstItem={null}
    lastItem={null}
    pointing
    secondary
    totalPages={totalPage}
  />
);

export default PaginationComponent;
