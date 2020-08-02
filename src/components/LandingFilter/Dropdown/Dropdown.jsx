import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { regionOptions, paxOptions, ratingOptions } from '../../../config/constant';

export const RegionDropdown = ({ value, onChange } = {}) => (
  <Dropdown
    placeholder="Region"
    fluid
    selection
    name="region"
    value={value}
    options={regionOptions}
    onChange={onChange}
  />
);

export const PaxDropdown = ({ value, onChange } = {}) => (
  <Dropdown
    placeholder="Pax"
    fluid
    selection
    name="pax"
    value={value}
    options={paxOptions}
    onChange={onChange}
  />
);

export const RatingDropdown = ({ value, onChange } = {}) => (
  <Dropdown
    placeholder="Rating"
    fluid
    selection
    name="rating"
    value={value}
    options={ratingOptions}
    onChange={onChange}
  />
);
