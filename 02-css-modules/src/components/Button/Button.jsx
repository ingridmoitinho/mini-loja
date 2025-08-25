import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, variant = 'solid', ...props }) => {
  // Mapeia a prop 'variant' para a classe CSS correspondente
  const variantClass = styles[variant] || styles.solid;
  
  const className = `${styles.btn} ${variantClass}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;