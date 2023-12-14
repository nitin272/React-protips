import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    return Object.values(formState).every((value) => value.trim() !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
    }
  };

  const handleChange = (fieldName, value) => {
    setFormState((prevFormState) => ({ ...prevFormState, [fieldName]: value }));
  };

  const renderValidationMessage = (fieldName, message) => {
    return submitted && !formState[fieldName].trim() ? (
      <span className="validation-message">{message}</span>
    ) : null;
  };

  return (
    <div className="form">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && validateForm() ? (
          <div className="success-message">Registration successful!</div>
        ) : null}

        {['firstName', 'lastName', 'email', 'phoneNumber'].map((fieldName) => (
          <div key={fieldName} className="form-field">
            <input
              id={fieldName}
              className="input"
              type="text"
              placeholder={fieldName === 'phoneNumber' ? 'Phone number' : `${fieldName.charAt(0).toUpperCase()}${fieldName.slice(1)}`}
              name={fieldName}
              value={formState[fieldName]}
              onChange={(e) => handleChange(fieldName, e.target.value)}
            />
            {renderValidationMessage(fieldName, `Please enter your ${fieldName.replace('-', ' ')}`)}
          </div>
        ))}

        <button className="button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
