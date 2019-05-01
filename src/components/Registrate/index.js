import React, { Component } from "react";

import style from "./authorizationform.module.css";

class Registrate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      confirmPassword: "",
      matchError: false
    };
  }

  validatePasswords = () => {
    if (this.state.password != this.state.confirmPassword) {
      this.setState({ matchError: true, password: "", confirmPassword: "" });
    }
  };

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

  handleConfirmPassword = event => {
    this.setState({
      confirmPassword: event.target.value,
      matchError: false
    });
  };

  render() {
    return (
      <div className={style.main}>
        <div className={style.box}>
          <h2>Registrate</h2>
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
              {this.state.matchError ? (
                <label className={style.error}>Passwords does not match</label>
              ) : (
                <label className={this.state.password && style.focus}>
                  Password
                </label>
              )}
            </div>
            <div className={style.inputBox}>
              <input
                value={this.state.confirmPassword}
                onChange={this.handleConfirmPassword}
                type="password"
                name="password"
              />
              {this.state.matchError ? (
                <label className={style.error}>Passwords does not match</label>
              ) : (
                <label className={this.state.confirmPassword && style.focus}>
                  Confirm Password
                </label>
              )}
            </div>
          </form>
          <input
            onClick={this.validatePasswords}
            type="submit"
            name=""
            value="Submit"
          />
        </div>
      </div>
    );
  }
}

export default Registrate;
