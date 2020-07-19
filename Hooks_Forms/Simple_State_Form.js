import React from 'react';
import React, { useState } from "react";

export default function Simple_State_Form(){

 const [name, setName] = useState("");

  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting Name ${name}`)
  }

  return (
    
    <form onSubmit={handleSubmit}>
    <h1>__________________________________________________________</h1>
    <h2> Simple State Form : No validation </h2>
      <label>
        Frirst Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
      
    </form>
  );



}
