import React, { useEffect, useRef } from 'react';
import Button from './Button';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  CloseButton,
  ModalBody,
  CartList,
  CartListItem,
  ItemInfo,
  ItemTitle,
  ItemPrice,
  RemoveButton,
  ModalFooter,
} from './CartModal.styles';


const CartModal = ({ isOpen, onClose, cartItems, onRemoveItem, triggerRef }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) {
    return null;
  }

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref={modalRef}
      >
        <ModalHeader>
          <h2 id="modal-title">Carrinho de Compras</h2>
          <CloseButton onClick={onClose} aria-label="Fechar carrinho de compras">&times;</CloseButton>
        </ModalHeader>
        <ModalBody>
          {cartItems.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            <CartList>
              {cartItems.map((item, index) => (
                <CartListItem key={`${item.id}-${index}`}>
                  <ItemInfo>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemPrice>
                      R${item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </ItemPrice>
                  </ItemInfo>
                  <RemoveButton onClick={() => onRemoveItem(item.id, index)} aria-label={`Remover ${item.title} do carrinho`}>
                    Remover
                  </RemoveButton>
                </CartListItem>
              ))}
            </CartList>
          )}
        </ModalBody>
        <ModalFooter>
          <h3>
            Total: R${totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </h3>
          <Button onClick={() => alert('Finalizando compra!')} disabled={cartItems.length === 0}>
            Finalizar Compra
          </Button>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CartModal;