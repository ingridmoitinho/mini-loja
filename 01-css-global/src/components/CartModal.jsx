import React, { useEffect, useRef } from 'react';
import Button from './Button';

const CartModal = ({ isOpen, onClose, cartItems, onRemoveItem, triggerRef }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const closeButton = modalRef.current.querySelector('.botao-fechar');
      if (closeButton) {
        closeButton.focus();
      }

      const handleEsc = (event) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };

      const handleFocusTrap = (event) => {
        if (event.key === 'Tab') {
          const focusableElements = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (event.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              event.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              event.preventDefault();
            }
          }
        }
      };

      document.addEventListener('keydown', handleEsc);
      document.addEventListener('keydown', handleFocusTrap);

      return () => {
        document.removeEventListener('keydown', handleEsc);
        document.removeEventListener('keydown', handleFocusTrap);

        if (triggerRef && triggerRef.current) {
          triggerRef.current.focus();
        }
      };
    }
  }, [isOpen, onClose, triggerRef]);


  if (!isOpen) {
    return null;
  }

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-conteudo"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref={modalRef}
      >
        <div className="modal-cabecalho">
          <h2 id="modal-title">Carrinho de Compras</h2>
          <button onClick={onClose} className="botao-fechar" aria-label="Fechar carrinho de compras">&times;</button>
        </div>
        <div className="modal-corpo">
          {cartItems.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            <ul className="lista-carrinho">
              {cartItems.map((item, index) => (
                <li key={`${item.id}-${index}`} className="carrinho-item">
                  <div className="item-info">
                    <span className="item-titulo">{item.title}</span>
                    <span className="item-preco">
                      R${item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <button onClick={() => onRemoveItem(item.id, index)} className="botao-remover" aria-label={`Remover ${item.title} do carrinho`}>
                    Remover
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="modal-rodape">
          <h3>
            Total: R${totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </h3>
          <Button variant="solid" onClick={() => alert('Finalizando compra!')} disabled={cartItems.length === 0}>
            Finalizar Compra
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
