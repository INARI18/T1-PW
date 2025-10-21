import React from 'react';
import '../../assets/styles/Button.css';

export function Button({ text, variant = ''}) {

  return (
    <button className={`button--${variant}`}>
      {text}
    </button>
  );
}