import React, { useState } from 'react';
import {
  Grid,
  Form,
  Image,
  Divider
} from 'semantic-ui-react';
import {
  CategoryHeader,
  BriefText,
  ButtonWrapper,
  Container
} from './LandingFilter.styles';
import { KeywordInput } from '../KeywordInput/KeywordInput';
import { DropdownHolder } from '../Dropdown/Dropdown';
import { PriceSlider } from '../PriceSlider/PriceSlider';
import { ExploreButton } from '../ExploreButton/ExploreButton';

export const LandingFilter = ({ category } = {}) => {
  const [values, setValues] = useState({
    keyword: '',
    region: '',
    pax: '',
    price: '100'
  });
  const onChange = (e, result) => {
    const { name, value } = result || e.target;
    setValues({ ...values, [name]: value });
  };

  const { images } = category;
  const image1 = images && images.length === 2 ? images[0] : null;
  const image2 = images && images.length === 2 ? images[1] : null;

  function getProperty(prop) {
    if (category && category[prop]) {
      return category[prop];
    }
    return '';
  }

  const handleSubmit = () => `/detail/?category="${getProperty('categoryName')}"&keyword="${values.keyword}"&region="${values.region}"&pax=${values.pax}&price=${values.price}`;

  return (
    <Container>
      <Grid container relaxed="very" columns={3}>
        <Grid.Column mobile={4} tablet={3} computer={2} />
        <Grid.Column mobile={12} tablet={8} computer={6}>
          <Form>
            <Form.Field>
              <CategoryHeader>{getProperty('categoryName')}</CategoryHeader>
              <BriefText>
                {getProperty('description')}
              </BriefText>
            </Form.Field>
            <br />
            <Form.Field>
              <KeywordInput value={values.keyword} onChange={onChange} />
            </Form.Field>
            <Form.Field>
              <Grid columns={2} stackable>
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
              </Grid>
            </Form.Field>
            <Form.Field>
              <PriceSlider
                updatePrice={(value) => {
                  setValues({ ...values, price: value });
                }}
              />
            </Form.Field>
            <Form.Field>
              <ButtonWrapper>
                <ExploreButton handleSubmit={handleSubmit} />
              </ButtonWrapper>
            </Form.Field>
          </Form>
        </Grid.Column>
        <Divider hidden />
        <Grid.Column mobile={8} tablet={6} computer={4}>
          <Image.Group>
            <Image src={image1} />
            <Image src={image2} />
          </Image.Group>
        </Grid.Column>
      </Grid>
    </Container>
  );
};
