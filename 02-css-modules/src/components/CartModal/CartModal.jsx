import React, { useEffect, useRef } from 'react';
import Button from '../Button/Button'; // O caminho pode precisar de ajuste
import styles from './CartModal.module.css';

const CartModal = ({ isOpen, onClose, cartItems, onRemoveItem, triggerRef }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    // ... a lógica interna do useEffect permanece a mesma ...
  }, [isOpen, onClose, triggerRef]);


  if (!isOpen) {
    return null;
  }

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalConteudo}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref={modalRef}
      >
        <div className={styles.modalCabecalho}>
          <h2 id="modal-title">Carrinho de Compras</h2>
          <button onClick={onClose} className={styles.botaoFechar} aria-label="Fechar carrinho de compras">&times;</button>
        </div>
        <div className={styles.modalCorpo}>
          {cartItems.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            <ul className={styles.listaCarrinho}>
              {cartItems.map((item, index) => (
                <li key={`${item.id}-${index}`} className={styles.carrinhoItem}>
                  <div className={styles.itemInfo}>
                    <span className={styles.itemTitulo}>{item.title}</span>
                    <span className={styles.itemPreco}>
                      R${item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <button onClick={() => onRemoveItem(item.id, index)} className={styles.botaoRemover} aria-label={`Remover ${item.title} do carrinho`}>
                    Remover
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={styles.modalRodape}>
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