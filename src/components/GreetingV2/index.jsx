import React, { Component } from "react";
import usersData from "../../data";

export default class GreetingV2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersData,
    };
    
  }

  deleteUser = (userId) => {
    const { usersData } = this.state;
    const newUsers = usersData.filter((user) => user.id !== userId)

    this.setState({usersData: newUsers})

    
    
  }
  
  render() {
    const { usersData } = this.state;
    
    const users2 = usersData.map((user) => (
      <ul key={user.id}>
        <li>
          <p>{user.firstName} {user.id}</p>
          <button onClick={() => this.deleteUser(user.id)}>delete user</button>
        </li>
      </ul>
    ));
    console.log(usersData)
    
    return <div>{users2}</div>;
  }
}
