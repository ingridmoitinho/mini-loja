import React from 'react';
import Button from './Button';
import {
  Card,
  ImageWrapper,
  CardImage,
  CardTag,
  CardContent,
  CardTitle,
  CardRating,
  CardRatingText,
  CardPrice,
  CardAction,
} from './ProductCard.styles';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card>
      <ImageWrapper>
        <CardImage src={`https://placehold.co/${product.image}`} alt={product.title} loading="lazy" />
        {product.tag && (
          <CardTag tagType={product.tag}>
            {product.tag}
          </CardTag>
        )}
      </ImageWrapper>
      <CardContent>
        <CardTitle title={product.title}>
          {product.title}
        </CardTitle>
        <CardRating>
          {'★'.repeat(Math.round(product.rating))}
          {'☆'.repeat(5 - Math.round(product.rating))}
          <CardRatingText>{product.rating.toFixed(1)}</CardRatingText>
        </CardRating>
        <CardPrice>
          R${product.price.toLocaleString('pt-PT', { minimumFractionDigits: 2 })}
        </CardPrice>
        <CardAction>
          <Button onClick={() => onAddToCart(product)}>
            Adicionar
          </Button>
        </CardAction>
      </CardContent>
    </Card>
  );
};

export default ProductCard;