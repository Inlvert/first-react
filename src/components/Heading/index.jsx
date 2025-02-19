import React, { Component } from "react";
import "./Heading.css";
import Greeting from "../Greating";

export default class Heading extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { className, id } = this.props;
    
    const isRead = true

    return (
      <div className={className}>
        <Greeting data={{ firstName: false, lastName: "Userenko0"}} />
        <Greeting data={{ firstName: "User2", lastName: "Userenko2"}} />
        <Greeting data={{ firstName: "User3", lastName: "Userenko3"}} />
      </div>
    );
  }
}