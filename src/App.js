import './App.css';
import React, { useState } from 'react';
import Button from './components/Button';
import './components/Button.css';

function App() {
  const [currentValue, setCurrentValue] = useState('');
  const [firstInputValue, setfirstInputValue] =
    useState(null);
  const [operator, setOperator] = useState('');

  const limitedInputLength = 3;
  const onClickNumber = (num) => {
    if (currentValue.length < limitedInputLength) {
      const newInput =
        currentValue === '0'
          ? `${num}`
          : `${currentValue}${num}`;
      setCurrentValue(newInput);
    }
  };

  const onClickDot = () => {
    if (currentValue.length < limitedInputLength) {
      const newInput =
        currentValue === '0' ? '.' : currentValue + '.';
      setCurrentValue(newInput);
    }
  };

  const onClickOperator = (operatorValue) => {
    if (currentValue !== '') {
      setfirstInputValue(currentValue);
      setCurrentValue('');
      setOperator(operatorValue);
    }
  };
  const onClickReset = () => {
    setCurrentValue('0');
  };

  const onClickBackspace = () => {
    const newInput = currentValue.slice(0, -1);
    setCurrentValue(newInput);
  };
  const onClickResult = () => {
    if (
      firstInputValue !== null &&
      operator !== '' &&
      currentValue !== ''
    ) {
      const num1 = parseFloat(firstInputValue);
      const num2 = parseFloat(currentValue);

      const operators = {
        '+': num1 + num2,
        '-': num1 - num2,
        '*': num1 * num2,
        '/': num1 / num2,
      };
      const result = Math.floor(
        operators[operator]
      ).toString();

      setCurrentValue(result);
      setfirstInputValue(null);
      setOperator(null);
    }
  };

  //
  return (
    <div className="container">
      {/* input + backspace */}
      <div className="header">
        <input
          type="text"
          placeholder="숫자를 입력해주세요"
          readOnly
          value={currentValue}
        />

        <Button
          className="backspace"
          onClick={onClickBackspace}
        >
          backspace
        </Button>
      </div>

      {/* table */}
      <table>
        <tbody>
          <tr>
            <td>
              <Button onClick={() => onClickNumber(1)}>
                1
              </Button>
            </td>
            <td>
              <Button onClick={() => onClickNumber(2)}>
                2
              </Button>
            </td>
            <td>
              <Button onClick={() => onClickNumber(3)}>
                3
              </Button>
            </td>
            <td>
              <Button onClick={onClickReset}>AC</Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={() => onClickNumber(4)}>
                4
              </Button>
            </td>
            <td>
              <Button onClick={() => onClickNumber(5)}>
                5
              </Button>
            </td>
            <td>
              <Button onClick={() => onClickNumber(6)}>
                6
              </Button>
            </td>
            <td>
              <Button onClick={() => onClickOperator('+')}>
                +
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={() => onClickNumber(7)}>
                7
              </Button>
            </td>
            <td>
              <Button onClick={() => onClickNumber(8)}>
                8
              </Button>
            </td>
            <td>
              <Button onClick={() => onClickNumber(9)}>
                9
              </Button>
            </td>
            <td>
              <Button onClick={() => onClickOperator('-')}>
                -
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={onClickDot}>.</Button>
            </td>
            <td>
              <Button onClick={() => onClickNumber(0)}>
                0
              </Button>
            </td>
            <td>
              <Button onClick={() => onClickOperator('/')}>
                /
              </Button>
            </td>
            <td>
              <Button onClick={() => onClickOperator('*')}>
                *
              </Button>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <Button
                className="result-btn"
                onClick={onClickResult}
              >
                =
              </Button>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

//
export default App;
