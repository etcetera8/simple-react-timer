import React, { Component } from 'react';
import secondsSinceDate from './helper';
const prettyMs = require('pretty-ms');

type Props = {
  startDate: Date | null | number;
  timerOn: boolean;
  seconds: number | null;
}

type TimerState = {
  duration: number;
  on: boolean,
  intervalId: any,
}

export default class Timer extends Component<Props, TimerState> {
  timer: number = 0;
  constructor(props: any) {
    super(props);
    this.state = {
      duration: 0,
      on: false,
      intervalId: 0,
    }
  }

  componentDidMount() {
    this.initTimer();
  }

  componentDidUpdate() {
    const { timerOn } = this.props;
    if (timerOn && !this.state.on) {
      console.log('startingtimer')
      this.startTimer();
      this.setState({ on: true });
    } else if (!timerOn && this.state.on) {
      this.stopTimer();
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    // send pause function
  }

  initTimer = (): void => {
    const { seconds } = this.props;
    const startingTime = seconds ? seconds * 1000 : secondsSinceDate(this.props.startDate, this.props.seconds);

    this.setState({
      duration: startingTime,
    });
  }

  startTimer = () => {
    let startTime = secondsSinceDate(this.props.startDate, this.props.seconds);
    if (this.props.timerOn) {
      const intervalId = setInterval(() => {
        const updatedTime = startTime += 1000
        this.setState({
          duration: updatedTime,
        })
      }, 1000);
      // this.timer = intervalId;
      this.setState({ intervalId })
    }
  }

  stopTimer = () => {
    clearInterval(this.state.intervalId);
    this.setState({ on: false })
  }

  render() {
    const { duration } = this.state;
    return (
      <section>{prettyMs(duration, { secondsDecimalDigits: 0, colonNotation: true })}</section>
    );
  }
}