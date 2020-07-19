import React, { Component } from 'react';
import { render } from 'react-dom';

// These 2 are simple forms with react Hooks
import CustomForm from './Hooks_Forms/CustomForm';

import HooksForm from './Hooks_Forms/Hooks_Form';

//External Library Solution - Uniforms Library for forms
import UniLibraryForm from './UniformsLibraryForms/Uni_lib_Form';

//One more Library to go

//Style Sheet
import './style.css';

//Render The Forms
render(
  
  <div>
  <h1>This react App is created using Functional Components</h1>
  <HooksForm />
  <CustomForm />
  <UniLibraryForm />
   </div>,
  
   document.getElementById('root'));
 