import React from 'react';
import { Login } from './styles';
import UserCircle from '../../assets/user-circle.svg';
import User from '../../assets/user.svg';
import Lock from '../../assets/lock.svg';

export default function index() {
  return (
    <Login>
      <div className="col-lg-3 text-center">
        <img src={UserCircle} alt="" width="120" className="mb-5" />
        <div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <img src={User} alt="" width="15" />
            </span>
            <input
              type="text"
              className="form-control"
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
              placeholder="Senha"
              aria-label="Senha"
              aria-describedby="basic-addon1"
            />
          </div>

          <button type="button" className="w-100 btn btn-pink">
            Login
          </button>

          <div className="input-group mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Lembrar de mim
              </label>
            </div>
          </div>
        </div>
      </div>
    </Login>
  );
}
