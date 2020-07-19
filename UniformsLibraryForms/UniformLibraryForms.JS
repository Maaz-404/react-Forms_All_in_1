import React from 'react';
import { AutoForm } from 'uniforms-bootstrap4';

import schema from './SignUpSchema';

export default function SignUpForm() {
  return (
    <AutoForm
      schema={schema}
      onSubmit={model => alert(JSON.stringify(model, null, 2))}
    />
  );
}