import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.corSuperficie};
  padding: 1rem;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.corBorda};

  i {
    color: ${({ theme }) => theme.corPrimaria};
    margin-left: 0.5rem;
  }
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.corPrimaria};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;