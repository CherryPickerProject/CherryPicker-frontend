import React, { useState } from 'react';
import { Grid, Form } from 'semantic-ui-react';
import {
  CategoryHeader,
  ButtonWrapper
} from './DetailFilter.styles';
import { KeywordInput } from '../KeywordInput/KeywordInput';
import { DropdownHolder } from '../Dropdown/Dropdown';
import { PriceSlider } from '../PriceSlider/PriceSlider';
import { ExploreButton } from '../ExploreButton/ExploreButton';

export const DetailFilter = ({ category } = {}) => {
  const [values, setValues] = useState({
    keyword: '',
    region: '',
    pax: '',
    ratings: '',
    price: '100'
  });
  const onChange = (e, result) => {
    const { name, value } = result || e.target;
    setValues({ ...values, [name]: value });
  };

  // supposed to change to the link to the actual website
  const handleSubmit = () =>
    `/detail/?category="${category}"&keyword="${values.keyword}"&region="${values.region}"&pax=${values.pax}&ratings=${values.ratings}&price=${values.price}`;

  return (
    <Grid container style={{ 'margin-bottom': '50px', 'margin-top': '50px' }}>
      <Grid.Column mobile={4} tablet={3} computer={2} />
      <Grid.Column mobile={12} tablet={8} computer={8}>
        <Form>
          <Form.Field>
            <CategoryHeader>{category}</CategoryHeader>
          </Form.Field>
          <Form.Field>
            <KeywordInput value={values.keyword} onChange={onChange} />
          </Form.Field>
          <Form.Field>
            <Grid columns={3} stackable>
              <Grid.Column>
                <DropdownHolder
                  placeholder="Region"
                  name="region"
                  value={values.region}
                  onChange={onChange}
                />
              </Grid.Column>
              <Grid.Column>
                <DropdownHolder
                  placeholder="Pax"
                  name="pax"
                  value={values.pax}
                  onChange={onChange}
                />
              </Grid.Column>
              <Grid.Column>
                <DropdownHolder
                  placeholder="Ratings"
                  name="ratings"
                  value={values.ratings}
                  onChange={onChange}
                />
              </Grid.Column>
            </Grid>
          </Form.Field>
          <Form.Field>
            <PriceSlider
              updatePrice={(value) => {
                setValues({ ...values, price: value });
              }}
            />
          </Form.Field>
          <Grid.Column>
          </Grid.Column>
        </Form>
      </Grid.Column>
      <Grid.Column mobile={4} tablet={3} computer={2}>
        <Form.Field>
          <ButtonWrapper style={{ 'margin-bottom': '50px', 'margin-top': '50px' }}>
            <ExploreButton handleSubmit={handleSubmit} />
          </ButtonWrapper>
        </Form.Field>
      </Grid.Column>
    </Grid>
  );
};
