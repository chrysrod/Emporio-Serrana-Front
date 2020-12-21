import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Login } from './styles';
import api from '../../services/api';
import { login } from '../../services/auth';
import UserCircle from '../../assets/user-circle.svg';
import User from '../../assets/user.svg';
import Lock from '../../assets/lock.svg';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      username: 'chrysrodev',
      password: '123',
    };
  }

  // componentDidMount() {
  //   const { history } = this.props;
  //   if (isAuthenticated()) history.push('/dashboard');
  // }

  render() {
    const { checked, username, password } = this.state;
    const { history } = this.props;

    const handleSubmit = async (e) => {
      e.preventDefault();
      await api
        .post('/auth/login', { username, password })
        .then((res) =>
          checked
            ? login(JSON.stringify(res.data.token), 'local')
            : login(JSON.stringify(res.data.token), 'session')
        )
        .finally(() => history.push('/dashboard'));
      // .catch((error) => console.log(error));
    };
    return (
      <Login>
        <div className="col-lg-3 text-center">
          <img src={UserCircle} alt="" width="120" className="mb-5" />
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <img src={User} alt="" width="15" />
              </span>
              <input
                type="text"
                className="form-control"
                onChange={(userInput) => {
                  this.setState({ username: userInput.target.value });
                }}
                value={username}
                placeholder="Usuário"
                aria-label="Usuário"
                aria-describedby="basic-addon1"
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon2">
                <img src={Lock} alt="" width="15" />
              </span>
              <input
                type="password"
                className="form-control"
                onChange={(passwordInput) => {
                  this.setState({ password: passwordInput.target.value });
                }}
                value={password}
                placeholder="Senha"
                aria-label="Senha"
                aria-describedby="basic-addon1"
              />
            </div>

            <button type="submit" className="w-100 btn btn-pink">
              Login
            </button>

            <div className="input-group mt-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={checked}
                  checked={checked}
                  onChange={() => {
                    this.setState({ checked: !checked });
                  }}
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Lembrar de mim
                </label>
              </div>
            </div>
          </form>
        </div>
      </Login>
    );
  }
}

SignIn.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
