import React from 'react';

const Input = ({ className = '', ...props }) => (
  <input className={`form-control ${className}`} {...props} />
);

export default Input;
