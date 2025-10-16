import React from 'react';
import './button.css';

export function Button ( { text }  ) {
    return (
        <div className="button">
            <p>{text}</p>
        </div>
    )
}