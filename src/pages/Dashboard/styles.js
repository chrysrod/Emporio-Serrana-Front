import styled from 'styled-components';

export const EarningsList = styled.div`
  & .list-group-item {
    background: transparent;
    color: #000;
    border: none;
    padding: 1rem;
  }

  & .list-group-item.active {
    background: linear-gradient(to right, #f60085, #7a51c9);
    color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.26) !important;
  }
`;
