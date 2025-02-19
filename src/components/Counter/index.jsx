import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      intervalId: null,
    };
  }

  increment = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  componentDidMount() {
    // this.autoIncrement();
  }

  componentWillUnmount() {
    this.stopCounter();
  }

  autoIncrement = () => {
    const intervalId = setInterval(this.increment, 1000);
    this.setState({ intervalId });

    // setInterval(() => {
    //   this.setState({ count: this.state.count + 1 })
    // }, 1000)
  };

  stopCounter = () => {
    const { intervalId } = this.state;
    clearInterval(intervalId);
    this.setState({ intervalId: null });
  };

  render() {
    const { count , intervalId} = this.state;
    return (
      <>
        <div>Counter is {count}</div>
        <button onClick={this.increment}>add 1</button>
        <button onClick={this.autoIncrement}>autoIncrement</button>
        <button onClick={() => this.stopCounter(intervalId)}>stop</button>
      </>
    );
  }
}
