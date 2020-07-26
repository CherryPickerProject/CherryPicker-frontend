import React from 'react';
import './Timeline.css';

const Timeline = ({ onClick } = {}) => (
  (
    <div>
      <div id="categoryList" className="Timeline">
        <span id="Workshop" className="TimelineDot">
          <span role="link" tabIndex="0" onClick={(e) => onClick('Workshop', e)}>Workshop</span>
        </span>
        <span id="Wedding" className="TimelineDot">
          <span role="link" tabIndex="0" onClick={(e) => onClick('Wedding', e)}>Wedding</span>
        </span>
        <span id="Party" className="TimelineDot active">
          <span role="link" tabIndex="0" onClick={(e) => onClick('Party', e)}>Party</span>
        </span>
        <span id="Outdoor" className="TimelineDot">
          <span role="link" tabIndex="0" onClick={(e) => onClick('Outdoor', e)}>Outdoor</span>
        </span>
        <span id="Fitness" className="TimelineDot">
          <span role="link" tabIndex="0" onClick={(e) => onClick('Fitness', e)}>Fitness</span>
        </span>
      </div>
    </div>
  )
);

export default Timeline;
