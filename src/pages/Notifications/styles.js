import styled from 'styled-components';

export const NotificationsList = styled.ul.attrs({
  className: 'list-group mt-5',
})`
  & .list-group-item {
    background: transparent;
    color: #000;
    border: none;
    padding: 1rem;
    margin: 1rem 0;
    background: linear-gradient(to right, #f60085, #7a51c9);
    color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.26) !important;
  }
`;
