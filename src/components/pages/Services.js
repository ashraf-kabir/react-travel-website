import React from 'react';
import '../../App.css';
import bg from '../images/img-2.jpg';

export default function Services() {
  return (
    <h1 className='services' style={{ backgroundImage: `url(${bg})` }}>
      SERVICES
    </h1>
  );
}
