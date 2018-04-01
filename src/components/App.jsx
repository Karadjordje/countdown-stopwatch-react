import React, { Component } from 'react';
import Clock from '../components/Clock.jsx';
import Stopwatch from '../components/Stopwatch.jsx';
import '../css/App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2018',
            newDeadline: '',
            timer: 60,
            newTimer: '',
        };
    }

    changeDeadline() {
        this.setState({
            deadline: this.state.newDeadline,
        });
    }

    changeTimer() {
        this.setState({
            timer: this.state.newTimer,
        });
    }

    render() {
        return (
            <div className='app'>
                <div className='app_title'>
                    Countdown to {this.state.deadline}
                </div>
                <Clock
                    deadline = {this.state.deadline}
                />
                <Form inline >
                    <FormControl
                        className="deadline_input"
                        type="text"
                        placeholder="New date"
                        onChange={event => this.setState({newDeadline: event.target.value})}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                event.preventDefault();
                                this.changeDeadline();
                            }
                        }}
                    />
                    <Button onClick={() => this.changeDeadline()} >
                        Submit
                    </Button>
                </Form>

                <div className="stopwatch_title">
                    Stopwatch from {this.state.timer} seconds
                </div>

                <Form inline>
                    <FormControl
                        className="stopwatch_input"
                        type="text"
                        placeholder="Enter time"
                        onChange={event => this.setState({newTimer: event.target.value})}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                event.preventDefault();
                                this.changeTimer();
                            }
                        }}
                    />
                    <Button onClick={() => this.changeTimer()} >
                        Submit
                    </Button>
                </Form>

                <Stopwatch
                    timer = {this.state.timer}
                />

            </div>
        );
    }
}

export default App;
