import React from 'react';

function Footer() {
  return (
    <footer className="w-full text-center py-4 bg-light-surface dark:bg-dark-surface border-t border-light-border dark:border-dark-border">
      <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
        © 2025 Desenvolvido por{' '}
        <a
          href="https://github.com/ingridmoitinho"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-light-primary dark:text-dark-primary hover:underline"
        >
          Ingrid Moitinho
        </a>
      </p>
    </footer>
  );
}

export default Footer;