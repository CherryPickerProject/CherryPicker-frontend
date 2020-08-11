import React from 'react';

export const KeywordInput = ({ value, onChange } = {}) => (
  <input
    name="keyword"
    value={value}
    onChange={onChange}
    placeholder="Type Keywords"
  />
);
