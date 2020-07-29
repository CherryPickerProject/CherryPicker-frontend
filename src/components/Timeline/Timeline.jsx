import React from 'react';
import { TimelineWrapper, TimelineDot, TimelineText } from './Timeline.styles';

const Timeline = ({ active, onClick } = {}) => (
  (
    <div>
      <TimelineWrapper id="categoryList">
        <TimelineDot id="Workshop" active={active === 'Workshop'}>
          <TimelineText onClick={(e) => onClick('Workshop', e)}>Workshop</TimelineText>
        </TimelineDot>
        <TimelineDot id="Wedding" active={active === 'Wedding'}>
          <TimelineText onClick={(e) => onClick('Wedding', e)}>Wedding</TimelineText>
        </TimelineDot>
        <TimelineDot id="Party" active={active === 'Party'}>
          <TimelineText onClick={(e) => onClick('Party', e)}>Party</TimelineText>
        </TimelineDot>
        <TimelineDot id="Outdoor" active={active === 'Outdoor'}>
          <TimelineText onClick={(e) => onClick('Outdoor', e)}>Outdoor</TimelineText>
        </TimelineDot>
        <TimelineDot id="Fitness" active={active === 'Fitness'}>
          <TimelineText onClick={(e) => onClick('Fitness', e)}>Fitness</TimelineText>
        </TimelineDot>
      </TimelineWrapper>
    </div>
  )
);

export default Timeline;
