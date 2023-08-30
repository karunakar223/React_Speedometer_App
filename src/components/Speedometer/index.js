// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrease = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onDecrease = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h3 className="sub-heading">Speed is {speed}mph</h3>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button type="button" className="button1" onClick={this.onIncrease}>
            Accelerate
          </button>
          <button type="button" className="button2" onClick={this.onDecrease}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
