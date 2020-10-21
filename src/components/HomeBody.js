import React from 'react';
import '../styles/homePage.css';
import './HomeBar';
import HomeBar from './HomeBar';

export default function HomeBody(props) {
    return (
        <div className="home-body">
            <HomeBar text="Resume" color="#82C7D7" dark="#06ACD0"/>
            <HomeBar text="Photography" color="#774E29" dark="#442509"/>
            <HomeBar text="The Lives Lost" color="#A46A26" dark="#834802"/>
            <HomeBar text="My Favorite Things" color="#C39D63" dark="#937952"/>
            <HomeBar text="" color="#E0C379" dark="#E0C379" />
        </div>
    );
}