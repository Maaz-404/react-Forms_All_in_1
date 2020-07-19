import React from 'react';
//For Simple Form
import React, { useState } from "react";

export default function CustomForm(){

 const [name, setName] = useState("");

  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting Name ${name}`)
  }

  return (
    
    <form onSubmit={handleSubmit}>
    <h1> Custom Stateful Form </h1>
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
