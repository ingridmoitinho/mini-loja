import React from 'react';
import { SunIcon, MoonIcon, ShoppingCartIcon } from './Icons';
import {
  Header,
  Nav,
  Logo,
  Actions,
  ThemeButton,
  CartBadge,
  CartCount,
} from './Navbar.styles';

const Navbar = ({ theme, toggleTheme, cartItemCount, onCartClick, triggerRef }) => {
  return (
    <Header>
      <Nav className="container">
        <Logo>MiniLojinha ✨</Logo>
        <Actions>
          <ThemeButton onClick={toggleTheme} aria-label="Alternar tema">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </ThemeButton>
          <CartBadge onClick={onCartClick} ref={triggerRef}>
            <ShoppingCartIcon />
            {cartItemCount > 0 && (
              <CartCount>{cartItemCount}</CartCount>
            )}
          </CartBadge>
        </Actions>
      </Nav>
    </Header>
  );
};

export default Navbar;