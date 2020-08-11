import React, { useState } from 'react';
import Slider from 'rc-slider';
import { CategoryHeader } from './PriceSlider.styles';
import 'rc-slider/assets/index.css';

export const PriceSlider = ({ updatePrice } = {}) => {
  const [priceDisplay, setPriceDisplay] = useState(100);

  const onChange = (value) => {
    setPriceDisplay(value);
    updatePrice(value);
  };

  return (
    <div>
      <CategoryHeader id="range-amount">
        {priceDisplay}
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
