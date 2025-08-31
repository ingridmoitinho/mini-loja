import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.corSuperficie};
  border-radius: ${({ theme }) => theme.raioBorda};
  box-shadow: ${({ theme }) => theme.sombraMd};
  overflow: hidden;
  transition: transform ${({ theme }) => theme.duracaoTransicao}, box-shadow ${({ theme }) => theme.duracaoTransicao};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.sombraXl};
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  width: 100%;
  background-color: ${({ theme }) => theme.corSkeletonBase};
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardTag = styled.span`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  background-color: ${({ tagType }) => (tagType === 'Novo' ? '#22c55e' : '#f59e0b')};
`;

export const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 180px;
`;

export const CardTitle = styled.h3`
  font-weight: 600;
  height: 3.5rem;
  line-height: 1.25;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
`;

export const CardRating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  color: #f59e0b;
`;

export const CardRatingText = styled.span`
  color: ${({ theme }) => theme.corTextoSecundario};
  font-size: 0.875rem;
  margin-left: 0.5rem;
`;

export const CardPrice = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

export const CardAction = styled.div`
  margin-top: auto;
`;