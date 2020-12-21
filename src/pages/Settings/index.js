import React from 'react';
import Sidebar from '../../components/sidebar';

export default function index() {
  return (
    <div id="dashboard" className="row mx-0 h-100">
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
                      type="password"
                      id="senha"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="mb-3">
                    <label htmlFor="confirmaSenha">Confirme a nova senha</label>
                    <input
                      type="password"
                      id="confirmaSenha"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="mb-3">
                    <label htmlFor="senhaAntiga">Senha antiga</label>
                    <input
                      type="password"
                      id="senhaAntiga"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="mb-3 text-end">
                    <button type="button" className="btn btn-pink">
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
