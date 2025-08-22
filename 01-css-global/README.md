# Projeto Mini Loja: Versão 1 - CSS Global

Esta é a primeira de quatro implementações de uma interface de **mini loja**, desenvolvida como parte da Atividade 6 - Estilização em React da Formação Dev. Full Stack Jr T1 2025 (+praTi & Codifica Edu).  
O objetivo desta versão é construir todos os componentes e funcionalidades utilizando exclusivamente a abordagem de **CSS Global**.

Todo o estilo da aplicação está centralizado em um único arquivo CSS (`src/styles.css`), que é importado no ponto de entrada da aplicação. As classes são aplicadas diretamente aos componentes JSX para estilização.

---

## Funcionalidades Implementadas

### Navbar Fixa
- Inclui logo.
- Botão para alternar entre tema claro e escuro (com persistência no `localStorage`).
- Ícone de carrinho de compras.

### Modal do Carrinho
- Abre ao clicar no ícone do carrinho.
- Exibe produtos adicionados.
- Permite **somar e remover produtos** dinamicamente.
- Mostra o **total atualizado** automaticamente.

### Grid de Produtos Responsivo
O layout do grid se adapta a diferentes tamanhos de tela:

- ≤ 480px: 1 coluna
- 481px – 768px: 2 colunas
- 769px – 1024px: 3 colunas
- ≥ 1025px: 4 colunas

### Card de Produto Completo
- Imagem com **lazy loading** e placeholder.
- Título com limite de duas linhas e **ellipsis**.
- Preço e avaliação (rating).
- Tag para "Novo" ou "Promoção".
- Botão "Adicionar" com variantes (**solid, outline, ghost**).

### Estados e Interações
- Efeitos de **hover** (sombra/elevação) e **focus** (anel de foco visível) em elementos interativos.
- Estado `disabled` para botões.
- Simulação de carregamento (**loading**) com componentes de **Skeleton** para evitar layout shift.

### Acessibilidade
- Navegação completa via teclado.
- Uso de atributos `aria-*` para semântica.
- Contraste de cores validado (≥ 4.5:1).

### Animações
- Transições suaves de 150-250ms para interações, focadas em `transform` e `opacity` para melhor performance.

---

## Abordagem Técnica: CSS Global

### Arquivo Único
Todos os seletores de CSS residem no arquivo `src/styles.css`.

### Variáveis CSS
- Para gerenciar os **design tokens** (cores, espaçamentos, sombras), foram usadas **variáveis CSS** (`:root`), que são trocadas dinamicamente para aplicar o **Dark Mode**.

---

## Como Executar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/ingridmoitinho/mini-loja.git
```

2.Navegue até a pasta do projeto:
```bash
cd 01-css-global
```

3. Instale as dependências:
```bash
npm install
```

4.Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

5. Abra http://localhost:5173
 (ou a porta indicada no terminal) no seu navegador.