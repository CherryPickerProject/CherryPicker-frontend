import React from 'react';
import { Pagination } from 'semantic-ui-react';

export const PaginationComponent = ({ totalPages }) => (
  <Pagination
    defaultActivePage={1}
    firstItem={null}
    lastItem={null}
    pointing
    secondary
    totalPages={totalPages}
  />
);

