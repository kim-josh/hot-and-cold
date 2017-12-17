import React from 'react';
import Nav from './nav';
import './header.css';

export default function Header(props) {
    return (
        <header>
            <Nav onRestartGame={() => props.onRestartGame()} />
            <h1> HOT or COLD </h1>
        </header>
    );
}  