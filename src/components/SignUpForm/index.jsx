import React, { Component } from "react";
import className from 'classnames'
import styles from "./SignUpForm.module.scss";

const initialValue = {
  login: "",
  email: "",
  password: "",
  comment: "",
  account: "basic",
  isSubscribed: false,
  gender: "male",
};

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...initialValue}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements.login.value);
    this.setState({...initialValue})
  };

  hendelChange = (e) => {
    const {
      target: { value, name, type, checked },
    } = e;

    const newValue = type === "checkbox" ? checked : value;

    this.setState({ [name]: newValue });
    console.log(newValue);
  };

  render() {
    const { login, email, password, comment, account, isSubscribed, gender } =
      this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        SignUpForm
        <input
          type="text"
          name="login"
          placeholder="login"
          value={login}
          onChange={this.hendelChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.hendelChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={this.hendelChange}
        />
        <textarea name="comment" value={comment} onChange={this.hendelChange} />
        <select name="account" onChange={this.hendelChange} value={account}>
          <option value="basic">basic</option>
          <option value="advance">advance</option>
          <option value="admin">admin</option>
        </select>
        <label style={{color: 'green'}}>
          <input
            type="checkbox"
            name="isSubscribed"
            checked={isSubscribed}
            onChange={this.hendelChange}
          />
          Subscribe
        </label>
        <label>
          choose your gender
          <input
            type="radio"
            name="gender"
            value="male"
            chacked={gender === "male"}
            onChange={this.hendelChange}
          />
          male
          <input
            type="radio"
            name="gender"
            value="female"
            chacked={gender === "female"}
            onChange={this.hendelChange}
          />
          female
        </label>
        <button type="submit">submit</button>
      </form>
    );
  }
}
