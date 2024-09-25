import React from 'react';
import '@/app/styles/Button.css';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonComponent: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button
      className={`button ${disabled ? 'button-disabled' : 'button-enabled'}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label} <span className="arrow">→</span>
    </button>
  );
};

export default ButtonComponent;