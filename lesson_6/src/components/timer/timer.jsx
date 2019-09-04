import './timer.css';
import React, { Component, Fragment } from 'react';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0
    };
  }

  //methods
  componentDidMount(){
    this.timer = setInterval(() => {
      console.log('timer', this.state.timer);
      this.setState({timer: this.state.timer + 1});
    }, 1000)
  }

  componentWillMount(){
    clearInterval(this.timer)
  }

  render() {
    const {timer} = this.state;
    return(
      <Fragment>
        <div className="timer">{timer}</div>
      </Fragment>
    )
  }
}
