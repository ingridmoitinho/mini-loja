import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import SkeletonCard from './components/Skeleton';
import CartModal from './components/CartModal';
import Footer from './components/Footer';

const products = [
  { "id": 1, "title": "Smart TV 4K", "price": 2799.90, "rating": 4.9, "tag": "Promo", "color": "blue", "imageText": "Smart TV" },
  { "id": 2, "title": "Drone 4K com GPS", "price": 750.00, "rating": 4.8, "tag": "Novo", "color": "green", "imageText": "Drone" },
  { "id": 3, "title": "Assistente Virtual", "price": 650.50, "rating": 4.8, "tag": "Novo", "color": "primary", "imageText": "Assistente" },
  { "id": 4, "title": "Impressora", "price": 1150.00, "rating": 4.6, "tag": null, "color": "turquoise", "imageText": "Impressora" },
  { "id": 5, "title": "Tablet para Desenho", "price": 450.00, "rating": 4.8, "tag": null, "color": "primary", "imageText": "Tablet" },
  { "id": 6, "title": "Teclado Mecânico", "price": 350.00, "rating": 5.0, "tag": "Promo", "color": "red", "imageText": "Teclado" },
  { "id": 7, "title": "Webcam Full HD ", "price": 280.00, "rating": 4.7, "tag": null, "color": "pink-primary", "imageText": "Webcam" },
  { "id": 8, "title": "Notebook Ultra Fino", "price": 2899.00, "rating": 4.9, "tag": "Promo", "color": "green", "imageText": "Notebook" }
];

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartTriggerRef = useRef(null);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
  }, [theme]);


  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleThemeChange = (e) => {
      if (localStorage.getItem('theme') === null) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleThemeChange);
    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const handleAddToCart = (productToAdd) => {
    setCart(prevCart => [...prevCart, productToAdd]);
  };

  const handleRemoveFromCart = (productIdToRemove, indexToRemove) => {
    setCart(prevCart => prevCart.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        cartItemCount={cart.length}
        onCartClick={() => setIsCartOpen(true)}
        triggerRef={cartTriggerRef}
      />

      <main className="flex-grow max-w-5xl mx-auto px-4 pt-24 pb-12 w-full">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemoveItem={handleRemoveFromCart}
        triggerRef={cartTriggerRef}
      />
    </div>
  );
}