import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { regionOptions, paxOptions, ratingsOptions } from '../../config/constants';

export const DropdownHolder = ({ placeholder, name, value, onChange } = {}) => (
  <Dropdown
    placeholder={placeholder}
    fluid
    selection
    name={name}
    value={value}
    options={placeholder === "Region" ? regionOptions : placeholder === "Pax" ? paxOptions : ratingsOptions}
    onChange={onChange}
  />
);
