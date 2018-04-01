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

    componentDidUpdate(prevProps) {
        console.log('componentDidUpdate', this.props, prevProps);
        if (prevProps.timer !== this.props.timer) {
            this.updateTimer(this.props.timer);
            clearInterval(this.decrementer);
        }

        if (this.state.stopwatch < 1) {
            clearInterval(this.decrementer);
            alert('Countdown finished');
        }
    }

    updateTimer(newTimer) {

        // First we update our stopwatch with new timer
        this.setState({
            stopwatch: newTimer
        });

    }

    startTimer() {
        // If interval exists we clear it
        if(this.decrementer) {
            clearInterval(this.decrementer);
        }

        // Then we decrement stopwatch by 1 every second
        this.decrementer = setInterval( () => {
            this.setState({
                stopwatch: this.state.stopwatch -1,
            });
        },1000);
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
