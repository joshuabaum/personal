import React from 'react';
import '../../styles/homePage.css';
import HomeTitleBar from './HomeTitleBar';
import HomeBody from './HomeBody';

export default function Home(props) {
    return (
        <div className="home-box">
            <HomeTitleBar />
            <HomeBody />
        </div>
    );
}