import React from 'react';
import NavigationBar from './NavigationBar';
import '../styles/resume.css';

export default function Resume(props) {
    return (
        <div className="resume-box">
            <NavigationBar />
            <div className="resume-img"></div>
        </div>
    );
}