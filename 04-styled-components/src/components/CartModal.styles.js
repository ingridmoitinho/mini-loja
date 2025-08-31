import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.corSuperficie};
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.raioBorda};
  box-shadow: ${({ theme }) => theme.sombraXl};
  width: 90%;
  max-width: 500px;
  color: ${({ theme }) => theme.corTextoPrimario};
  max-height: 80vh;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.corBorda};
  padding-bottom: 1rem;
  margin-bottom: 1rem;

  h2 {
    margin: 0;
    font-size: 1.25rem;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.corTextoSecundario};
  padding: 0;
  line-height: 1;
`;

export const ModalBody = styled.div`
  overflow-y: auto;
  flex-grow: 1;
`;

export const CartList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CartListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.corBorda};

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled.span`
  font-weight: 600;
`;

export const ItemPrice = styled.span`
  color: ${({ theme }) => theme.corTextoSecundario};
  font-size: 0.875rem;
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  color: #ef4444;
  border: 1px solid #ef4444;
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.raioBorda};
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all ${({ theme }) => theme.duracaoTransicao};

  &:hover {
    background-color: #ef4444;
    color: white;
  }
`;

export const ModalFooter = styled.div`
  border-top: 1px solid ${({ theme }) => theme.corBorda};
  padding-top: 1rem;
  margin-top: 1rem;
  text-align: right;

  h3 {
    margin-bottom: 1rem;
  }
`;