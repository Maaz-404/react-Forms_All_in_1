import React, { useState } from "react";


//This is completely functional React Hooks forms solution with validation
const HooksForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const { firstName, lastName, email, password } = formData;

  return (

    <div>
    <h2>________________________________________________
     React Hooks Controlled Form component with Validation </h2>
    <form>
      <input
        value={firstName}
        onChange={e => updateFormData(e)}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      />
      <input
        value={lastName}
        onChange={e => updateFormData(e)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      />
      <input
        value={email}
        onChange={e => updateFormData(e)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <input
        value={password}
        onChange={e => updateFormData(e)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default HooksForm;
