import React, { Component } from 'react';
import { render } from 'react-dom';
import CustomForm from './CustomForm';
import UniLibraryForm from './UniformsLibraryForms/Form';
import './style.css';

//Render The Forms
render(
  
  <div>
  <CustomForm />
  <UniLibraryForm />
   </div>,
  
   document.getElementById('root'));
 