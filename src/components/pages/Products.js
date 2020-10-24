import React from 'react';
import '../../App.css';
import bg from '../images/img-1.jpg';

export default function Products() {
  return (
    <h1 className='products' style={{ backgroundImage: `url(${bg})` }}>
      PRODUCTS
    </h1>
  );
}
