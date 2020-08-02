import React from 'react';

const KeywordInput = ({ value, onChange } = {}) => (
  <input
    name="keyword"
    value={value}
    onChange={onChange}
    placeholder="Type Keywords"
  />
);

export default KeywordInput;
