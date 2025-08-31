import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  body {
    margin: 0;
    font-family: "Space Mono", monospace;
    background-color: ${({ theme }) => theme.corFundo};
    color: ${({ theme }) => theme.corTextoPrimario};
    transition: background-color ${({ theme }) => theme.duracaoTransicao}, color ${({ theme }) => theme.duracaoTransicao};
  }

  .container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;

    @media (min-width: 640px) {
      max-width: 640px;
    }
    @media (min-width: 1024px) {
      max-width: 1024px;
    }
  }
`;