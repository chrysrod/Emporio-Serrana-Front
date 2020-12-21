import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Sidebar from '../../components/sidebar';
import api from '../../services/api';

export default class Settings extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      confirmation: '',
    };
  }

  handlePostNewPassword = async () => {
    const { password, confirmation } = this.state;
    if (password === confirmation)
      api
        .put('/users/update_user', {
          username: 'chrysrodev',
          password,
        })
        .then(() => toast.success('Senha alterada!'));
    // eslint-disable-next-line no-console
    else toast.error('Senhas diferentes!');
  };

  render() {
    const { password, confirmation } = this.state;
    return (
      <div id="dashboard" className="row mx-0 h-100">
        <ToastContainer />
        <Sidebar />

        <div className="col-lg-1" />

        <div className="col-lg-11">
          <div className="p-4">
            <h1>Configurações</h1>

            <div className="row mt-5">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="mb-3">
                      <label htmlFor="senha">Digita a nova senha</label>
                      <input
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                        type="password"
                        value={password}
                        id="senha"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="mb-3">
                      <label htmlFor="confirmaSenha">
                        Confirme a nova senha
                      </label>
                      <input
                        type="password"
                        onChange={(e) =>
                          this.setState({ confirmation: e.target.value })
                        }
                        value={confirmation}
                        id="confirmaSenha"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-8">
                    <div className="mb-3 text-end">
                      <button
                        onClick={this.handlePostNewPassword}
                        type="button"
                        className="btn btn-pink"
                      >
                        Trocar senha
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
