import React from 'react';
import Button from './Button';

const ProductCard = ({ product, onAddToCart }) => {
  const getTagClass = (tag) => {
    if (tag === 'Novo') return 'novo';
    if (tag === 'Promo') return 'promo';
    return '';
  };

  return (
    <div className="card-produto">
      <div className="card-imagem-wrapper">
        <img src={`https://placehold.co/${product.image}`} alt={product.title} className="card-imagem" loading="lazy" />
        {product.tag && (
          <span className={`card-tag ${getTagClass(product.tag)}`}>
            {product.tag}
          </span>
        )}
      </div>
      <div className="card-conteudo">
        <h3 className="card-titulo" title={product.title}>
          {product.title}
        </h3>
        <div className="card-rating">
          {'★'.repeat(Math.round(product.rating))}
          {'☆'.repeat(5 - Math.round(product.rating))}
          <span className="card-rating-texto">{product.rating.toFixed(1)}</span>
        </div>
        <p className="card-preco">
          R${product.price.toLocaleString('pt-PT', { minimumFractionDigits: 2 })}
        </p>
        <div className="card-acao">
          {}
          <Button variant="solid" onClick={() => onAddToCart(product)}>
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;