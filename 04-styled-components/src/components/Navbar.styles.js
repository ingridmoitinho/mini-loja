import styled from 'styled-components';

export const Header = styled.header`
  background-color: color-mix(in srgb, ${({ theme }) => theme.corSuperficie} 80%, transparent);
  backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  box-shadow: ${({ theme }) => theme.sombraMd};
  transition: background-color ${({ theme }) => theme.duracaoTransicao};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
`;

export const Logo = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ThemeButton = styled.button`
  padding: 0.5rem;
  border-radius: 9999px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.corTextoSecundario};
  transition: background-color ${({ theme }) => theme.duracaoTransicao};

  &:hover {
    background-color: color-mix(in srgb, ${({ theme }) => theme.corBorda} 50%, transparent);
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.corPrimaria};
    outline-offset: 2px;
  }
`;

export const CartBadge = styled.div`
  position: relative;
  color: ${({ theme }) => theme.corTextoSecundario};
  cursor: pointer;
`;

export const CartCount = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background-color: #ef4444;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
`;