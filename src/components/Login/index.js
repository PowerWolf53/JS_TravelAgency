import React, { Component } from "react";

import style from "./loginform.module.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    };
  }

  handleLogin = event => {
    this.setState({
      login: event.target.value
    });
  };

  handlePassword = event => {
    this.setState({
      password: event.target.value,
      matchError: false
    });
  };

  render() {
    return (
      <div className={style.main}>
        <div className={style.box}>
          <h2>Login</h2>
          <form>
            <div className={style.inputBox}>
              <input
                value={this.state.login}
                onChange={this.handleLogin}
                type="text"
                name="login"
              />
              <label className={this.state.login && style.focus}>
                Username
              </label>
            </div>
            <div className={style.inputBox}>
              <input
                value={this.state.password}
                onChange={this.handlePassword}
                type="password"
                name="password"
              />
              <label className={this.state.password && style.focus}>
                Password
              </label>
            </div>
          </form>
          <input type="submit" name="" value="Submit" />
        </div>
      </div>
    );
  }
}

export default Login;
