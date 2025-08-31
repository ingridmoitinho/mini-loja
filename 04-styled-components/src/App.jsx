import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './GlobalStyles';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import SkeletonCard from './components/Skeleton';
import CartModal from './components/CartModal';
import Footer from './components/Footer';
import styled from 'styled-components';

const products = [
    { "id": 1, "title": "Smart TV 4K", "price": 2799.90, "rating": 4.9, "tag": "Promo", "image": "600x600/3498db/ffffff?text=Smart+TV" },
    { "id": 2, "title": "Drone 4K com GPS", "price": 750.00, "rating": 4.8, "tag": "Novo", "image": "600x600/8e44ad/ffffff?text=Drone" },
    { "id": 3, "title": "Assistente Virtual", "price": 650.50, "rating": 4.8, "tag": "Novo", "image": "600x600/9b59b6/ffffff?text=Assistente" },
    { "id": 4, "title": "Impressora", "price": 1150.00, "rating": 4.6, "tag": null, "image": "600x600/f1c40f/000000?text=Impressora" },
    { "id": 5, "title": "Tablet para Desenho", "price": 450.00, "rating": 4.8, "tag": null, "image": "600x600/1abc9c/ffffff?text=Tablet" },
    { "id": 6, "title": "Teclado Mecânico", "price": 350.00, "rating": 5.0, "tag": "Promo", "image": "600x600/1abc9c/ffffff?text=Teclado" },
    { "id": 7, "title": "Webcam Full HD ", "price": 280.00, "rating": 4.7, "tag": null, "image": "600x600/8e44ad/ffffff?text=Webcam" },
    { "id": 8, "title": "Notebook Ultra Fino", "price": 2899.00, "rating": 4.9, "tag": "Promo", "image": "600x600/2ecc71/ffffff?text=Notebook" }
];

const MainContent = styled.main`
  padding-top: 6rem;
  padding-bottom: 3rem;
`;

const ProductsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;

  @media (min-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default function App() {
  // Lógica de inicialização do tema
  const [theme, setTheme] = useState(() => {
    const userHasManuallySetTheme = localStorage.getItem('userSetTheme') === 'true';
    const savedTheme = localStorage.getItem('theme');
   
    if (userHasManuallySetTheme && savedTheme) {
      return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartTriggerRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleThemeChange = (e) => {
      // Só muda o tema se o usuário NÃO tiver escolhido um manualmente
      const userHasManuallySetTheme = localStorage.getItem('userSetTheme') === 'true';
      if (!userHasManuallySetTheme) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleThemeChange);    
    
    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, []);
  
  useEffect(() => {
      localStorage.setItem('theme', theme);
  }, [theme]);


  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);  
 
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // Marca que o usuário fez uma escolha manual
    localStorage.setItem('userSetTheme', 'true');
  };

  const handleAddToCart = (productToAdd) => {
    setCart(prevCart => [...prevCart, productToAdd]);
  };

  const handleRemoveFromCart = (productIdToRemove, indexToRemove) => {
    setCart(prevCart => prevCart.filter((_, index) => index !== indexToRemove));
  };
  
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        cartItemCount={cart.length}
        onCartClick={() => setIsCartOpen(true)}
        triggerRef={cartTriggerRef}
      />

      <MainContent className="container">
        <ProductsGrid>
          {isLoading
            ? Array.from({ length: products.length }).map((_, index) => <SkeletonCard key={index} />)
            : products.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))
          }
        </ProductsGrid>
      </MainContent>

      <Footer />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemoveItem={handleRemoveFromCart}
        triggerRef={cartTriggerRef}
      />
    </ThemeProvider>
  );
}