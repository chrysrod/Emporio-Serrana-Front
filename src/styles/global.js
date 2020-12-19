import { createGlobalStyle } from 'styled-components';
import Checked from '../assets/checked.svg';
import Loupe from '../assets/loupe.svg';

export default createGlobalStyle`
  * {
    box-shadow: none !important;
    outline: none !important;
  }

  body {
    min-height: 100vh;
    font-family: "Open Sans", sans-serif;
    background: #f3f1f2;
  }

  .btn {
    text-transform: uppercase;
    transition: background-color 0.3s ease;
  }

  .btn-pink {
    color: #fff;
    background-color: #fe5387;
    border-color: #fe5387;
  }

  .btn-pink:active {
    background-color: #fe5387 !important;
    border-color: #fe5387 !important;
  }

  .btn-pink:hover {
    color: #fff;
    background-color: #f13c73;
    border-color: #f3306b;
  }

  .card-header {
    background: linear-gradient(to right, #f60085, #7a51c9);
    padding: 1.2rem;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
  }

  .card-header.bg-transparent {
    background: transparent;
  }

  .form-check-input {
    background-color: transparent;
    border-color: #fff;
    cursor: pointer;
  }

  .form-check-input:checked {
    background-color: transparent;
    border-color: #fff;
  }

  .form-check-input:focus {
    border-color: #fff;
  }

  .form-check-input:checked[type=checkbox] {
    background-image: url(${Checked});
  }

  .form-check-label {
    font-size: 0.8rem;
    cursor: pointer;
  }

  .search {
    background-image: url(${Loupe});
    background-repeat: no-repeat;
    background-position-x: 10px;
    background-position-y: center;
    background-size: 15px;
    padding-left: 30px;
  }

  .text-gradient {
      background-image: linear-gradient(0deg, #f60085, #7a51c9);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
  }

  ::selection {
    background: #a9336d;
    color: #fff;
  }
`;
