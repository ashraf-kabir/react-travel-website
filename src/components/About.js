import React, { Component } from 'react';
import './About.css';
import AboutItem from './AboutItem';

function About() {
  return (
    <div className='about'>
      {/* <h1>About Me</h1>
      <div className='cards__container'>
        <div className='set_img'></div>
        <img src='images/avatar.png' alt='' className='about__img' />
        <p className='about__text'>
          Hello! I am Ashraf Kabir. I'm an enthusiastic, self-motivated,
          reliable, responsible and hard working person, a team worker and
          adaptable to challenging situations.
        </p>
      </div> */}

      <AboutItem
        header='About Me'
        src='images/img-10.jpg'
        text="Hello! I am Ashraf Kabir. I'm an enthusiastic, self-motivated,
          reliable, responsible and hard working person, a team worker and
          adaptable to challenging situations."
      />
    </div>
  );
}

export default About;
