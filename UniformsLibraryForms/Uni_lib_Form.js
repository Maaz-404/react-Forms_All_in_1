import React from 'react';
import { AutoForm } from 'uniforms-semantic';
import GuestSchema from './GuestSchema';

//This form Uses Semantic UI

export default function UniLibraryForm() {
  return (
    <div>
    <h1 Uniforms Library Form />
    <AutoForm schema={GuestSchema} onSubmit={console.log} />;
    </div>
  )
}

