import React, {Component} from  'react';
import '../css/App.css';
import { Button } from 'react-bootstrap';


class Newstopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTimer: props.timer,
            newTimer: '',
        };
        this.decrementer = null;
    }

    componentWillReceiveProps(nextProps) {
        this.updateTimer(nextProps.timer);
    }

    updateTimer(newValue) {

        this.setState({
            newTimer: newValue
        });
    }

    startTimer() {
        if(this.decrementer) {
            clearInterval(this.decrementer);
        }

        // Then we decrement stopwatch by 1 every second
        this.decrementer = setInterval( () => {
            this.setState({
                currentTimer: this.state.currentTimer -1,
            });
        },1000);
    }

    stopTimer() {
        clearInterval(this.decrementer);
    }

    componentDidUpdate() {
        if (this.state.currentTimer < 1) {
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
                <div className="stopwatch"> {this.state.currentTimer} </div>
            </div>
        );
    }
}

export default Newstopwatch;


// Aj malo razmisli, sta ti sve treba
// Znaci treba ti stari timer
// Treba ti novi timer kad se promeni props
// Kad se klikne dugme start ti treba da zapocnes funkciju koja ce da uzme promenu propsa i da krene sa njom ispocetka
