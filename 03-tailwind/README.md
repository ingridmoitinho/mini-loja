# Projeto Mini Loja: Versão 3 - Tailwind CSS

Esta é a terceira de quatro implementações de uma interface de **mini
loja**, desenvolvida como parte da Atividade 6 - Estilização em React da
Formação Dev. Full Stack Jr T1 2025 (+praTi & Codifica Edu).\
O objetivo desta versão é aplicar a biblioteca **Tailwind CSS**,
utilizando utilitários de classe para criar interfaces rápidas,
consistentes e responsivas.

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

O layout do grid se adapta a diferentes tamanhos de tela usando
breakpoints do Tailwind:

-   `sm`: 1 coluna
-   `md`: 2 colunas
-   `lg`: 3 colunas
-   `xl`: 4 colunas

### Card de Produto Completo

-   Imagem com **lazy loading** e fallback estilizado com utilitários do
    Tailwind.
-   Título com limite de duas linhas e **ellipsis** (`line-clamp`).
-   Preço e avaliação (rating).
-   Tag para "Novo" ou "Promoção".
-   Botão "Adicionar" com variantes (**solid, outline, ghost**) usando
    classes condicionais.

### Estados e Interações

-   Efeitos de **hover** (`hover:shadow-lg`, `hover:scale-105`) e
    **focus** (`focus:ring`).
-   Estado `disabled` estilizado com Tailwind (`opacity-50`,
    `cursor-not-allowed`).
-   Simulação de carregamento (**loading**) com componentes de
    **Skeleton** feitos em Tailwind.

### Acessibilidade

-   Navegação completa via teclado.
-   Uso de atributos `aria-*` para semântica.
-   Contraste de cores validado (≥ 4.5:1).

### Animações

-   Transições suaves (`transition`, `duration-200`, `ease-in-out`)
    aplicadas diretamente nas classes.

------------------------------------------------------------------------

## Abordagem Técnica: Tailwind CSS

### Utilização

Todo o estilo é definido diretamente nas `className` dos componentes
React, usando utilitários do Tailwind.

Exemplo de uso:

``` jsx
<div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
  ...
</div>
```

### Vantagens

-   Rápida prototipação sem necessidade de arquivos CSS separados.
-   Garantia de consistência de design.
-   Facilita a responsividade e acessibilidade.

------------------------------------------------------------------------

## Como Executar o Projeto

1.  Clone o repositório:

``` bash
git clone https://github.com/ingridmoitinho/mini-loja.git
```

2.  Navegue até a pasta do projeto:

``` bash
cd 03-tailwind
```

3.  Instale as dependências:

``` bash
npm install
```

4. Instale e configure o Tailwind CSS 3 (caso ainda não esteja configurado):

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

5. Inicie o servidor de desenvolvimento:

``` bash
npm run dev
```

5.  Abra http://localhost:5173\
    (ou a porta indicada no terminal) no seu navegador.
