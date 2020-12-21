import React from 'react';
import Sidebar from '../../components/sidebar';

export default function index() {
  return (
    <div id="products" className="row mx-0 h-100">
      <Sidebar />

      <div className="col-lg-1" />

      <div className="col-lg-11">
        <div className="p-4">
          <h1>Produtos</h1>

          <div className="row mt-5">
            <div className="col-lg-2">
              <input type="text" className="form-control search" />
            </div>
          </div>

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
    </div>
  );
}
