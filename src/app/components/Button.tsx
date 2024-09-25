import React from 'react';
import '@/app/styles/Button.css';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  width?: string;
  height?: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ label, onClick, disabled, width, height }) => {
  return (
    <button
      className={`button ${disabled ? 'button-disabled' : 'button-enabled'}`}
      onClick={onClick}
      disabled={disabled}
      style={{ width, height }}
    >
      {label} <span className="arrow">→</span>
    </button>
  );
};

export default ButtonComponent;