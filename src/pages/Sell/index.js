/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import Sidebar from '../../components/sidebar';
import api from '../../services/api';

export default class Sell extends Component {
  constructor() {
    super();
    this.state = {
      lastFiveSales: [],
      productId: '',
      id: '',
      name: '',
      measure: '',
      price: '',
      quantity: '',
      total: 0,
      cart: [],
    };
  }

  componentDidMount() {
    api.get('/sales/get_last_five_sales').then((res) => {
      const lastFive = res.data[0];
      this.setState({ lastFiveSales: [...lastFive.sale] });
      // eslint-disable-next-line no-console
      // console.log(lastFive.sale);
    });
  }

  render() {
    const {
      lastFiveSales,
      productId,
      name,
      measure,
      price,
      quantity,
      cart,
    } = this.state;
    const handleGetProduct = async () => {
      await api
        .get('/products/get_product', {
          params: {
            id: productId,
          },
        })
        .then((res) => {
          this.setState({
            name: res.data.name,
            measure: res.data.measure,
            price: res.data.price,
            quantity: 1,
          });
        });
    };
    const handleAddCart = () => {
      this.setState({
        cart: [...cart, { name, id: productId, measure, price, quantity }],
        name: '',
        productId: '',
        measure: '',
        price: '',
        quantity: '',
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
                          value={name}
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
                          value={measure}
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
                          value={quantity}
                          onChange={(e) =>
                            this.setState({ quantity: e.target.value })
                          }
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
                          value={price}
                          onChange={(e) =>
                            this.setState({ price: e.target.value })
                          }
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-3">
                        <p className="mb-0 text-end">
                          <strong>Total:</strong>{' '}
                          {new Intl.NumberFormat('pt', {
                            style: 'currency',
                            currency: 'BRL',
                          }).format(price * quantity)}
                        </p>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-3 text-end">
                        <button
                          type="button"
                          onClick={() => handleAddCart()}
                          className="btn btn-pink"
                        >
                          Adicionar item
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {cart.length > 0 ? (
                  <>
                    <div className="col-12">
                      <div className="mb-3">
                        <table className="table table-striped table-hover mt-4">
                          <thead>
                            <tr>
                              <th scope="col">ID</th>
                              <th scope="col">Nome</th>
                              <th scope="col">Medida</th>
                              <th scope="col">Preço</th>
                              <th scope="col">Quantidade</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cart.map((e) => (
                              <tr key={e.id}>
                                <th scope="row">{e.id}</th>
                                <td>{e.name}</td>
                                <td>{e.measure}</td>
                                <td>
                                  {new Intl.NumberFormat('pt', {
                                    style: 'currency',
                                    currency: 'BRL',
                                  }).format(e.price)}
                                </td>
                                <td>{e.quantity}</td>
                              </tr>
                            ))}
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
                  </>
                ) : (
                  <div />
                )}
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
                  <tbody>
                    {/* {lastFiveSales.map((e) => (
                      <tr key={e.product.id}>
                        <th scope="row">{e.product.id}</th>
                        <td>{new Date(e.timestamp * 1000)}</td>
                        <td>
                          {new Date(e.timestamp * 1000).getHours}:
                          {new Date(e.timestamp * 1000).getMinutes()}
                        </td>
                        <td>
                          {new Intl.NumberFormat('pt', {
                            style: 'currency',
                            currency: 'BRL',
                          }).format(e.product.price * e.quantity)}
                        </td>
                      </tr>
                    ))} */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
