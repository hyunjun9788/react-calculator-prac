import React from 'react';
import Button from './Button';

function CalculatorBtn({ buttons, onClick }) {
  return (
    <div>
      {buttons.map((value) => (
        <Button key={value} onClick={() => onClick(value)}>
          {value}
        </Button>
      ))}
    </div>
  );
}

export default CalculatorBtn;
