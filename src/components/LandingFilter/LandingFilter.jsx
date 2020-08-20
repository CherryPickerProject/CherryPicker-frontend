import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid, Form
} from 'semantic-ui-react';
import {
  CategoryHeader, BriefText, ButtonWrapper
} from './LandingFilter.styles';
import { KeywordInput } from '../KeywordInput/KeywordInput';
import { DropdownHolder } from '../Dropdown/Dropdown';
import { PriceSlider } from '../PriceSlider/PriceSlider';
import { ExploreButton } from '../ExploreButton/ExploreButton';

export const LandingFilter = ({ categoryProp } = {}) => {
  const history = useHistory();
  const [values, setValues] = useState({
    keyword: '',
    region: '',
    pax: 5,
    price: '100'
  });

  const onChange = (e, result) => {
    const { name, value } = result || e.target;
    setValues({ ...values, [name]: value });
  };

  const handleExploreButtonClick = async () => {
    const query = {
      category: categoryProp ? categoryProp.categoryName : '',
      keyword: values.keyword,
      region: values.region,
      pax: values.pax,
      price: values.price,
      activePage: 1 // First page by default
    };

    history.push({
      pathname: '/detail',
      state: { detail: query }
    });
  };

  return (
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
  );
};
