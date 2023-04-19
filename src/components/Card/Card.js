import React from 'react';
import './card.css';

const Card = (props) => {
  const { product } = props;
  const handleGoDetails = (url) => {
    console.log(`/product/${url}`);
  };

  return (
    <div className='card' onClick={() => handleGoDetails(product.detailLink)}>
      <div className='card__image'>
        <img src={product.img} alt={product.name} />
      </div>
      <div className='card__banner'>
        <span>{product.name}</span>
        <span>Alışverişe Başla</span>
      </div>
    </div>
  );
};

export default Card;
