import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Greeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRead: false,
      // date: new Date()
    };
  }

  // tick() {
  //   this.setState({
  //     date: new Date()
  //   });
  // }

  componentDidMount() {
    // this.timerID = setInterval(
    //   () => this.tick(),
    //   100
    // );
  }

  componentWillUnmount() {
    // clearInterval(this.timerID);
  }

  render() {
    console.log(this.props.data);

    const {
      data: { firstName, lastName },
    } = this.props;

    // const { firstName, lastName } = this.props;

    const { isRead } = this.state;

    const fullName = `${firstName} ${lastName}`;

    let readText = isRead ? "is read" : "not read";

    const pressButton = (e) => {
      if (isRead == false) {
        const stateChange = { isRead: true };

        this.setState(stateChange);
      } else {
        this.setState({ isRead: false });
      }
    };

    return (
      <>
        <h2 firstName={firstName} lastName={lastName}>
          hello {fullName} - message - {readText}
        </h2>
        <button onClick={pressButton}>read text</button>
        {/* <h2>Зараз {this.state.date.toLocaleTimeString()}.</h2> */}
      </>
    );
  }
}

const userObj = PropTypes.shape({
  firstName: PropTypes.string,
  lastName: PropTypes.string
})

Greeting.propTypes = {
  data: userObj.isRequired
}