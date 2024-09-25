import React from 'react';

interface InputFieldProps {
  label: string;
  placeholder: string;
  type: string;
  register: any;
  error?: string;
}

const InputFieldComponent: React.FC<InputFieldProps> = ({ label, placeholder, type, register, error }) => {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...register} className="input-field" />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default InputFieldComponent;
