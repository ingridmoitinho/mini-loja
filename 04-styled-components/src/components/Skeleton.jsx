import React from 'react';
import {
  SkeletonWrapper,
  SkeletonImage,
  SkeletonContent,
  SkeletonLine,
  SkeletonButton
} from './Skeleton.styles';

const SkeletonCard = () => {
  return (
    <SkeletonWrapper>
      <SkeletonImage />
      <SkeletonContent>
        <SkeletonLine width="75%" />
        <SkeletonLine width="50%" />
        <SkeletonLine width="25%" style={{ marginTop: '1rem' }} />
        <SkeletonButton />
      </SkeletonContent>
    </SkeletonWrapper>
  );
};

export default SkeletonCard;