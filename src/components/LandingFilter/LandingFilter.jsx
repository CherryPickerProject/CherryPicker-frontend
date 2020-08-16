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
import { useHistory } from 'react-router-dom';

export const LandingFilter = ({ categoryProp } = {}) => {
  const history = useHistory();
  const [values, setValues] = useState({
    keyword: '',
    region: '',
    pax: 0,
    price: '100'
  });

  const onChange = (e, result) => {
    const { name, value } = result || e.target;
    setValues({ ...values, [name]: value });
  };

  const handleExploreButtonClick = async () => {
    const query = {
      "category": categoryProp ? categoryProp.categoryName : '',
      "keyword": values.keyword,
      "region": values.region,
      "pax": values.pax,
      "price": values.price,
      "activePage": 1 //First page by default
    }

    history.push({
      pathname: '/detail',
      state: { detail: query }
    });
  }

  return (
    <Container>
      <Grid container relaxed="very" columns={3}>
        <Grid.Column mobile={4} tablet={3} computer={2} />
        <Grid.Column mobile={12} tablet={8} computer={6}>
          <Form>
            <Form.Field>
              <CategoryHeader>{categoryProp['categoryName']}</CategoryHeader>
              <BriefText>
                {categoryProp['description']}
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
                <ExploreButton handleExploreButtonClick={handleExploreButtonClick} />
              </ButtonWrapper>
            </Form.Field>
          </Form>
        </Grid.Column>
        <Divider hidden />
        <Grid.Column mobile={8} tablet={6} computer={4}>
          <Image.Group>
            <Image src={categoryProp.topTwoPhotos[0]} />
            <Image src={categoryProp.topTwoPhotos[1]} />
          </Image.Group>
        </Grid.Column>
      </Grid>
    </Container>
  );
};
