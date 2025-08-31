import React from 'react';
import { FooterWrapper, FooterLink } from './Footer.styles';

function Footer() {
  return (
    <FooterWrapper>
      <p>
        © 2025 Desenvolvido por{' '}
        <FooterLink href="https://github.com/ingridmoitinho" target="_blank" rel="noopener noreferrer">
          Ingrid Moitinho
        </FooterLink>
        <i className="fa-brands fa-bluesky"></i>
      </p>
    </FooterWrapper>
  );
}

export default Footer;