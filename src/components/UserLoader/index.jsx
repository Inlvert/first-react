import React, { Component, use } from "react";
import { loadUser } from "../../api";

export class UserLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoading: false,
      error: null,
      currentPage: 1,
    };
  }

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;

    if (prevState.currentPage !== currentPage) {
      this.load();
    }
  }

  load = () => {
    const { currentPage } = this.state;
    this.setState({ isLoading: true });

    loadUser(currentPage)
      .then((data) => {
        console.log(data);
        this.setState({
          users: data.results,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
      });
  };

  increment = () => {
    const { currentPage } = this.state;
    this.setState({
      currentPage: currentPage + 1,
    });
  };

  decrement = () => {
    const { currentPage } = this.state;
    this.setState({
      currentPage: currentPage > 1 ? currentPage - 1 : currentPage,
    });
  };

  render() {
    const { users, isLoading, error } = this.state;

    if (isLoading) {
      return <div>LOADING...</div>;
    }

    if (error) {
      return <div>ERROR...</div>;
    }

    const userCards = users.map((user) => (
      <div>
        <article key={user.login.uuid}>{JSON.stringify(user)}</article>
        <img src={user.picture.thumbnail} alt="picture" />
      </div>
    ));
    return (
      <div>
        UserLoader
        {userCards}
        <button onClick={this.decrement}>prev</button>
        <button onClick={this.increment}>next</button>
      </div>
    );
  }
}

export default UserLoader;
