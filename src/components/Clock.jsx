import React, {Component} from 'react';
import '../css/App.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    leadingZero(num) {
        if (num < 10) {
            return '0' + num;
        }
        return num;

        // return num < 10 ? '0' + num : num; // Ternary operator solution
    }

    getTimeUntil (deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor(time/(1000*60*60) % 24);
        const days = Math.floor(time/(1000*60*60*24));

        this.setState({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        });


        // If key and value have same name we can write it like this. Its called key/value shorthand
        // this.setState({
        //     days,
        //     hours,
        //     minutes,
        //     seconds
        // });

    }

    render() {
        return(
            <div>
                <div className='clock_days'>{this.leadingZero(this.state.days)} days</div>
                <div className='clock_hours'>{this.leadingZero(this.state.hours)} hours</div>
                <div className='clock_minutes'>{this.leadingZero(this.state.minutes)} minutes</div>
                <div className='clock_seconds'>{this.leadingZero(this.state.seconds)} seconds</div>
            </div>
        );
    }
}

export default Clock;
