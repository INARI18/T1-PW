import React from 'react';
import './assets/styles/Button.css';

export function Button ( { text }  ) {
    return (
        <div className="button">
            <p>{text}</p>
        </div>
    )
}