import React from 'react';
import Button from './Button';

// Objeto para mapear o nome da cor do produto para as classes do Tailwind
const colorClasses = {
    primary: 'bg-light-primary dark:bg-dark-primary',
    'pink-primary': 'bg-light-pink-primary dark:bg-dark-pink-primary',
    blue: 'bg-light-blue dark:bg-dark-blue',
    green: 'bg-light-green dark:bg-dark-green',
    turquoise: 'bg-light-turquoise dark:bg-dark-turquoise',
    red: 'bg-light-red dark:bg-dark-red',
};

const tagClasses = {
    'Promo': 'bg-light-red dark:bg-dark-red text-white',
    'Novo': 'bg-light-blue dark:bg-dark-blue text-white',
};

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="bg-light-surface dark:bg-dark-surface rounded-lg shadow-md overflow-hidden flex flex-col transition-shadow duration-250 hover:shadow-xl">
            <div className="relative">
                {/* Placeholder de imagem com DIV e cores do tema */}
                <div className={`w-full h-40 flex items-center justify-center ${colorClasses[product.color] || 'bg-gray-200'}`}>
                    <span className="text-white font-bold text-lg">{product.imageText}</span>
                </div>

                {product.tag && (
                    <span className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded ${tagClasses[product.tag] || 'bg-gray-500 text-white'}`}>
                        {product.tag}
                    </span>
                )}
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <h3
                    className="text-base font-bold text-light-text-primary dark:text-dark-text-primary truncate"
                    title={product.title}
                >
                    {product.title}
                </h3>

                <div className="flex items-center my-2">
                    <span className="text-yellow-400">
                        {'★'.repeat(Math.round(product.rating))}
                    </span>

                    <span className="text-gray-300">
                        {'☆'.repeat(5 - Math.round(product.rating))}
                    </span>

                    <span className="ml-2 text-sm text-light-text-secondary dark:text-dark-text-secondary">
                        {product.rating.toFixed(1)}
                    </span>
                </div>

                <p className="text-lg font-semibold text-light-text-secondary dark:text-dark-text-secondary">
                    R${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>

                <div className="mt-4 pt-4 border-t border-light-border dark:border-dark-border mt-auto">
                    <Button onClick={() => onAddToCart(product)}>
                        Adicionar
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;