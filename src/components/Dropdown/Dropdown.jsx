import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { regionOptions, paxOptions } from '../../config/constants';

export const DropdownHolder = ({
  placeholder, name, value, onChange
} = {}) => {
  const getOptions = () => {
    if (placeholder === 'Region') {
      return regionOptions;
    }
    if (placeholder === 'Pax') {
      return paxOptions;
    }
    return null;
  };

  return (
    <Dropdown
      placeholder={placeholder}
      fluid
      selection
      name={name}
      value={value}
      options={getOptions()}
      onChange={onChange}
    />
  );
};
