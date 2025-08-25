import React from "react";

import { SunIcon, MoonIcon, ShoppingCartIcon } from "./Icons";


import styles from "./Navbar.module.css";

const Navbar = ({
  theme,
  toggleTheme,
  cartItemCount,
  onCartClick,
  triggerRef,
}) => {
  return (

    <header className={styles.navbar}>
      <nav className={`${styles.navbarConteudo} container`}>
        <div className={styles.navbarLogo}>MiniLojinha ✨</div>

        <div className={styles.navbarAcoes}>
          <button
            onClick={toggleTheme}
            className={styles.botaoTema}
            aria-label="Alternar tema"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            ref={triggerRef}
            onClick={onCartClick}
            className={styles.badgeCarrinho}
            aria-label="Abrir carrinho de compras"
          >
            <ShoppingCartIcon />

            {cartItemCount > 0 && (
              <span className={styles.contagemCarrinho}>{cartItemCount}</span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
