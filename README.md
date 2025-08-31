# Atividade 6 — Estilização em React: Mini Loja  
_Formação Dev. Full Stack Jr T1 2025 (+praTi & Codifica Edu)_

## 📌 Tarefa
Implementar a mesma tela em **4 versões** diferentes:

1. CSS Global  
2. CSS Modules  
3. Tailwind CSS  
4. styled-components  

Cada versão deve conter os componentes: **Navbar**, **ProductCard**, **Button**, **Skeleton**.

---

## 🎯 Requisitos da Tela
- **Navbar (fixa):** logo, toggle de tema (claro/escuro com persistência) e badge do carrinho.  
- **Grid responsivo de produtos:**  
  - ≤480px: 1 coluna  
  - 481–768px: 2 colunas  
  - 769–1024px: 3 colunas  
  - ≥1025px: 4 colunas  
- **Card de produto:**  
  - Imagem 1:1 (placeholder, lazy loading)  
  - Título (2 linhas, ellipsis)  
  - Preço  
  - Rating (★)  
  - Tag (“Novo” / “Promo”)  
  - Botão “Adicionar” (solid / outline / ghost)

---

## ⚡ Estados / Interações
- Hover (elevação/sombra)  
- Focus visível  
- Disabled  
- Loading com skeleton (sem layout shift)  
- Dark mode aplicado a cores/sombras/bordas  

---

## ♿ Acessibilidade
- Navegação por teclado  
- `aria-*` quando fizer sentido  
- Contraste ≥ 4.5:1  

---

## 🎨 Animações
- Transições entre **150–250ms**  
- Usar `transform` / `opacity`  

---

## 📦 Entregáveis
- Quatro pastas:  
  - `01-css-global/`  
  - `02-css-modules/`  
  - `03-tailwind/`  
  - `04-styled-components/`  
- Cada pasta com: `Navbar`, `ProductCard`, `Button`, `Skeleton` e um **README curto**  

---

## ✅ Critérios de Aceite
- Breakpoints exatamente como descritos  
- Dark mode com persistência  
- Focus ring visível  
- Skeleton sem layout shift  
- Variantes do botão consistentes nos dois temas  
- Organização clara de pastas e uso de tokens (cores, espaçamentos, raio, sombras)  
