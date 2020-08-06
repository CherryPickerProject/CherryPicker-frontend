import React, { useState } from 'react';
import { FaAngleDoubleUp, FaAngleDoubleDown } from 'react-icons/fa';
import {
  TimelineWrapper,
  TimelineVerticalLine,
  TimelineDot,
  TimelineText,
  ArrowUp, ArrowDown
} from './Timeline.styles';
import theme from '../../config/theme';

export const Timeline = ({ allCategories, active, onClick } = {}) => {
  // Note that we will not display all categories at once.
  // At any point, there will only be 5 items showing in the timeline
  // Start and End are the Indexes of the categories that we will show
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);

  const displayCategories = allCategories.slice(start, end);

  return (
    <div>
      {start > 0
        ? (
          <ArrowUp onClick={() => {
            setStart(start - 1);
            setEnd(end - 1);
          }}
          >
            <FaAngleDoubleUp color={theme.colours.maroon} size={30} />
          </ArrowUp>
        )
        : ''}
      <TimelineVerticalLine>
        {displayCategories.map((item) => (
          <TimelineWrapper key={item.categoryName} onClick={() => onClick(item)}>
            <TimelineDot
              onClick={() => onClick(item)}
              id={item}
              active={active.categoryName === item.categoryName}
            >
              <TimelineText>{item.categoryName}</TimelineText>
            </TimelineDot>
          </TimelineWrapper>
        ))}
      </TimelineVerticalLine>
      {end < allCategories.length
        ? (
          <ArrowDown onClick={() => {
            setStart(start + 1);
            setEnd(end + 1);
          }}
          >
            <FaAngleDoubleDown color={theme.colours.maroon} size={30} />
          </ArrowDown>
        )
        : ''}
    </div>
  );
};
