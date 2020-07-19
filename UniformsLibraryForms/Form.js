import React from 'react';
import { AutoForm } from 'uniforms-semantic';

import GuestSchema from './GuestSchema';

export default function UniLibraryForm() {
  return <AutoForm schema={GuestSchema} onSubmit={console.log} />;
}