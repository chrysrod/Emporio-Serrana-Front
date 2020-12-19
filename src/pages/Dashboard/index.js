import React from 'react';
import Sidebar from '../../components/sidebar';
import { EarningsList } from './styles';

export default function index() {
  return (
    <div id="dashboard" className="row mx-0 h-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Padding for sidebar */}
      <div className="col-lg-1" />

      {/* Main content */}
      <div className="col-lg-11">
        <div className="p-4">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p className="d-inline-block fs-3 mb-0">Hello, John Doe</p>
              <i className="fas fa-user fs-2 ms-3" />
            </div>

            <div>
              <input type="text" className="w-auto form-control search" />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-3 mt-lg-0 mt-3">
              <div className="card shadow-sm rounded-0">
                <div className="card-header">
                  <h2 className="fs-5 mb-0">Earning</h2>
                </div>
                <div className="card-body">
                  <p className="fs-1 fw-bold text-center mb-0">$ 5729</p>

                  <div className="d-flex justify-content-around align-items-center">
                    <p className="mb-0">
                      +$ 78 <i className="fas fa-arrow-up text-primary" />
                    </p>
                    <button type="button" className="border-0 bg-transparent">
                      <i className="far fa-chart-bar fs-3 text-gradient" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mt-lg-0 mt-3">
              <div className="card shadow-sm rounded-0">
                <div className="card-header">
                  <h2 className="fs-5 mb-0">Pageviews</h2>
                </div>
                <div className="card-body">
                  <p className="fs-1 fw-bold text-center mb-0">293878</p>

                  <div className="d-flex justify-content-around align-items-center">
                    <p className="mb-0">
                      -2930 <i className="fas fa-arrow-down text-danger" />
                    </p>
                    <button type="button" className="border-0 bg-transparent">
                      <i className="far fa-chart-bar fs-3 text-gradient" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mt-lg-0 mt-3">
              <div className="card shadow-sm rounded-0">
                <div className="card-header">
                  <h2 className="fs-5 mb-0">Downloads</h2>
                </div>
                <div className="card-body">
                  <p className="fs-1 fw-bold text-center mb-0">582920</p>

                  <div className="d-flex justify-content-around align-items-center">
                    <p className="mb-0">
                      -1029 <i className="fas fa-arrow-down text-danger" />
                    </p>
                    <button type="button" className="border-0 bg-transparent">
                      <i className="far fa-chart-bar fs-3 text-gradient" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mt-lg-0 mt-3">
              <div className="card bg-transparent border-0">
                <div className="card-header bg-transparent border-0 text-dark">
                  <h2 className="text-center fw-bold fs-5 mb-0">Percentages</h2>
                </div>

                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <p>Porcentagem 1</p>
                    </div>

                    <div className="col-lg-6">
                      <p>Porcentagem 2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <EarningsList>
                <li className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <i className="far fa-calendar-alt fs-2" />

                    <p className="mb-0">14 dezembro</p>

                    <p className="mb-0">$ 292,93</p>
                  </div>
                </li>

                <li className="list-group-item active" aria-current="true">
                  <div className="d-flex justify-content-between align-items-center">
                    <i className="far fa-calendar-alt fs-2" />

                    <p className="mb-0">15 dezembro</p>

                    <p className="mb-0">$ 292,93</p>
                  </div>
                </li>

                <li className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <i className="far fa-calendar-alt fs-2" />

                    <p className="mb-0">16 dezembro</p>

                    <p className="mb-0">$ 292,93</p>
                  </div>
                </li>

                <li className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <i className="far fa-calendar-alt fs-2" />

                    <p className="mb-0">17 dezembro</p>

                    <p className="mb-0">$ 292,93</p>
                  </div>
                </li>
              </EarningsList>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <p>Área gráfico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
