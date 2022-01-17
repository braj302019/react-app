import './scripts.js';
import React from 'react';
import Board from './Board';

import './style.css';

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: null
        };
    }

    handleClick(status) {
        this.setState({ status: (status ? 'Game over' : 'Game running') });
    }

    render() {
        const { status } = this.state;
        return (
            <div className="game">
                <div className="game-board">
                    <Board onClick={this.handleClick.bind(this)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                </div>
            </div>
        );
    }
}

export default Game;