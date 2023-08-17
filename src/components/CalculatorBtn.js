import React from 'react';
import Button from './Button';

function CalculatorBtn({ buttons, onClick }) {
  return (
    <div>
      {buttons.map((button) => {
        <Button key={button} onClick={() => onClick(button)}>
          {button}
        </Button>;
      })}
    </div>
  );
}

export default CalculatorBtn;
