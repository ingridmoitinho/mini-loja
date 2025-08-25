# Projeto Mini Loja: Versão 2 - CSS Modules

Esta é a segunda de quatro implementações de uma interface de **mini
loja**, desenvolvida como parte da Atividade 6 - Estilização em React da
Formação Dev. Full Stack Jr T1 2025 (+praTi & Codifica Edu).\
O objetivo desta versão é aplicar a técnica de **CSS Modules**,
garantindo **escopo local de estilos** para cada componente.

Cada componente possui seu **arquivo `.module.css`** correspondente, que
é importado e aplicado de forma isolada, evitando conflitos de nomes de
classes e garantindo maior manutenibilidade do código.

---

## Funcionalidades Implementadas

### Navbar Fixa

- Inclui logo.
- Botão para alternar entre tema claro e escuro (com persistência no
  `localStorage`).
- Ícone de carrinho de compras.

### Modal do Carrinho

- Abre ao clicar no ícone do carrinho.
- Exibe produtos adicionados.
- Permite **somar e remover produtos** dinamicamente.
- Mostra o **total atualizado** automaticamente.

### Grid de Produtos Responsivo

O layout do grid se adapta a diferentes tamanhos de tela:

- ≤ 480px: 1 coluna
- 481px -- 768px: 2 colunas
- 769px -- 1024px: 3 colunas
- ≥ 1025px: 4 colunas

### Card de Produto Completo

- Imagem com **lazy loading** e fallback estilizado via CSS.
- Título com limite de duas linhas e **ellipsis**.
- Preço e avaliação (rating).
- Tag para "Novo" ou "Promoção".
- Botão "Adicionar" com variantes (**solid, outline, ghost**).

### Estados e Interações

- Efeitos de **hover** (sombra/elevação) e **focus** (anel de foco
  visível) em elementos interativos.
- Estado `disabled` para botões.
- Simulação de carregamento (**loading**) com componentes de
  **Skeleton** para evitar layout shift.

### Acessibilidade

- Navegação completa via teclado.
- Uso de atributos `aria-*` para semântica.
- Contraste de cores validado (≥ 4.5:1).

### Animações

- Transições suaves de 150-250ms para interações, focadas em
  `transform` e `opacity` para melhor performance.

---

## Abordagem Técnica: CSS Modules

### Escopo Local

Cada componente possui seu arquivo de estilo com o sufixo
`.module.css`.\
As classes definidas nesses arquivos são convertidas em nomes únicos
pelo compilador, garantindo que **não haja colisão de estilos** entre
componentes diferentes.

### Importação

Exemplo de uso em um componente:

```jsx
import styles from "./ProductCard.module.css";

<div className={styles.cardProduto}>...</div>;
```

### Vantagens

- Evita conflitos de nomes de classes.
- Facilita a manutenção e escalabilidade do projeto.
- Torna o código mais organizado, já que cada componente possui seu
  próprio estilo.

---

## Como Executar o Projeto

1.  Clone o repositório:

```bash
git clone https://github.com/ingridmoitinho/mini-loja.git
```

2.  Navegue até a pasta do projeto:

```bash
cd 02-css-modules
```

3.  Instale as dependências:

```bash
npm install
```

4.  Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5.  Abra http://localhost:5173\
    (ou a porta indicada no terminal) no seu navegador.
