import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getCurrentTime();
    }
    componentDidMount() {
        this.setTimer();
    }
    componentWillUnmount() {
        clearTimeout(this.timeout);
    }
    setTimer() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.updateClock.bind(this), 1000);
    }
    updateClock() {
        this.setState(this.getCurrentTime(), this.setTimer);
    }
    getCurrentTime() {
        const currentTime = new Date();
        const hour = currentTime.getHours();
        const minute = currentTime.getMinutes();
        const second = currentTime.getSeconds();
        const ampm = hour >= 12 ? 'PM' : 'AM';
        return {
            hour: hour > 12 ? '0' + (hour - 12) : hour,
            minute: minute > 10 ? minute : '0' + minute,
            second: second > 10 ? second : '0' + second,
            ampm: ampm
        }
    }
    render() {
        const { hour, minute, second, ampm } = this.state;
        return (
            <div>
                <span>{hour}</span>:
                <span>{minute}</span>:
                <span>{second}</span>
                <span>{ampm}</span>
            </div>
        );
    }
}

export default Clock;