import React, { Component } from 'react';
import Sidebar from '../../components/sidebar';
import { NotificationsList } from './styles';
import api from '../../services/api';

export default class Notifications extends Component {
  constructor() {
    super();
    this.state = {
      notification: '',
      products: '',
    };
  }

  componentDidMount() {
    api
      .get('/notifications/get_products_close_to_expiration_date')
      .then((res) => {
        let txt = '';
        if (res.data.products) {
          res.data.products.forEach((element, idx) => {
            if (idx === res.data.products.length - 1) txt += element;
            else txt += `${element}, `;
          });
          this.setState({
            notification: `${res.data.message}: `,
            products: txt,
          });
        } else this.setState({ notification: res.data.message });
      });
  }

  render() {
    const { notification, products } = this.state;
    return (
      <div id="notifications" className="row mx-0 h-100">
        <Sidebar />

        <div className="col-lg-1" />

        <div className="col-lg-11">
          <div className="p-4">
            <div className="d-flex justify-content-between align-items-center">
              <h1>Notificações</h1>
            </div>

            <NotificationsList>
              <li className="list-group-item">
                <div className="d-flex align-items-center">
                  <i className="far fa-bell fs-2" />

                  <p className="mb-0 ms-3">{notification}</p>
                  {products ? <p className="mb-0 ms-3">{products}</p> : <div />}
                </div>
              </li>
            </NotificationsList>
          </div>
        </div>
      </div>
    );
  }
}
