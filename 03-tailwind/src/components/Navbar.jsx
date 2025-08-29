import React from 'react';
import { SunIcon, MoonIcon, ShoppingCartIcon } from './Icons';

const Navbar = ({ theme, toggleTheme, cartItemCount, onCartClick, triggerRef }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-light-surface/80 dark:bg-dark-surface/80 backdrop-blur-sm shadow-md transition-colors duration-250">
      <nav className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">
          MiniLojinha ✨
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="p-2 rounded-full text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-background dark:hover:bg-dark-background"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <div
            className="relative cursor-pointer"
            onClick={onCartClick}
            ref={triggerRef}
          >
            <ShoppingCartIcon className="text-light-text-secondary dark:text-dark-text-secondary" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                {cartItemCount}
              </span>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;