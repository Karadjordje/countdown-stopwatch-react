import React, {Component} from  'react';
import '../css/App.css';
import { Button } from 'react-bootstrap';


class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stopwatch: props.timer,
        };
        this.decrementer = null;
    }

    componentWillReceiveProps(nextProps) {
        clearInterval(this.decrementer);
        this.timerCountdown(nextProps.timer);
    }

    timerCountdown(newTimer) {

        // First we update our stopwatch with new timer
        this.setState({
            stopwatch: newTimer
        });

    }

    startTimer() {
        // Then we decrement stopwatch by 1 every second
        this.decrementer = setInterval( () => {
            this.setState({
                stopwatch: this.state.stopwatch -1,
            });
        },1000);
    }

    componentDidUpdate() {
        if (this.state.stopwatch < 1) {
            clearInterval(this.decrementer);
            alert('Countdown finished');
        }
    }

    render() {
        return(
            <div>
                <Button onClick={() => this.startTimer()} >
                    Start
                </Button>
                <div className="stopwatch"> {this.state.stopwatch} </div>
            </div>
        );
    }
}

export default Stopwatch;
