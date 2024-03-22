import React, { useState } from 'react';

const FormInput = ({ type, name, placeholder, required, pattern, title, id }) => {
 const [value, setValue] = useState('');

 const handleChange = (e) => {
    setValue(e.target.value);
 };

 return (
    <input
      type={type}
      name={name}

      id={id} 

      placeholder={placeholder}
      required={required}
      value={value}
      onChange={handleChange}
      pattern={pattern}
      title={title}
    />
 );
};

export default FormInput;

