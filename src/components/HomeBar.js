import React from 'react';
import '../styles/homePage.css';

export default function HomeBar(props) {
    return (
        <div className="bar" style={{ backgroundColor: props.color, transform: `rotate(8deg)`}}>
            <h2 className="bar-text">{props.text}</h2>
        </div>
    );
}
