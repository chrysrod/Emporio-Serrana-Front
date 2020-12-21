/* eslint-disable no-console */
import React, { Component } from 'react';
import Sidebar from '../../components/sidebar';
import { EarningsList } from './styles';
import Doughnut from '../../components/doughnutchart';
import Line from '../../components/linechart';
import api from '../../services/api';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      // sales: [],
      earnings: {},
      percentages: [],
    };
    this.sales = [];
  }

  componentDidMount() {
    api.get('/sales/get_percentages').then((res) => {
      this.setState({ percentages: res.data });
    });
    api.get('/sales/get_all_week_sales').then((res) => {
      this.sales = res.data;
    });
    api.get('/sales/get_earnings').then((res) => {
      this.setState({ earnings: res.data });
    });
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { percentages, earnings } = this.state;
    const lastThreeItens = this.sales.splice(this.sales.length - 3, 3);

    return (
      <div id="dashboard" className="row mx-0 h-100">
        {/* Sidebar */}
        <Sidebar />

        {/* Padding for sidebar */}
        <div className="col-lg-1" />

        {/* Main content */}
        <div className="col-lg-11">
          <div className="p-4 pb-0">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="d-inline-block fs-3 mb-0">Hello, John Doe</p>
                <i className="fas fa-user fs-2 ms-3" />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-lg-3 mt-lg-0 mt-3">
                <div className="card shadow-sm rounded-0">
                  <div className="card-header">
                    <h2 className="fs-5 mb-0">Earning yesterday</h2>
                  </div>
                  <div className="card-body">
                    <p className="fs-1 fw-bold text-center mb-0">
                      {new Intl.NumberFormat('pt', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(earnings.yesterday)}
                    </p>

                    {/* <div className="d-flex justify-content-around align-items-center">
                      <p className="mb-0">
                        +$ 78 <i className="fas fa-arrow-up text-primary" />
                      </p>
                      <button type="button" className="border-0 bg-transparent">
                        <i className="far fa-chart-bar fs-3 text-gradient" />
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-3 mt-lg-0 mt-3">
                <div className="card shadow-sm rounded-0">
                  <div className="card-header">
                    <h2 className="fs-5 mb-0">Earning 3 days</h2>
                  </div>
                  <div className="card-body">
                    <p className="fs-1 fw-bold text-center mb-0">
                      {new Intl.NumberFormat('pt', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(earnings.last_three_days)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 mt-lg-0 mt-3">
                <div className="card shadow-sm rounded-0">
                  <div className="card-header">
                    <h2 className="fs-5 mb-0">Earning 7 days</h2>
                  </div>
                  <div className="card-body">
                    <p className="fs-1 fw-bold text-center mb-0">
                      {new Intl.NumberFormat('pt', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(earnings.week)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 mt-lg-0 mt-3">
                <div className="card bg-transparent border-0">
                  <div className="card-header bg-transparent border-0 text-dark">
                    <h2 className="text-center fw-bold fs-5 mb-0">
                      Percentages
                    </h2>
                  </div>
                  {percentages.length > 0 ? (
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-6">
                          <Doughnut
                            label={`${percentages[0].year}`}
                            percent={percentages[0].percentage}
                          />
                          <p className="text-center fw-bold mt-1 fs-6">
                            {percentages[0].year}
                          </p>
                        </div>

                        <div className="col-lg-6">
                          <Doughnut
                            label={`${percentages[1].year}`}
                            percent={percentages[1].percentage}
                          />
                          <p className="text-center fw-bold mt-1 fs-6">
                            {percentages[1].year}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-6">
                {this.sales.length > 0 && percentages.length > 0 ? (
                  <EarningsList>
                    {lastThreeItens.map((e, idx) => (
                      <li
                        key={e.sales_amount}
                        className={
                          lastThreeItens.length - 1 === idx
                            ? 'list-group-item active'
                            : 'list-group-item'
                        }
                      >
                        <div className="d-flex justify-content-between align-items-center">
                          <i className="far fa-calendar-alt fs-2" />

                          <p className="mb-0">
                            {new Date(e.timestamp * 1000).getDate()}{' '}
                            {new Intl.DateTimeFormat('pt', {
                              month: 'long',
                            }).format(new Date(e.timestamp * 1000))}
                          </p>

                          <p className="mb-0">
                            {new Intl.NumberFormat('pt', {
                              style: 'currency',
                              currency: 'BRL',
                            }).format(e.sales_amount)}
                          </p>
                        </div>
                      </li>
                    ))}
                  </EarningsList>
                ) : (
                  <div />
                )}
              </div>

              <div className="col-lg-6">
                <div className="card gradient">
                  <div className="card-body">
                    <Line data={[...lastThreeItens, ...this.sales]} />
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
