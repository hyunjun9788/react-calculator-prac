import React from 'react';

function InputBtn({ value, onClick }) {
  return (
    <div className="input-btn">
      <input type="text" value={value} />
      <input type="button" onClick={onClick} value="backspace" />
    </div>
  );
}

export default InputBtn;
