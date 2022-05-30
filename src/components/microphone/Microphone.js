import React from 'react';

class Microphone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            finalisedText: '',
            interimText: '',
            error: '',
            listening: false
        };
    }
    componentDidMount() {
        if (!('webkitSpeechRecognition' in window)) {
            throw new Error("This browser doesn't support speech recognition. Try Google Chrome.");
        }
        const recognition = new window.webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'hi-IN';

        recognition.onerror = (event) => {
            this.setState({ error: event.error });
        };

        recognition.onresult = (event) => {
            let final_transcript = '';
            let interim_transcript = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    final_transcript += event.results[i][0].transcript;
                } else {
                    interim_transcript += event.results[i][0].transcript;
                }
            }
            let finalisedText = final_transcript || interim_transcript;
            this.setState({ finalisedText: finalisedText });
        };

        this.setState({
            recognition: recognition
        })
    }

    start = () => {
        this.state.recognition.start();
        this.setState({
            listening: true
        });
    }

    stop = () => {
        this.state.recognition.stop();
        this.setState({
            listening: false
        });
    }

    reset = () => {
        this.state.recognition.stop();
        this.setState({
            interimText: '',
            finalisedText: '',
            listening: false
        });
    }

    render() {
        const { finalisedText, listening, error } = this.state;
        return (
            <div>
                <p>Microphone: {listening ? 'on' : 'off'}</p>
                
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.reset}>Reset</button>

                <h6>Finalized text</h6>
                <hr/>
                <p>{finalisedText}</p>

                <p style={{ color: "red" }}>{error}</p>
            </div>
        )
    }
}

export default Microphone;