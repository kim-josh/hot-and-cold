import React from 'react';
import Form from './form';
import Feedback from './feedback';
import History from './history';

export default function GuessBoard(props) {
    const guessCount = props.guesses.length;

    return (
        <section aria-label="Guess board" aria-describedby="feedback">
            <Feedback feedback={props.feedback} guessCount={props.guessCount} />
            <Form onMakeGuess={guess => props.onMakeGuess(guess)} />
            <h2 id="guessCount">Guess # <span id="count">{props.guessCount}</span></h2>
            <History guesses={props.guesses} />
        </section>
    );
}