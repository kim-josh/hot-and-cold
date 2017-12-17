import React from 'react';
import Header from '../header/header';
import GuessBoard from '../guess-board/guess-board';
import Information from '../header/information';

export default class GameBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.floor(Math.random() * 100) + 1
        };
    }
    
    restartGame() {
        this.setState({
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.floor(Math.random() * 100) + 1
        });
    }
    
    makeGuess(guess) {
        // Make sure that the user inputs a number
        guess = parseInt(guess, 10)
        if (isNaN(guess)) {
            this.setState({
                feedback: 'Please input a valid number yah goof!'
            });
        }
        // Find the difference between correct answer and user's answer
        const difference = Math.abs(guess - this.state.correctAnswer)

        // Provide feedback - let the user know how hot/cold they are
        let feedback;
        if (difference > 50) {
            feedback = 'You\'re in Antarctica!';
        } else if (difference > 35) {
            feedback = 'It\'s cold!';
        } else if (difference > 20) {
            feedback = 'You\'re getting warm!';
        } else if (difference > 10) {
            feedback = 'California warm';
        } else if (difference > 5) {
            feedback = 'California hot';
        } else if (difference > 0) {
            feedback = 'Supa Hot Fireee';
        } else {
            feedback = 'You scored!';
        }

        // Now we need to update the state 
        this.setState({
            feedback,
            guesses: [...this.state.guesses, guess] // ASK ABOUT THIS
        });
    }

    render() {
        const guessCount = this.state.guesses.length;
    
        return (
            <div>
                <Header 
                    onRestartGame={() => this.restartGame()}
                />
                <GuessBoard
                    feedback={this.state.feedback}
                    onMakeGuess={guess => this.makeGuess(guess)}
                    guessCount={guessCount}
                    guesses={this.state.guesses}
                />
                <Information />
            </div>
        );
    }
}