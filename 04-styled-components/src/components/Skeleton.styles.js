import styled, { keyframes } from 'styled-components';

const pulseAnimation = keyframes`
  50% {
    opacity: 0.5;
  }
`;

export const SkeletonWrapper = styled.div`
  background-color: ${({ theme }) => theme.corSuperficie};
  border-radius: ${({ theme }) => theme.raioBorda};
  box-shadow: ${({ theme }) => theme.sombraMd};
  overflow: hidden;
`;

const PulseElement = styled.div`
  animation: ${pulseAnimation} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  background-color: ${({ theme }) => theme.corSkeletonBase};
`;

export const SkeletonImage = styled(PulseElement)`
  aspect-ratio: 1 / 1;
  width: 100%;
`;

export const SkeletonContent = styled.div`
  padding: 1rem;
`;

export const SkeletonLine = styled(PulseElement)`
  height: 1.25rem;
  border-radius: 0.25rem;
  margin-bottom: 0.75rem;
  width: ${({ width }) => width || '100%'};
`;

export const SkeletonButton = styled(PulseElement)`
  height: 2.5rem;
  border-radius: ${({ theme }) => theme.raioBorda};
  margin-top: 1.5rem;
`;