import React from 'react';
import './form.css';

// use class when component needs to access this or lifecycle method
export default class Form extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        if (this.props.onMakeGuess) {
            const value = this.input.value;
            this.props.onMakeGuess(value);
        }
        this.input.value = '';
        this.input.focus();
    }

    render() {
        return (
            <form onSubmit={e => this.onSubmit(e)}>
                <input type="number" name="userGuess" id="userGuess" aria-labelledby="feedback" className="userGuess" min="0" max="100" required
                    ref={input => this.input = input}/>
                <button type="submit" name="submit" id="guessButton">Guess</button>
            </form>
        );
    }
}