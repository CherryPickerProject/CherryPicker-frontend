/* eslint-env jquery */
import React from 'react';
import Slider from 'rc-slider';
import CategoryHeader from './PriceSlider.styles';
import 'rc-slider/assets/index.css';

const PriceSlider = ({ updatePrice } = {}) => {
  const onChange = (value) => {
    const val = `SGD ${value}`;
    $('#range-amount').html(val);
    updatePrice(value);
  };

  return (
    <div>
      <CategoryHeader id="range-amount">
        SGD 100
      </CategoryHeader>
      <Slider
        min={0}
        max={500}
        defaultValue={100}
        step={10}
        onChange={onChange}
        trackStyle={{ backgroundColor: 'black' }}
        handleStyle={{ borderColor: 'black' }}
      />
    </div>
  );
};

export default PriceSlider;
