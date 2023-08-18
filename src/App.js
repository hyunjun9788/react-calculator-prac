import './App.css';
import React, { useState } from 'react';
import CalculatorBtn from './components/CalculatorBtn';

function App() {
  const [currentValue, setCurrentValue] = useState('');
  const [storedNumber, setStoredNumber] = useState(null);
  const [operator, setOperator] = useState('');

  const onClickNumber = (number) => {
    if (currentValue.length < 3) {
      const newInput = currentValue === '0' ? number : currentValue + number;
      setCurrentValue(newInput);
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

  const onClickBackspace = (number) => {
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

  const numberBtns = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '.',
    '',
  ];
  const operatorBtns = ['+', '-', '*', '/'];
  const reset = ['AC'];
  const result = ['='];
  //
  return (
    <div className="container">
      <div className="input-btn">
        <input type="text" value={currentValue} />
        <input type="button" onClick={onClickBackspace} value="backspace" />
      </div>
      <CalculatorBtn
        className="number-btn"
        buttons={numberBtns}
        onClick={onClickNumber}
      />
      <CalculatorBtn buttons={operatorBtns} onClick={onClickOperator} />
      <CalculatorBtn buttons={reset} onClick={onClickReset} />
      <CalculatorBtn buttons={result} onClick={onClickResult} />
    </div>
  );
}
//
export default App;
