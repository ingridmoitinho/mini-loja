import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button
      className="w-full px-4 py-2 bg-light-primary text-white font-bold rounded-lg shadow-md hover:bg-light-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-primary dark:bg-dark-primary dark:hover:bg-dark-primary-hover dark:focus:ring-dark-primary dark:focus:ring-offset-dark-surface transition-colors duration-250 disabled:bg-gray-400 disabled:cursor-not-allowed"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;