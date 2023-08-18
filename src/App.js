import './App.css';
import React, { useState } from 'react';
import CalculatorBtn from './components/CalculatorBtn';

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
  const numberBtns = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const operatorBtns = ['+', '-', '*', '/'];
  const backspace = ['<-'];
  const reset = ['AC'];
  const result = ['='];
  //
  return (
    <div>
      <input type="text" value={currentValue} />
      <CalculatorBtn buttons={numberBtns} onClick={onClickNumber} />
      <CalculatorBtn buttons={operatorBtns} onClick={onClickOperator} />
      <CalculatorBtn buttons={backspace} onClick={onClickBackspace} />
      <CalculatorBtn buttons={reset} onClick={onClickReset} />
      <CalculatorBtn buttons={result} onClick={onClickResult} />
    </div>
  );
}
//
export default App;
