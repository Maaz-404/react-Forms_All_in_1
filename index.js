import React, { Component } from 'react';
import { render } from 'react-dom';

// These 2 are simple forms with react Hooks
import Simple_State_Form from './Hooks_Forms/Simple_State_Form';

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
  <Simple_State_Form />
  <UniLibraryForm />
   </div>,
  
   document.getElementById('root'));
