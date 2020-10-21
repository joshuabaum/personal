import React from 'react';
import '../styles/homePage.css';



export default function HomeBar(props){
        const [color, setColor] = React.useState(props.color);
        const styles = {
            'background-color': color,
            'transform': `rotate(7deg) translate(-2vw, 0)`
        }
        return (
            <div className="bar" style={styles}
                onMouseEnter={() => setColor(props.dark)}
                onMouseLeave={() => setColor(props.color)}
            >
                <h2 className="bar-text">{props.text}</h2>
            </div>
        );
}