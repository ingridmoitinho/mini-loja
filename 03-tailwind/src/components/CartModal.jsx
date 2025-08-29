import React, { useEffect, useRef } from 'react';
import Button from './Button';

const CartModal = ({ isOpen, onClose, cartItems, onRemoveItem }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center transition-opacity duration-250"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-light-surface dark:bg-dark-surface rounded-lg shadow-xl w-full max-w-md m-4 flex flex-col max-h-[90vh]"
      >
        <header className="flex items-center justify-between p-4 border-b border-light-border dark:border-dark-border">
          <h2 id="modal-title" className="text-lg font-bold text-light-text-primary dark:text-dark-text-primary">
            Carrinho de Compras
          </h2>
          <button
            onClick={onClose}
            aria-label="Fechar carrinho de compras"
            className="text-2xl text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary"
          >
            &times;
          </button>
        </header>

        <div className="p-4 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-light-text-secondary dark:text-dark-text-secondary">Seu carrinho está vazio.</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <li key={`${item.id}-${index}`} className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-light-text-primary dark:text-dark-text-primary">{item.title}</h4>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                      R${item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id, index)}
                    aria-label={`Remover ${item.title} do carrinho`}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <footer className="p-4 mt-auto border-t border-light-border dark:border-dark-border space-y-4">
          <h3 className="text-xl font-bold text-right text-light-text-primary dark:text-dark-text-primary">
            Total: R${totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </h3>
          <Button onClick={() => alert('Finalizando compra!')} disabled={cartItems.length === 0}>
            Finalizar Compra
          </Button>
        </footer>
      </div>
    </div>
  );
};

export default CartModal;