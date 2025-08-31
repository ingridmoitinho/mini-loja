import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.raioBorda};
  font-weight: 600;
  font-size: 0.875rem;
  transition: all ${({ theme }) => theme.duracaoTransicao};
  border: 1px solid transparent;
  cursor: pointer;

  background-color: ${({ theme }) => theme.corPrimaria};
  color: white;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.corPrimariaHover};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.corPrimaria};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;