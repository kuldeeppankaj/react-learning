import React, { Component } from "react";

export default class TopBar extends Component {
  constructor() {
    super();
    this.state = {
      days: 306,
      hours: 19,
      minutes: 38,
      seconds: 42
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.countDown();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  countDown = () => {
    let { days, hours, minutes, seconds } = this.state;

    if (seconds > 0) {
      seconds--;
    } else if (minutes > 0) {
      minutes--;
      seconds = 59;
    } else if (hours > 0) {
      hours--;
      minutes = 59;
      seconds = 59;
    } else if (days > 0) {
      days--;
      hours = 23;
      minutes = 59;
      seconds = 59;
    }

    this.setState({ days, hours, minutes, seconds });
  };

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div className="top-bar">
        <span>FREE delivery & 40% Discount for next 3 orders!</span>

        <div className="timer">
          <span>{days} Days</span>
          <span>{hours} Hour</span>
          <span>{minutes} Min</span>
          <span>{seconds} Sec</span>
        </div>

        <span>Need help? Call Us: +258 3268 21485</span>
      </div>
    );
  }
}
