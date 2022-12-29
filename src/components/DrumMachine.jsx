const keyBoardList = {
    "Q": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    "W": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    "E": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    "A": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    "S": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    "D": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    "Z": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    "X": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    "C": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
};

import React from 'react';
import './DrumMachine.css';

export default class DrumMachine extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            keyBoard: this.firstLoad(),
            display: '',
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleKeyRelease = this.handleKeyRelease.bind(this);
    }

    componentDidMount(){
        document.addEventListener('keydown', (event) => this.handleKeyPress(event));
        document.addEventListener('keyup', (event) => this.handleKeyRelease(event));
    }

    componentWillUnmount(){
        document.removeEventListener('keydown', (event) => this.handleKeyPress(event));
        document.removeEventListener('keyup', (event) => this.handleKeyRelease(event));
    }

    firstLoad(){
        
        const keyBoard = Object.keys(keyBoardList);

        return keyBoard.map(keyNote => <div key={keyNote}>
            <button id={keyNote + "-button"} className="keyNote" value={keyNote} onClick={(event) => this.handleClick(event)}>
                {keyNote}
            </button>
            <audio id={keyNote} controls>
                <source src={keyBoardList[keyNote]} type="audio/mpeg"></source>
            </audio>
        </div>);
    }

    handleClick(event){
        const keyValue = event.target.value;
        if(keyBoardList[keyValue] !== undefined){
            document.getElementById(event.target.value).play();
        }
        this.setState(Object.assign(
            {},
            this.state,
            {display: keyBoardList[keyValue]}
        ))
    }

    handleKeyPress(event){
        const keyValue = String.fromCharCode(event.keyCode);
        if(keyBoardList[keyValue] !== undefined){
            document.getElementById(keyValue).play();
            document.getElementById(keyValue + "-button").style = "background-color: yellow";
        }
        this.setState(Object.assign(
            {},
            this.state,
            {display: keyBoardList[keyValue]}
        ))
    }

    handleKeyRelease(event){
        const keyValue = String.fromCharCode(event.keyCode);
        if(keyBoardList[keyValue] !== undefined){
            document.getElementById(keyValue+"-button").style = "background-color: gray";
        }
    }

    render(){
        return <>
            <main id="drum-machine">
                <div id="display">{this.state.display}</div>
                <div className="grid-container">
                    {this.state.keyBoard}
                </div>
            </main>
        </>
    }
}