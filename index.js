import React, { Component } from 'react';
import { render } from 'react-dom';

import CustomForm from './Hooks_Forms/CustomForm';

import HooksForm from './Hooks_Forms/Hooks_Form';
import UniLibraryForm from './UniformsLibraryForms/Uni_lib_Form';
import './style.css';

//Render The Forms
render(
  
  <div>
  <CustomForm />
  <HooksForm />
  <UniLibraryForm />
   </div>,
  
   document.getElementById('root'));
 