import React from 'react';

import "./Form.scss"
function Form() {
  return (
    <div className='form'>
      <h3 className='form__title'>Type your name bro</h3>
      <input className='form__input' type="text" />
      <button className='form__button'>Go!</button>
    </div>
  );
}

export default Form;