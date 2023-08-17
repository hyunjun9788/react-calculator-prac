import './App.css';
import styled from 'styled-components';
import React, { useState } from 'react';

const FirstRow = styled.div`
  display: flex;
`;
const SecondRow = styled.div`
  display: flex;
`;
const ThirdRow = styled.div`
  display: flex;
`;
const FourRow = styled.div`
  display: flex;
`;
const Button = styled.button`
  width: 40px;
  height: 40px;
  font-size: 20px;
`;

function App() {
  const [currentValue, setCurrentValue] = useState('');
  const [storedNumber, setStoredNumber] = useState(null);
  const [operator, setOperator] = useState('');

  const onClickNumber = (number) => {
    const newInput = currentValue.toString() + number;
    setCurrentValue(newInput);
    if (currentValue === '0') {
      setCurrentValue(number);
    }
    if (currentValue.length >= 3) {
      return;
    }
  };

  const onClickOperator = (operatorBtn) => {
    if (currentValue !== '') {
      setStoredNumber(currentValue);
      setCurrentValue('');
      setOperator(operatorBtn);
    }
  };

  const onClickReset = () => {
    setCurrentValue('0');
  };

  const onClickBackSpace = (number) => {
    const newInput = currentValue.slice(0, -1);
    setCurrentValue(newInput);
  };
  const onClickResult = () => {
    if (storedNumber !== null && operator !== '' && currentValue !== '') {
      const num1 = parseFloat(storedNumber);
      const num2 = parseFloat(currentValue);

      let result = 0;
      if (operator === '+') {
        result = num1 + num2;
      } else if (operator === '-') {
        result = num1 - num2;
      } else if (operator === '*') {
        result = num1 * num2;
      } else if (operator === '/') {
        result = num1 / num2;
      }

      setCurrentValue(Math.floor(result).toString());
      setStoredNumber(null);
      setOperator(null);
    }
  };

  return (
    <div>
      <div>
        <input type="text" value={currentValue} />
        <FirstRow className="fitst-row">
          <Button value={1} onClick={() => onClickNumber(1)}>
            1
          </Button>
          <Button value={2} onClick={() => onClickNumber(2)}>
            2
          </Button>
          <Button value={3} onClick={() => onClickNumber(3)}>
            3
          </Button>
          <Button value={''} onClick={onClickReset}>
            AC
          </Button>
          <Button onClick={onClickBackSpace}>←</Button>
          <Button onClick={onClickResult}>=</Button>
        </FirstRow>
        <SecondRow className="second-row">
          <Button value={4} onClick={() => onClickNumber(4)}>
            4
          </Button>
          <Button value={5} onClick={() => onClickNumber(5)}>
            5
          </Button>
          <Button value={6} onClick={() => onClickNumber(6)}>
            6
          </Button>
          <Button onClick={() => onClickOperator('+')}>+</Button>
          <Button onClick={() => onClickOperator('-')}>-</Button>
        </SecondRow>

        <ThirdRow className="third-row">
          <Button value={7} onClick={() => onClickNumber(7)}>
            7
          </Button>
          <Button value={8} onClick={() => onClickNumber(8)}>
            8
          </Button>
          <Button value={9} onClick={() => onClickNumber(9)}>
            9
          </Button>
          <Button onClick={() => onClickOperator('*')}>*</Button>
          <Button onClick={() => onClickOperator('/')}>/</Button>
        </ThirdRow>

        <FourRow>
          <Button value={0} onClick={() => onClickNumber(0)}>
            0
          </Button>
          <Button onClick={() => onClickNumber('.')}>.</Button>
        </FourRow>
      </div>
    </div>
  );
}
//
export default App;
