import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}
