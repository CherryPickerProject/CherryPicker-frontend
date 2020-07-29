/* eslint-env jquery */
import React, { useState } from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import Slider from 'rc-slider';
import {
  Dropdown, Grid, Form
} from 'semantic-ui-react';
import { regionOptions, paxOptions, ratingOptions } from '../../config/constant';
import {
  CategoryHeader, BriefText, ButtonWrapper, GoButton, ButtonText
} from './LandingFilter.styles';
import 'rc-slider/assets/index.css';

const LandingFilter = ({ category } = {}) => {
  const [values, setValues] = useState({
    keyword: '',
    region: '',
    pax: '',
    rating: '',
    price: '100'
  });
  const onChange = (e, result) => {
    const { name, value } = result || e.target;
    setValues({ ...values, [name]: value });
  };
  const onSliderChange = (value) => {
    const val = `SGD ${value}`;
    $('#range-amount').html(val);
    setValues({ ...values, price: value });
  };

  const handleSubmit = () => `/detail/?category="${category}"&keyword="${values.keyword}"&region="${values.region}"&pax=${values.pax}&rating=${values.rating}&price=${values.price}`;

  return (
    <Grid container>
      <Grid.Column mobile={4} tablet={3} computer={2} />
      <Grid.Column mobile={12} tablet={8} computer={6}>
        <Form>
          <Form.Field>
            <CategoryHeader>{category}</CategoryHeader>
            <BriefText>
              A powerful search engine that helps you compare pricing
              from different venue rental websites
            </BriefText>
          </Form.Field>
          <Form.Field>
            <input
              name="keyword"
              value={values.keyword}
              onChange={onChange}
              placeholder="Type Keywords"
            />
          </Form.Field>
          <Form.Field>
            <Grid columns={3} stackable>
              <Grid.Column>
                <Dropdown
                  placeholder="Region"
                  fluid
                  selection
                  name="region"
                  value={values.region}
                  options={regionOptions}
                  onChange={onChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Dropdown
                  placeholder="Pax"
                  fluid
                  selection
                  name="pax"
                  value={values.pax}
                  options={paxOptions}
                  onChange={onChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Dropdown
                  placeholder="Rating"
                  fluid
                  selection
                  name="rating"
                  value={values.rating}
                  options={ratingOptions}
                  onChange={onChange}
                />
              </Grid.Column>
            </Grid>
          </Form.Field>
          <Form.Field>
            <span id="range-amount" style={{ display: 'block', width: '100%', textAlign: 'end' }}>
              SGD 100
            </span>
            <Slider
              min={0}
              max={500}
              defaultValue={100}
              step={10}
              onChange={onSliderChange}
              trackStyle={{ backgroundColor: 'black' }}
              handleStyle={{ borderColor: 'black' }}
            />
          </Form.Field>
          <Form.Field>
            <ButtonWrapper>
              <GoButton
                to={handleSubmit}
              >
                <ButtonText>Explore</ButtonText>
                <FiArrowRightCircle />
              </GoButton>
            </ButtonWrapper>
          </Form.Field>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default LandingFilter;
