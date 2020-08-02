import React from 'react';
import { TimelineWrapper, TimelineVerticalLine, TimelineDot, TimelineText } from './Timeline.styles';

export const Timeline = ({ allCategories, active, onClick } = {}) => {
  return (
    <TimelineWrapper>
      <TimelineVerticalLine>
        {allCategories.map((item) => {
          return (
            <TimelineDot onClick={() => onClick(item)} id={item} active={active === item}>
              <TimelineText onClick={() => onClick(item)}>{item}</TimelineText>
            </TimelineDot>
          );
        })}
      </TimelineVerticalLine>
    </TimelineWrapper>
  );
};
