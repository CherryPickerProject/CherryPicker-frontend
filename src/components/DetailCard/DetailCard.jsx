import React, { useEffect } from 'react';
import { Segment, Placeholder } from 'semantic-ui-react';
import { SegmentStyle } from './DetailCard.styles';
import { BookmarkIcon } from '../BookmarkIcon/BookmarkIcon';

// Hui Ying: I am not sure how the progress for DetailCard is coming along, but the api is returning the following 
// fields as seen in the props received. I am commenting the prices for now.

export const DetailCard = ({
  link, images, title, location, tags, price, pax, description, facilities, promos, bookmarks, updateBookmarks
} = {}) => {
  let isBookmarked = false;
  if (bookmarks) {
    isBookmarked = bookmarks.includes(title);
  }

  return (title ? (

    <Segment style={SegmentStyle}>
      <div className="ui items">
        <div className="item">
          <div className="image">
            <img
              src={images[0]}
              alt="description of place"
              width="200"
              height="121"
            />
          </div>
          <div className="content">
            <div className="header">{title}</div>
            <div className="meta">{location}</div>
            <div className="description">{description}</div>
            {/* {price.map((item) => (
              <div className="ui label">{item}</div>
            ))} */}
            <BookmarkIcon isFilled={isBookmarked} onClick={() => updateBookmarks(title)} />
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
};
