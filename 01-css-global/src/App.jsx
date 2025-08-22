import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import SkeletonCard from './components/Skeleton';
import CartModal from './components/CartModal'; 
import Footer from './components/Footer';
import './styles.css';

const products = [
    
  { "id": 1, "title": "Smart TV 4K", "price": 2799.90, "rating": 4.9, "tag": "Promo", "image": "600x600/3498db/ffffff?text=Smart+TV" },
  { "id": 2, "title": "Drone 4K com GPS", "price": 750.00, "rating": 4.8, "tag": "Novo", "image": "600x600/8e44ad/ffffff?text=Drone" },
  { "id": 3, "title": "Assistente Virtual", "price": 650.50, "rating": 4.8, "tag": "Novo", "image": "600x600/9b59b6/ffffff?text=Assistente" },
  { "id": 4, "title": "Impressora", "price": 1150.00, "rating": 4.6, "tag": null, "image": "600x600/f1c40f/000000?text=Impressora" },
  { "id": 5, "title": "Tablet para Desenho Digital", "price": 450.00, "rating": 4.8, "tag": null, "image": "600x600/1abc9c/ffffff?text=Tablet" },
  { "id": 6, "title": "Teclado Mecânico", "price": 350.00, "rating": 5.0, "tag": "Promo", "image": "600x600/1abc9c/ffffff?text=Teclado" },
  { "id": 7, "title": "Webcam Full HD ", "price": 280.00, "rating": 4.7, "tag": null, "image": "600x600/8e44ad/ffffff?text=Webcam" },
  { "id": 8, "title": "Notebook Ultra Fino i7", "price": 2899.00, "rating": 4.9, "tag": "Promo", "image": "600x600/2ecc71/ffffff?text=Notebook" }
];

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); 

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (localStorage.getItem('theme') === null) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleAddToCart = (productToAdd) => {
    setCart(prevCart => [...prevCart, productToAdd]);
  };
  
   // Para lidar com itens duplicados, remove pelo índice
  const handleRemoveFromCart = (productIdToRemove, indexToRemove) => {
    setCart(prevCart => prevCart.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        cartItemCount={cart.length}
        onCartClick={() => setIsCartOpen(true)} // <- MODAL
      />

      <main className="conteudo-principal container">
        <div className="grelha-produtos">
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
        </div>
      </main>
       <Footer />

      {/*-- RENDERIZAR O MODAL --*/}
      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemoveItem={handleRemoveFromCart}
      />
    </>
  );
}