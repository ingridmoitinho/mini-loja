import { useState, useEffect, useRef } from "react";

import "./globals.css";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./components/ProductCard/ProductCard";
import SkeletonCard from "./components/Skeleton/Skeleton";
import CartModal from "./components/CartModal/CartModal";
import Footer from "./components/Footer/Footer";

// Dados simulados 
const mockProducts = [
  {
    id: 1,
    title: "Caderno Universitário 200 Folhas",
    price: 18.9,
    rating: 4.8,
    image:
      "https://via.placeholder.com/300x300/8a3ffc/ffffff?text=Caderno+Universitário",
    tag: "Novo",
  },
  {
    id: 2,
    title: "Kit Canetas Coloridas 12 Cores",
    price: 24.5,
    rating: 4.6,
    image:
      "https://via.placeholder.com/300x300/bb86fc/ffffff?text=Kit+Canetas+Coloridas",
    tag: "Promo",
  },
  {
    id: 3,
    title: "Agenda 2025 Capa Dura",
    price: 32.0,
    rating: 4.9,
    image: "https://via.placeholder.com/300x300/7b2cbf/ffffff?text=Agenda+2025",
  },
  {
    id: 4,
    title: "Estojo Escolar 3 Compartimentos",
    price: 45.9,
    rating: 4.5,
    image:
      "https://via.placeholder.com/300x300/a56ef4/ffffff?text=Estojo+Escolar",
    tag: "Novo",
  },
  {
    id: 5,
    title: "Kit Escolar Completo 15 Itens",
    price: 89.9,
    rating: 4.7,
    image:
      "https://via.placeholder.com/300x300/8a3ffc/ffffff?text=Kit+Escolar+Completo",
  },
  {
    id: 6,
    title: "Folha Sulfite A4 500 Folhas",
    price: 28.5,
    rating: 4.8,
    image:
      "https://via.placeholder.com/300x300/bb86fc/ffffff?text=Folha+Sulfite+A4",
  },
  {
    id: 7,
    title: "Marcadores Fluorescentes 6 Cores",
    price: 15.9,
    rating: 4.4,
    image:
      "https://via.placeholder.com/300x300/7b2cbf/ffffff?text=Marcadores+Fluorescentes",
    tag: "Promo",
  },
  {
    id: 8,
    title: "Calculadora Científica Casio",
    price: 124.9,
    rating: 4.6,
    image:
      "https://via.placeholder.com/300x300/a56ef4/ffffff?text=Calculadora+Científica",
  },
];

function App() {
  const [theme, setTheme] = useState(() => {
    const userSetTheme = localStorage.getItem("userSetTheme");
    const savedTheme = localStorage.getItem("theme");

    if (userSetTheme === "true" && savedTheme) {
      return savedTheme;
    }

    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    return systemPrefersDark ? "dark" : "light";
  });

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartTriggerRef = useRef(null);

  // Efeito para aplicar o tema e salvar no localStorage
  useEffect(() => {
    console.log("-> Efeito do tema disparado. Novo tema:", theme);
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

    try {
      localStorage.setItem("theme", theme);
      console.log("   'theme' salvo no localStorage com o valor:", theme);
    } catch (e) {
      console.error("Falha ao salvar 'theme' no localStorage:", e);
    }
  }, [theme]);

  // Efeito tema do sistema operacional
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e) => {
      const userSetTheme = localStorage.getItem("userSetTheme");

      if (userSetTheme !== "true") {
        console.log("-> Tema do sistema mudou. Aplicando...");
        setTheme(e.matches ? "dark" : "light");
      } else {
        console.log("-> Tema do sistema mudou, mas ignorando pois o usuário escolheu um tema manual.");
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  // Carrega os produtos
  useEffect(() => {
    setTimeout(() => {
      setProducts(mockProducts);
      setIsLoading(false);
    }, 2000);
  }, []);

  // Função para trocar o tema manualmente
  const toggleTheme = () => {
    console.log("-> Botão toggleTheme clicado. Tema atual:", theme);
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    try {
      localStorage.setItem("userSetTheme", "true");
      console.log("   'userSetTheme' salvo no localStorage como 'true'.");
    } catch (e) {
      console.error("Falha ao salvar 'userSetTheme' no localStorage:", e);
    }
  };

  const handleAddToCart = (productToAdd) => {
    setCartItems((currentItems) => [...currentItems, productToAdd]);
  };

  const handleRemoveItem = (productId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId)
    );
  };

  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);

  return (
    <>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        cartItemCount={cartItems.length}
        onCartClick={handleOpenCart}
        triggerRef={cartTriggerRef}
      />

      <main className={`${styles.conteudoPrincipal} container`}>
        <div className={styles.grelhaProdutos}>
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
            : products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
        </div>
      </main>

      <CartModal
        isOpen={isCartOpen}
        onClose={handleCloseCart}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        triggerRef={cartTriggerRef}
      />

      <Footer />
    </>
  );
}

export default App;