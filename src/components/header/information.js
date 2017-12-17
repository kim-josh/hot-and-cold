import React from 'react';
import './information.css';
export default function Information(props) {
    return (
        <section id="what" tabIndex="-1">        
            <h2>What do I do?</h2>
            <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
            <ol>
                <li>I pick a <u>random secret number </u>between 1 to 100 and keep it hidden.</li>
                <li>You need to <u>guess</u> until you can find the hidden secret number.</li>
                <li>You will <u>get feedback </u>on how close ("hot") or far ("cold") your guess is.</li>
            </ol>
            <p>So, Are you ready?</p>
        </section>
    );
}