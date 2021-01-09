import React from 'react';
import { Link } from 'react-router-dom';

import avatar from './images/img-10.jpg';

function AboutItem(props) {
  return (
    <>
      <div>
        <h1>{props.header}</h1>
        <div className='cards__container'>
          <figure>
            <img
              className='about__item__img'
              alt='Test Image'
              src={props.src}
            />
          </figure>
          <p className='about__text'>{props.text}</p>
        </div>
      </div>
    </>
  );
}

export default AboutItem;
