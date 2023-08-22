import React from 'react';

function Button({ onClick, children, className }) {
  return (
    <button
      className={`calculator-button ${className}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;
