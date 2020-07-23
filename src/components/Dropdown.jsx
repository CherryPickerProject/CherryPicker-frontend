import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const DropdownWrapper = ({ title, options, change }) => (
  <Dropdown
    placeholder={title}
    fluid
    selection
    options={options}
    onChange={change}
  />
);

export default DropdownWrapper;
