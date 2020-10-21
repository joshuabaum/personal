import React from 'react';
import '../styles/homePage.css';
import './HomeBar';
import HomeBar from './HomeBar';

export default function HomeBody(props) {
    return (
        <div className="home-body">
            <HomeBar text="Resume" color="#82C7D7"/>
            <HomeBar text="Photography" color="#774E29" />
            <HomeBar text="The Lives Lost" color="#A46A26" />
            <HomeBar text="Favorite Things" color="#C39D63" />
            <HomeBar text="" color="#E0C379" />
        </div>
    );
}