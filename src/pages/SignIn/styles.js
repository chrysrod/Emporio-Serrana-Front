import styled from 'styled-components';

export const Login = styled.div.attrs({
  className: 'row align-items-center justify-content-center mx-0',
})`
  min-height: 100vh;
  background: linear-gradient(
    185deg,
    rgba(246, 129, 94, 1) 0%,
    rgba(169, 51, 109, 1) 25%,
    rgba(94, 46, 104, 1) 50%,
    rgba(18, 38, 89, 1) 75%,
    rgba(5, 11, 37, 1) 100%
  );
  color: #fff;

  & .form-control {
    background-color: #d2d2d2;
  }

  & .form-control:focus {
    background-color: #d2d2d2;
    border-color: #fff;
  }

  & .form-control::placeholder {
    text-transform: uppercase;
    color: #81827b;
    font-weight: 600;
    font-size: 0.8rem;
  }

  & .input-group:focus-within .input-group-text {
    background-color: #a9336d;
  }

  & .input-group-text {
    transition: background-color 0.3s ease;
    background-color: transparent;
    color: #fff;
  }
`;
