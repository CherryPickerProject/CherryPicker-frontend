/* eslint-env jquery */
import React, { useState, useEffect } from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import {
  Dropdown, Grid, Form
} from 'semantic-ui-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../config/theme';

const GoButton = styled(Link)`
  font-size: 50px;
  font-weight: bold;
  color: ${theme.colours.maroon};
  :hover {
    color: ${theme.colours.maroon};
    opacity: 0.8;
  }
`;

const regionOptions = [
  { key: 'North', text: 'North', value: 'North' },
  { key: 'South', text: 'South', value: 'South' },
  { key: 'East', text: 'East', value: 'East' },
  { key: 'West', text: 'West', value: 'West' }
];

const paxOptions = [
  { key: '1-5', text: '1-5', value: '1-5' },
  { key: '6-10', text: '6-10', value: '6-10' },
  { key: '> 11', text: '> 11', value: '> 11' }
];

const ratingOptions = [
  { key: '5', text: '5', value: '5' },
  { key: '4', text: '4', value: '4' },
  { key: '3', text: '3', value: '3' },
  { key: '2', text: '2', value: '2' },
  { key: '1', text: '1', value: '1' }
];

const LandingFilter = ({ category } = {}) => {
  const [values, setValues] = useState({
    keyword: '',
    region: '',
    pax: '',
    rating: ''
  });
  const onChange = (e, result) => {
    const { name, value } = result || e.target;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    $(document).ready(() => {
      $('#amount-slider').range({
        min: 0,
        max: 500,
        start: 100,
        step: 10,
        onChange: (value) => {
          const val = `SGD ${value}`;
          $('#range-amount').html(val);
        }
      });
    });
  }, []);

  const handleSubmit = () => `/detail/?keyword="${values.keyword}"&region="${values.region}"&pax=${values.pax}&rating=${values.rating}`;

  return (
    <Grid container>
      <Grid.Column mobile={4} tablet={3} computer={2} />
      <Grid.Column mobile={12} tablet={8} computer={6}>
        <Form>
          <Form.Field>
            <h1 style={{ fontSize: '3rem', fontWeight: '500' }}>{category}</h1>
            <div style={{ color: theme.colours.maroon, textAlign: 'justify' }}>
              A powerful search engine that helps you compare pricing
              from different venue rental websites
            </div>
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
            <span id="range-amount" style={{ display: 'block', width: '100%', textAlign: 'end' }} />
            <div className="ui range" id="amount-slider" />
          </Form.Field>
          <Form.Field>
            <GoButton
              to={handleSubmit}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end'
              }}
            >
              <span style={{ fontSize: '1rem', marginRight: '10px' }}>Explore</span>
              <FiArrowRightCircle />
            </GoButton>
          </Form.Field>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default LandingFilter;
