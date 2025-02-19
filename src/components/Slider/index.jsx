import React, { Component } from "react";

const arr = [
  {
    id: 0,
    text: "0",
  },
  {
    id: 1,
    text: "1",
  },
  {
    id: 2,
    text: "2",
  },
];

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrData: arr,
      count: 0,
      intervalId: null,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: (prevState.count + 1) % arr.length,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: (prevState.count - 1 + arr.length) % arr.length,
    }));
  };

  autoStart = () => {
    const intervalId = setInterval(this.increment, 2000)
    this.setState({intervalId})
  }

  stopAuto = () => {
    const {intervalId} = this.state;
    clearInterval(intervalId)
  }

  componentDidMount() {
    this.autoStart()
  }

  render() {
    const { arrData, count } = this.state;
    const currentSlide = arrData[count];

    return (
      <div>
        <h1>Slider</h1>
        <button onClick={this.autoStart}>autoStart</button>
        <button onClick={this.stopAuto}>stopAuto</button>
        <h1>{currentSlide.text}</h1>
        <button onClick={this.decrement}>prev</button>
        <button onClick={this.increment}>next</button>
      </div>
    );
  }
}
