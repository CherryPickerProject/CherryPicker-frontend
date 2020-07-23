import React from 'react';
import './Timeline.css';

const timelineLine = {
  position: 'absolute',
  width: '3px',
  left: '100px',
  margin: 'auto',
  height: '500px',
  background: '#C4C4C4'
};
const offset = 10;

const Timeline = ({ onClick } = {}) => (
  (
    <div>
      <div id="categoryList" style={timelineLine}>
        <span id="Workshop" className="TimelineDot" style={{ top: `${offset}px` }}>
          <span role="link" tabIndex="0" onClick={(e) => onClick('Workshop', e)}>Workshop</span>
        </span>
        <span id="Wedding" className="TimelineDot" style={{ top: `${offset + 100}px` }}>
          <span role="link" tabIndex="0" onClick={(e) => onClick('Wedding', e)}>Wedding</span>
        </span>
        <span id="Party" className="TimelineDot active" style={{ top: `${offset + 200}px` }}>
          <span role="link" tabIndex="0" onClick={(e) => onClick('Party', e)}>Party</span>
        </span>
        <span id="Outdoor" className="TimelineDot" style={{ top: `${offset + 300}px` }}>
          <span role="link" tabIndex="0" onClick={(e) => onClick('Outdoor', e)}>Outdoor</span>
        </span>
        <span id="Fitness" className="TimelineDot" style={{ top: `${offset + 400}px` }}>
          <span role="link" tabIndex="0" onClick={(e) => onClick('Fitness', e)}>Fitness</span>
        </span>
      </div>
    </div>
  )
);

export default Timeline;
