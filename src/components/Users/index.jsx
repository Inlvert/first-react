import React, { Component, use } from "react";

const users = [
  {
    id: 0,
    firstName: "User",
    lastName: "Userenko",
    age: 20,
  },
  {
    id: 1,
    firstName: "User2",
    lastName: "Userenko2",
    age: 22,
  },
  {
    id: 2,
    firstName: "User3",
    lastName: "Userenko3",
    age: 23,
  },
  {
    id: 3,
    firstName: "User4",
    lastName: "Userenko4",
    age: 24,
  },
];

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users,
      isDerectSort: true,
    };

    // this.sortUsers = this.sortUsers.bind(this)
  }

  sortUsers = () => {
    const { users, isDerectSort } = this.state;

    // const copyUsers = structuredClone(users);

    const copyUsers = JSON.parse(JSON.stringify(users))

    copyUsers.sort((a, b) => {
      if (isDerectSort) {
        return b.id - a.id;
      }
      return a.id - b.id;
    });

    this.setState({
      users: copyUsers,
      isDerectSort: !isDerectSort,
    });
  };

  render() {
    const { users, isDerectSort } = this.state;

    const greetingArr = users.map((user) => (
      <p key={user.id}>
        {user.firstName} - {user.lastName} - {user.age}
      </p>
    ));
    return (
      <>
        <div>{greetingArr}</div>
        <p>{isDerectSort ? "derect" : "reverse"}</p>
        <button onClick={this.sortUsers}>Toggle sort</button>
      </>
    );
  }
}
