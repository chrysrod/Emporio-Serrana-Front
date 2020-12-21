import React, { Component } from 'react';
import Sidebar from '../../components/sidebar';
import api from '../../services/api';

export default class Reports extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      reports: [],
    };
  }

  componentDidMount() {
    const { date } = this.state;
    api
      .get('/sales', {
        params: {
          get_sales_per_date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
        },
      })
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res);
        this.setState({ reports: res.data });
      });
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { date, reports } = this.state;
    const handleSearchReport = async () => {
      await api
        .get('/sales', {
          params: {
            get_sales_per_date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
          },
        })
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res);
          this.setState({ reports: res.data });
        });
    };
    return (
      <>
        <div id="reports" className="row mx-0 h-100">
          <Sidebar />

          <div className="col-lg-1" />

          <div className="col-lg-11">
            <div className="p-4">
              <h1>Relatórios</h1>

              <div className="row mt-5">
                <div className="col-lg-2">
                  <input
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => {
                      this.setState({ date: e.target.value });
                      handleSearchReport();
                    }}
                  />
                </div>
              </div>

              <table className="table table-striped table-hover mt-4">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th>Opções</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                      <button
                        className="btn btn-link text-capitalize p-0"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#modalDetalhesVenda"
                      >
                        Detalhes
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>
                      <button
                        className="btn btn-link text-capitalize p-0"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#modalDetalhesVenda"
                      >
                        Detalhes
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    <td>
                      <button
                        className="btn btn-link text-capitalize p-0"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#modalDetalhesVenda"
                      >
                        Detalhes
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    <td>
                      <button
                        className="btn btn-link text-capitalize p-0"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#modalDetalhesVenda"
                      >
                        Detalhes
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    <td>
                      <button
                        className="btn btn-link text-capitalize p-0"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#modalDetalhesVenda"
                      >
                        Detalhes
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="modalDetalhesVenda"
          tabIndex="-1"
          aria-labelledby="modalDetalhesVendaLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalDetalhesVendaLabel">
                  Detalhes da venda
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label htmlFor="dataVenda">Data da venda</label>
                          <input
                            type="text"
                            id="dataVenda"
                            className="form-control"
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label htmlFor="horaVenda">Hora da venda</label>
                          <input
                            type="text"
                            id="horaVenda"
                            className="form-control"
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colSpan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td colSpan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td colSpan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mb-0 text-end">
                  <strong>Total:</strong> R$ 1999,50
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
