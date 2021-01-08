import React, { Component } from 'react';
import '../../App.css';
import pdf from '../documents/ashraf-kabir-cv.pdf';

export default function Cv() {
  return (

      <a href={pdf} target='_blank'>
        open cv
      </a>

  );
}
