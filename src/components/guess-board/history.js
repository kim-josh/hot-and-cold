import React from 'react';
import './history.css';

export default function History(props) {
    const guesses = props.guesses.map((guess, index) => (
        <li key={index}>
            {guess}
        </li>
    ));
    return (
        <ul id="guessHistory" clearfix>
            {guesses}
        </ul>
    );
}