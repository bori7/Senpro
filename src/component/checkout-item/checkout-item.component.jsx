import React from 'react';


import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem}) => {

  const removeItem = ()=> {}
  const addItem= ()=> {}
  const clearItem = ()=> {}

  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      {/* <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div> */}
      <span className='name'>{cartItem}</span>
      <span className='quantity'>
        {/* <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{'0'}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div> */}
      </span>
      <div className='price'>{'0'}</div>
      <span className='quantity'>
        {/* <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{'0'}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div> */}
      </span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};


export default CheckoutItem;
