import React from 'react';
import '../styles/homePage.css';
import './HomeBar';
import HomeBar from './HomeBar';

export default function HomeBody(props) {
    return (
        <div className="home-body">
            <HomeBar text="Resume" color="#82C7D7" dark="#74555d"/>
            <HomeBar text="Photography" color="#c8bb6d" dark="#74555d"/>
            <HomeBar text="The Lives Lost" color="#ffa800" dark="#74555d"/>
            <HomeBar text="My Favorite Things" color="#c47d5d" dark="#74555d"/>
            <HomeBar text="" color="#a25328" dark="#E0C379" />
        </div>
    );
}