import React from 'react';
import '../../App.css';
import bg from '../images/img-2.jpg';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

export default function Projects() {
  return (
    <h1 className='projects' style={{ backgroundImage: `url(${bg})` }}>
      PROJECTS
    </h1>
  );
}
