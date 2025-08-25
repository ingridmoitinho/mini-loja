import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, onAddToCart }) => {
  const [imageError, setImageError] = useState(false);
  
  const getTagClass = (tag) => {
    if (tag === 'Novo') return styles.novo;
    if (tag === 'Promo') return styles.promo;
    return '';
  };

  // Extrai cor e texto da string de imagem para fallback
  const getColorFromImage = (imageString) => {
    const colorMatch = imageString.match(/([a-f0-9]{6})/i);
    return colorMatch ? `#${colorMatch[1]}` : '#8a3ffc';
  };

  const getTextFromImage = (imageString) => {
    const textMatch = imageString.match(/text=([^&]+)/);
    if (textMatch) {
      return decodeURIComponent(textMatch[1]).replace(/\+/g, ' ');
    }
    return product.title.split(' ')[0]; 
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={styles.cardProduto}>
      <div className={styles.cardImagemWrapper}>
        {!imageError ? (
          // Tenta carregar a imagem 
          <img 
            src={`https://placehold.co/${product.image}`} 
            alt={product.title} 
            className={styles.cardImagem} 
            loading="lazy"
            onError={handleImageError}
          />
        ) : (
          // Se a imagem falhar, usa CSS puro
          <div 
            className={styles.cardImagem}
            style={{
              backgroundColor: getColorFromImage(product.image),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '20px',
              fontWeight: 'bold',
              textAlign: 'center',
              padding: '20px',
              minHeight: '200px',
              height: '250px',
              width: '100%',
              boxSizing: 'border-box',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              lineHeight: '1.2',
              wordWrap: 'break-word',
              position: 'relative'
            }}
          >
            <span style={{
              display: 'block',
              textAlign: 'center',
              width: '100%'
            }}>
              {getTextFromImage(product.image)}
            </span>
          </div>
        )}
        
        {product.tag && (
          <span className={`${styles.cardTag} ${getTagClass(product.tag)}`}>
            {product.tag}
          </span>
        )}
      </div>
      <div className={styles.cardConteudo}>
        <h3 className={styles.cardTitulo} title={product.title}>
          {product.title}
        </h3>
        <div className={styles.cardRating}>
          {'★'.repeat(Math.round(product.rating))}
          {'☆'.repeat(5 - Math.round(product.rating))}
          <span className={styles.cardRatingTexto}>{product.rating.toFixed(1)}</span>
        </div>
        <p className={styles.cardPreco}>
          R${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </p>
        <div className={styles.cardAcao}>
          <Button variant="solid" onClick={() => onAddToCart(product)}>
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;