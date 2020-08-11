import React from 'react';
import { Segment, Placeholder } from 'semantic-ui-react';
import { SegmentStyle } from './DetailCard.styles';
import { FiArrowRightCircle } from 'react-icons/fi';
import {
  ButtonWrapper
} from './DetailCard.styles';
import { Popup, Icon } from 'semantic-ui-react';

export const DetailCard = ({
  title, location, description, price, imageLink, link
} = {}) => (title ? (

  <Segment style={SegmentStyle}>
    <div className="ui items">
      <div className="item">
        <div className="image">
          <img
            src={imageLink}
            alt="description of place"
            width="200"
            height="121"
          />
        </div>
        <div className="content">
          <div className="header">{title}</div>
          <div className="meta">{location}</div>
          <div className="description">{description}</div>
          <br></br>
          {price.map((data) => (
            <Popup content={ data.pricing } trigger={<div className='ui label'>{data.dayOfWeek} {data.time}</div>} />
          ))}
        </div>
        <div className="button">
          <ButtonWrapper as="a" href={link}>
            <FiArrowRightCircle />
          </ButtonWrapper>
        </div>
      </div>
    </div>
  </Segment>

) : (

    <Segment style={SegmentStyle}>
      <div className="ui items">
        <div className="item">
          <div className="image">
            <Placeholder>
              <Placeholder.Image />
            </Placeholder>
          </div>
          <div className="content">
            <Placeholder>
              <Placeholder.Line length="full" />
              <Placeholder.Line length="very long" />
              <Placeholder.Line length="long" />
              <Placeholder.Line length="medium" />
            </Placeholder>
          </div>
        </div>
      </div>
    </Segment>
  ));

