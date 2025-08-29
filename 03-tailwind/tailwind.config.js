/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Habilitando o modo escuro baseado em classe
  theme: {
    extend: {
      colors: {
        light: {
          background: '#f5f3ff',
          surface: '#ffffff',
          'text-primary': '#1e1b4b',
          'text-secondary': '#5b21b6',
          border: '#ddd6fe',
          'skeleton-base': '#eef2ff',         
          primary: '#7c3aed',         
          'primary-hover': '#6d28d9',
          'pink-primary': '#f06292', 
          'pink-hover': '#e91e63',
          'blue': '#3498db',         
          'green': '#2ecc71',        
          'turquoise': '#1abc9c',   
          'red': '#e74c3c',          
        },
        dark: {
          background: '#1e1b4b',
          surface: '#312e81',
          'text-primary': '#f5f3ff',
          'text-secondary': '#a78bfa',
          border: '#4338ca',
          'skeleton-base': '#4f46e5',         
          primary: '#a78bfa',         
          'primary-hover': '#8b5cf6',
          'pink-primary': '#f06292', 
          'pink-hover': '#e91e63',
          'blue': '#2980b9',         
          'green': '#27ae60',        
          'turquoise': '#16a085',    
          'red': '#c0392b',          
        }
      },
      fontFamily: {
        sans: ['"Lora"', 'serif'],
      },
      boxShadow: {
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },
      borderRadius: {
        'lg': '0.5rem',
      },
      transitionDuration: {
        '250': '250ms',
      }
    },
  },
  plugins: [],
}