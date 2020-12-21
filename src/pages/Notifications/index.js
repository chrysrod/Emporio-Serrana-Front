import React from 'react';
import Sidebar from '../../components/sidebar';
import { NotificationsList } from './styles';

export default function index() {
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
              <div className="d-flex justify-content-between align-items-center">
                <i className="far fa-bell fs-2" />

                <p className="mb-0 ms-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                  hic sequi voluptatibus soluta accusamus perspiciatis sunt
                  maiores veniam unde? Rerum ab animi velit dolore commodi
                  perspiciatis harum. Harum, delectus optio!
                </p>
              </div>
            </li>

            <li className="list-group-item">
              <div className="d-flex justify-content-between align-items-center">
                <i className="far fa-bell fs-2" />

                <p className="mb-0 ms-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                  hic sequi voluptatibus soluta accusamus perspiciatis sunt
                  maiores veniam unde? Rerum ab animi velit dolore commodi
                  perspiciatis harum. Harum, delectus optio!
                </p>
              </div>
            </li>

            <li className="list-group-item">
              <div className="d-flex justify-content-between align-items-center">
                <i className="far fa-bell fs-2" />

                <p className="mb-0 ms-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                  hic sequi voluptatibus soluta accusamus perspiciatis sunt
                  maiores veniam unde? Rerum ab animi velit dolore commodi
                  perspiciatis harum. Harum, delectus optio!
                </p>
              </div>
            </li>

            <li className="list-group-item">
              <div className="d-flex justify-content-between align-items-center">
                <i className="far fa-bell fs-2" />

                <p className="mb-0 ms-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                  hic sequi voluptatibus soluta accusamus perspiciatis sunt
                  maiores veniam unde? Rerum ab animi velit dolore commodi
                  perspiciatis harum. Harum, delectus optio!
                </p>
              </div>
            </li>
          </NotificationsList>
        </div>
      </div>
    </div>
  );
}
