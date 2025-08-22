import React from 'react';
import { SunIcon, MoonIcon, ShoppingCartIcon } from './Icons';

const Navbar = ({ theme, toggleTheme, cartItemCount, onCartClick }) => {
  return (
    <header className="navbar">
      <nav className="navbar-conteudo container">
        <div className="navbar-logo">MiniLojinha ✨</div>
        <div className="navbar-acoes">
          <button onClick={toggleTheme} className="botao-tema" aria-label="Alternar tema">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          {}
          <div className="badge-carrinho" onClick={onCartClick} style={{ cursor: 'pointer' }}>
            <ShoppingCartIcon />
            {cartItemCount > 0 && (
              <span className="contagem-carrinho">{cartItemCount}</span>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;