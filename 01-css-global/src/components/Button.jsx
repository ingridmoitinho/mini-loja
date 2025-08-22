import React from 'react';

const Button = ({ children, variant = 'solid', ...props }) => {
  
  const className = `btn btn-${variant}`;
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
