import React from 'react';
import './feedback.css';

export default function Feedback(props) {
    // Use guessCount to trigger a DOM change, even when the guess does n
    // not change the feedback text

    const key = props.guessCount

    let guessAgain;
    if (key !== 0) {
        guessAgain = <span className="hidden">Try again!</span>
    }
    return (
        <h2 key={key} id="feedback" role="status" aria-live="assertive">
            {props.feedback} {guessAgain}
        </h2>
    );
}