// Write your code here

import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0}

  onStart = () => {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        minutes: prevState.minutes,
        seconds: prevState.seconds + 1,
      }))

      const {seconds} = this.state

      if (seconds === 59) {
        this.setState(prevState => ({
          minutes: prevState.minutes + 1,
          seconds: 0,
        }))
      }
    }, 1000)
  }

  onStop = () => {
    clearInterval(this.intervalId)
    this.setState(prevState => ({
      minutes: prevState.minutes,
      seconds: prevState.seconds,
    }))
  }

  onReset = () => {
    clearInterval(this.intervalId)
    this.setState({minutes: 0, seconds: 0})
  }

  render() {
    const {minutes, seconds} = this.state
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`

    return (
      <div className="bg-container">
        <h1 className="main-head">Stopwatch</h1>
        <div className="stopWatch-card">
          <div className="stopWatch-head">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="head-img-size"
            />
            <h1 className="head-text">Timer</h1>
          </div>
          <h1 className="timer-text">
            {stringifiedMinutes}:{stringifiedSeconds}
          </h1>
          <div>
            <button className="start-btn" type="button" onClick={this.onStart}>
              Start
            </button>
            <button className="stop-btn" type="button" onClick={this.onStop}>
              Stop
            </button>
            <button className="reset-btn" type="button" onClick={this.onReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
