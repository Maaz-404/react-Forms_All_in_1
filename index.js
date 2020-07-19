import React, { Component } from 'react';
import { render } from 'react-dom';
import CustomForm from './Hooks_Forms/CustomForm';
import UniLibraryForm from './UniformsLibraryForms/Uni_lib_Form';
import './style.css';

//Render The Forms
render(
  
  <div>
  <CustomForm />
  <UniLibraryForm />
   </div>,
  
   document.getElementById('root'));
 