import React from 'react';
import styles from './Skeleton.module.css';

const SkeletonCard = () => {
  return (
    <div className={styles.skeletonCard}>
      <div className={`${styles.skeletonImagem} ${styles.pulse}`}></div>
      <div className={styles.skeletonConteudo}>
        <div className={`${styles.skeletonLinha} ${styles.pulse}`} style={{ width: '75%' }}></div>
        <div className={`${styles.skeletonLinha} ${styles.pulse}`} style={{ width: '50%' }}></div>
        <div className={`${styles.skeletonLinha} ${styles.pulse}`} style={{ width: '25%', marginTop: '1rem' }}></div>
        <div className={`${styles.skeletonBotao} ${styles.pulse}`}></div>
      </div>
    </div>
  );
};

export default SkeletonCard;