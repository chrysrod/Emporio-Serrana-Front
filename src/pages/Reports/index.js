import React, { Component } from 'react';
import Sidebar from '../../components/sidebar';
import api from '../../services/api';

export default class Reports extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(1608517520 * 1000),
      reports: [],
      report: {},
    };
  }

  componentDidMount() {
    const { date } = this.state;
    api
      .get('/sales/get_sales_per_date', {
        params: {
          date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
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
    const { date, reports, report } = this.state;
    const handleSearchReport = async (input) => {
      // eslint-disable-next-line no-console
      console.log(input);
      await api
        .get('/sales/get_sales_per_date', {
          params: {
            date: input,
          },
        })
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res);
          this.setState({ reports: res.data });
        })
        .finally(() => this.setState({ date: input }));
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
                      handleSearchReport(e.target.value);
                    }}
                  />
                </div>
              </div>

              <table className="table table-striped table-hover mt-4">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Data</th>
                    <th scope="col">Total</th>
                    <th>Opções</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((e, idx) => (
                    <tr key={e.timestamp}>
                      <th scope="row">{idx + 1}</th>
                      <td>
                        {new Intl.DateTimeFormat('pt').format(
                          new Date(e.timestamp * 1000)
                        )}
                      </td>
                      <td>
                        {new Intl.NumberFormat('pt', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(e.sales_amount)}
                      </td>

                      <td>
                        <button
                          className="btn btn-link text-capitalize p-0"
                          type="button"
                          onClick={() => {
                            this.setState({ report: reports[idx] });
                          }}
                          data-bs-toggle="modal"
                          data-bs-target="#modalDetalhesVenda"
                        >
                          Detalhes
                        </button>
                      </td>
                    </tr>
                  ))}
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
              {report ? (
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
                              value={`${new Date(
                                report.timestamp * 1000
                              ).getDate()}-${new Date(
                                report.timestamp * 1000
                              ).getMonth()}-${new Date(
                                report.timestamp * 1000
                              ).getFullYear()}`}
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
                              value={`${new Date(
                                report.timestamp * 1000
                              ).getHours()}:${new Date(
                                report.timestamp * 1000
                              ).getMinutes()}`}
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
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Quantidade</th>
                      </tr>
                    </thead>
                    <tbody>
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
                    <strong>Total:</strong>{' '}
                    {new Intl.NumberFormat('pt', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(report.sales_amount)}
                  </p>
                </div>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
