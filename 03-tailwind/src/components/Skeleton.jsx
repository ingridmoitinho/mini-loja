import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="bg-light-surface dark:bg-dark-surface rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="bg-light-skeleton-base dark:bg-dark-skeleton-base w-full h-48"></div>
      <div className="p-4">
        <div className="h-4 bg-light-skeleton-base dark:bg-dark-skeleton-base rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-light-skeleton-base dark:bg-dark-skeleton-base rounded w-1/2 mb-4"></div>
        <div className="h-6 bg-light-skeleton-base dark:bg-dark-skeleton-base rounded w-1/4 mb-6"></div>
        <div className="h-10 bg-light-skeleton-base dark:bg-dark-skeleton-base rounded w-full"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;