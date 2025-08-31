# Projeto Mini Loja: Versão 4 - Styled Components

Esta é a quarta e última implementação de uma interface de **mini
loja**, desenvolvida como parte da Atividade 6 - Estilização em React da
Formação Dev. Full Stack Jr T1 2025 (+praTi & Codifica Edu).\
O objetivo desta versão é aplicar a biblioteca **Styled Components**,
utilizando CSS-in-JS para criar estilos encapsulados diretamente dentro
dos componentes React.

------------------------------------------------------------------------

## Funcionalidades Implementadas

### Navbar Fixa

-   Inclui logo.
-   Botão para alternar entre tema claro e escuro (com persistência no
    `localStorage`).
-   Ícone de carrinho de compras.

### Modal do Carrinho

-   Abre ao clicar no ícone do carrinho.
-   Exibe produtos adicionados.
-   Permite **somar e remover produtos** dinamicamente.
-   Mostra o **total atualizado** automaticamente.

### Grid de Produtos Responsivo

O layout do grid se adapta a diferentes tamanhos de tela utilizando
**media queries** dentro dos Styled Components.

### Card de Produto Completo

-   Imagem com **lazy loading** e fallback estilizado via props de
    estilo.
-   Título com limite de duas linhas e **ellipsis**.
-   Preço e avaliação (rating).
-   Tag para "Novo" ou "Promoção".
-   Botão "Adicionar" com variantes (**solid, outline, ghost**)
    definidos por props no styled component.

### Estados e Interações

-   Efeitos de **hover** e **focus** diretamente no styled component
    (`&:hover`, `&:focus`).
-   Estado `disabled` estilizado via props.
-   Simulação de carregamento (**loading**) com componentes de
    **Skeleton** estilizados.

### Acessibilidade

-   Navegação completa via teclado.
-   Uso de atributos `aria-*` para semântica.
-   Contraste de cores validado (≥ 4.5:1).

### Animações

-   Transições suaves implementadas com a propriedade `transition` nos
    styled components.
-   Suporte a keyframes para animações personalizadas.

------------------------------------------------------------------------

## Abordagem Técnica: Styled Components

### Exemplo de uso

``` jsx
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`;

export default function ProductCard() {
  return <Card>Produto</Card>;
}
```

### Vantagens

-   Estilos totalmente encapsulados dentro do componente.
-   Suporte a props dinâmicas
    (`${props => props.variant === 'solid' ? '...' : '...'}`).
-   Melhor organização em projetos React de médio/grande porte.

------------------------------------------------------------------------

## Como Executar o Projeto

1.  Clone o repositório:

``` bash
git clone https://github.com/ingridmoitinho/mini-loja.git
```

2.  Navegue até a pasta do projeto:

``` bash
cd 04-styled-components
```

3.  Instale as dependências:

``` bash
npm install
```

4. Instale a biblioteca Styled Components:
``` bash
npm install styled-components
```

5.  Inicie o servidor de desenvolvimento:

``` bash
npm run dev
```

6.  Abra http://localhost:5173\
    (ou a porta indicada no terminal) no seu navegador.
