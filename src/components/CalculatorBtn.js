import React from 'react';
import Button from './Button';
import './CalculatorBtn.css';
function CalculatorBtn({
  buttons,
  onClick,
}) {
  return (
    <div className="calculator-btn-container">
      {buttons.map((value) => (
        <Button
          key={value}
          onClick={() => onClick(value)}
        >
          {value}
        </Button>
      ))}
    </div>
  );
}

export default CalculatorBtn;
