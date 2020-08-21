import React from 'react';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';

export const BookmarkIcon = ({ isFilled, onClick } = {}) => (
  <div>
    { isFilled
      ? <BsBookmarkFill onClick={onClick} />
      : <BsBookmark onClick={onClick} /> }
  </div>
);
