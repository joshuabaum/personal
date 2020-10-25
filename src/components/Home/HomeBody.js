import React from 'react';
import '../../styles/homePage.css';
import './HomeBar';
import HomeBar from './HomeBar';
import {Link} from 'react-router-dom';

export default function HomeBody(props) {
    return (
        <div className="home-body">
            <Link to="/personal/resume" className="links"> <HomeBar text="Resume" color="#82C7D7" dark="#74555d"/></Link>
            <Link to="/personal/photography" className="links"><HomeBar text="Photography" color="#c8bb6d" dark="#74555d"/></Link>
            <a href="https://www.theliveslost.com/" target="_blank"className="links" ><HomeBar text="The Lives Lost" color="#ffa800" dark="#74555d"/></a>
            <Link to="/personal/favorites" className="links"><HomeBar text="My Favorite Things" color="#c47d5d" dark="#74555d"/></Link>
            <HomeBar text="" color="#a25328" dark="#a25328" />
        </div>
    );
}