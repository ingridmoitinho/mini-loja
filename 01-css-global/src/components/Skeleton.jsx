import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-imagem pulse"></div>
      <div className="skeleton-conteudo">
        <div className="skeleton-linha pulse" style={{ width: '75%' }}></div>
        <div className="skeleton-linha pulse" style={{ width: '50%' }}></div>
        <div className="skeleton-linha pulse" style={{ width: '25%', marginTop: '1rem' }}></div>
        <div className="skeleton-botao pulse"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
