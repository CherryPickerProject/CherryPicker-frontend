/* eslint-env jquery */
import React, { useState } from 'react';
import { Grid, Form } from 'semantic-ui-react';
import {
  CategoryHeader, BriefText, ButtonWrapper
} from './LandingFilter.styles';
import KeywordInput from './KeywordInput/KeywordInput';
import { RegionDropdown, PaxDropdown, RatingDropdown } from './Dropdown/Dropdown';
import PriceSlider from './PriceSlider/PriceSlider';
import ExploreButton from './ExploreButton/ExploreButton';

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
            <KeywordInput value={values.keyword} onChange={onChange} />
          </Form.Field>
          <Form.Field>
            <Grid columns={3} stackable>
              <Grid.Column>
                <RegionDropdown value={values.region} onChange={onChange} />
              </Grid.Column>
              <Grid.Column>
                <PaxDropdown value={values.pax} onChange={onChange} />
              </Grid.Column>
              <Grid.Column>
                <RatingDropdown value={values.rating} onChange={onChange} />
              </Grid.Column>
            </Grid>
          </Form.Field>
          <Form.Field>
            <PriceSlider updatePrice={(value) => { setValues({ ...values, price: value }); }} />
          </Form.Field>
          <Form.Field>
            <ButtonWrapper>
              <ExploreButton handleSubmit={handleSubmit} />
            </ButtonWrapper>
          </Form.Field>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default LandingFilter;
