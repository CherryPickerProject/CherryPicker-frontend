import React from 'react';
import { Segment, Placeholder } from 'semantic-ui-react';
import { SegmentStyle } from './DetailCard.styles';

export const DetailCard = ({
  title, location, description, price, imageLink
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
          {price.map((item) => (
            <div className="ui label">{item}</div>
          ))}
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

