import React from 'react';
import './nav.css';

export default function Nav(props) {
    return (
        <nav>
            <ul className="clearFix">
                <li>
                    <a href ="#what" class="what" aria-label="Game Instructions">
                        What ?
                    </a>
                </li>
                <li>
                    <a href="#feedback" class="newGame" aria-label="Start new game"
                        onClick={() => props.onRestartGame()}>
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>    
    );    
}