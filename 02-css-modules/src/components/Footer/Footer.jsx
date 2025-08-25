import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © 2025 Desenvolvido por <a href="https://github.com/ingridmoitinho" target="_blank" rel="noopener noreferrer">Ingrid Moitinho</a>
        <i className={`fa-brands fa-bluesky ${styles.faBluesky}`}></i>
      </p>
    </footer>
  );
}

export default Footer;