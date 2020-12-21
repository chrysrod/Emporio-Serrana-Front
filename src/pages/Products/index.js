import React, { Component } from 'react';
import Sidebar from '../../components/sidebar';
import api from '../../services/api';

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      filteredProducts: [],
      product: '',
    };
  }

  componentDidMount() {
    api.get('/products/get_all_products').then((res) => {
      this.setState({ products: res.data, filteredProducts: res.data });
      // eslint-disable-next-line no-console
      console.log(res.data);
    });
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { filteredProducts, products, product } = this.state;
    const handleFilterProduct = (value) => {
      if (value === '') {
        this.setState({
          filteredProducts: products,
          product: value,
        });
      } else
        this.setState({
          filteredProducts: products.filter(
            (e) => e.name.toLowerCase().indexOf(value.toLowerCase()) > -1
          ),
          product: value,
        });
    };

    return (
      <div id="products" className="row mx-0 h-100">
        <Sidebar />

        <div className="col-lg-1" />

        <div className="col-lg-11">
          <div className="p-4">
            <h1>Produtos</h1>

            <div className="row mt-5">
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control search"
                  value={product}
                  onChange={(e) => handleFilterProduct(e.target.value)}
                />
              </div>
            </div>

            <table className="table table-striped table-hover mt-4">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Data de validade</th>
                  <th scope="col">Preço</th>
                  <th scope="col">Quantidade em estoque</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((e) => (
                  <tr key={e.id}>
                    <th scope="row">{e.id}</th>
                    <td>{e.name}</td>
                    <td>{e.expiration_date}</td>
                    <td>
                      {new Intl.NumberFormat('pt', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(e.price)}
                    </td>
                    <td>{e.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
