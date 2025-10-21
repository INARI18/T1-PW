import React from 'react';
import '../../assets/styles/Button.css';

export function Button({ text, variant = '', onClick }) {

  return (
    <button className={`button--${variant}`} onClick={onClick}>
      {text}
    </button>
  );
}