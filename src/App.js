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

  const inputChangeHandler = (number) => {
    const newInput = currentValue.toString() + number;
    setCurrentValue(newInput);

    if (currentValue === '0') {
      console.log('a');
      setCurrentValue(number);
    }

    if (number === '.' && currentValue.includes('.')) {
      return;
    }

    if (currentValue.length >= 3) {
      return;
    }
  };
  const inputOperatorHandler = (operatorBtn) => {
    if (currentValue !== '') {
      setStoredNumber(currentValue);
      setCurrentValue('');
      setOperator(operatorBtn);
    }
  };
  const inputResetHandler = () => {
    setCurrentValue('0');
  };

  const inputCancelHandler = (number) => {
    const newInput = currentValue.slice(0, -1);
    setCurrentValue(newInput);
  };
  const calculateHandler = () => {
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
  //
  return (
    <div>
      <div>
        <input type="text" value={currentValue} />
        <FirstRow className="fitst-row">
          <Button value={1} onClick={() => inputChangeHandler(1)}>
            1
          </Button>
          <Button value={2} onClick={() => inputChangeHandler(2)}>
            2
          </Button>
          <Button value={3} onClick={() => inputChangeHandler(3)}>
            3
          </Button>
          <Button value={''} onClick={inputResetHandler}>
            AC
          </Button>
          <Button onClick={inputCancelHandler}>←</Button>
          <Button onClick={calculateHandler}>=</Button>
        </FirstRow>
        <SecondRow className="second-row">
          <Button value={4} onClick={() => inputChangeHandler(4)}>
            4
          </Button>
          <Button value={5} onClick={() => inputChangeHandler(5)}>
            5
          </Button>
          <Button value={6} onClick={() => inputChangeHandler(6)}>
            6
          </Button>
          <Button onClick={() => inputOperatorHandler('+')}>+</Button>
          <Button onClick={() => inputOperatorHandler('-')}>-</Button>
        </SecondRow>

        <ThirdRow className="third-row">
          <Button value={7} onClick={() => inputChangeHandler(7)}>
            7
          </Button>
          <Button value={8} onClick={() => inputChangeHandler(8)}>
            8
          </Button>
          <Button value={9} onClick={() => inputChangeHandler(9)}>
            9
          </Button>
          <Button onClick={() => inputOperatorHandler('*')}>*</Button>
          <Button onClick={() => inputOperatorHandler('/')}>/</Button>
        </ThirdRow>

        <FourRow>
          <Button value={0} onClick={() => inputChangeHandler(0)}>
            0
          </Button>
          <Button onClick={() => inputChangeHandler('.')}>.</Button>
        </FourRow>
      </div>
    </div>
  );
}
//
export default App;
