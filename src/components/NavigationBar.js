import React from 'react';
import '../styles/homePage.css';
import {Link} from 'react-router-dom';

{/* <Redirect to="/dashboard"/> */}
class NavigationPage extends React.Component {
    render() {
        return (
            <div className="nav-bar">
                <Link to="/personal" className="links"> <h3 className="nav-bar-text" style={{ color: '#d45e03' }} >Home</h3> </Link>
                <Link to="/personal/resume" className="links"> <h3 className="nav-bar-text" style={{ color: '#82C7D7' }}>Resume</h3> </Link>
                <Link to="/personal/photography" className="links"><h3 className="nav-bar-text" style={{ color: '#c8bb6d' }}>Photography</h3> </Link>
                <a href="https://www.theliveslost.com/" target="_blank" className="links"> <h3 className="nav-bar-text" style={{ color: '#ffa800' }}>The Lives Lost</h3> </a>
                <Link to="/personal/favorites" className="links"><h3 className="nav-bar-text" style={{ color: '#c47d5d' }}>Favorite Things</h3> </Link>
            </div>
    );
    };
}

export default NavigationPage;
