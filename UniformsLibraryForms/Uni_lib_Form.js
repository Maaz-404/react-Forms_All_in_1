import React from 'react';
import { AutoForm } from 'uniforms-semantic';
import GuestSchema from './GuestSchema';
import 'semantic-ui-css/semantic.min.css'


//This form Uses Semantic UI

export default function UniLibraryForm() {
  
  return (
    <div>
    <h1>_______________________________________</h1>
    <h2> Uniforms Library Form </h2>
    <AutoForm schema={GuestSchema} onSubmit={console.log} />;
    </div>
  )
}
