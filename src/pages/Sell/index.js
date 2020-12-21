import React, { Component } from 'react';
import Sidebar from '../../components/sidebar';
import api from '../../services/api';

export default class Sell extends Component {
  constructor() {
    super();
    this.state = {
      lastFiveSales: [],
      productId: '',
    };
  }

  componentDidMount() {
    api.get('/sales/get_last_five_sales').then((res) => {
      this.setState({ lastFiveSales: res.data });
      // eslint-disable-next-line no-console
      console.log(res.data);
    });
  }

  render() {
    const { lastFiveSales, productId } = this.state;
    const handleGetProduct = async (id) => {
      api.get('/products', {
        params: {
          get_product: id,
        },
      });
    };
    return (
      <>
        <div id="sell" className="row mx-0 h-100">
          <Sidebar />

          <div className="col-lg-1" />

          <div className="col-lg-11">
            <div className="p-4">
              <div className="d-flex justify-content-between align-items-center">
                <h1>Vender</h1>

                <button
                  type="button"
                  className="btn btn-pink"
                  data-bs-toggle="modal"
                  data-bs-target="#modalHistorico"
                >
                  Histórico de vendas
                </button>
              </div>

              <div className="row mt-5">
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-12">
                      <div className="row align-items-end">
                        <div className="col-lg-5">
                          <div className="mb-3">
                            <label htmlFor="procurarProduto">
                              Procurar produto
                            </label>
                            <input
                              type="text"
                              value={productId}
                              onChange={(e) =>
                                this.setState({ productId: e.target.value })
                              }
                              id="procurarProduto"
                              className="form-control search"
                            />
                          </div>
                        </div>

                        <div className="col-lg-1">
                          <div className="mb-3">
                            <button
                              type="button"
                              onClick={handleGetProduct}
                              className="btn btn-pink w-100"
                            >
                              <i className="fas fa-search" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label htmlFor="nome">Nome</label>
                        <input
                          type="text"
                          id="nome"
                          className="form-control"
                          readOnly
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label htmlFor="unidadeMedida">Uni. medida</label>
                        <input
                          type="text"
                          id="unidadeMedida"
                          className="form-control"
                          readOnly
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label htmlFor="quantidade">Quantidade</label>
                        <input
                          type="text"
                          id="quantidade"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label htmlFor="valor">Valor</label>
                        <input
                          type="text"
                          id="valor"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-3">
                        <p className="mb-0 text-end">
                          <strong>Total:</strong> R$ 1999,50
                        </p>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-3 text-end">
                        <button type="button" className="btn btn-pink">
                          Adicionar item
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="mb-3">
                    <table className="table table-striped table-hover mt-4">
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
                  </div>
                </div>

                <div className="col-12">
                  <div className="mb-3 text-end">
                    <button type="button" className="btn btn-pink">
                      Finalizar venda
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="modalHistorico"
          tabIndex="-1"
          aria-labelledby="modalHistoricoLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalHistoricoLabel">
                  Últimas vendas
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  {lastFiveSales ? (
                    <tbody>
                      {lastFiveSales.map((e) => (
                        <tr key={e.product.id}>
                          <th scope="row">{e.product.id}</th>
                          <td>{new Date(e.product.expiration_date * 1000)}</td>
                          <td>
                            {
                              new Date(e.product.expiration_date * 1000)
                                .getHours
                            }
                            :
                            {new Date(
                              e.product.expiration_date * 1000
                            ).getMinutes()}
                          </td>
                          <td>
                            {new Intl.NumberFormat('pt', {
                              style: 'currency',
                              currency: 'BRL',
                            }).format(e.product.price * e.quantity)}
                          </td>
                        </tr>
                      ))}

                      {/* <tr>
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
                    </tr> */}
                    </tbody>
                  ) : (
                    <div />
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
