import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Sidebar = styled.div.attrs({
  className: 'col-lg-1 px-0',
})`
  height: 100%;
  background: linear-gradient(to bottom, #f60085, #7a51c9);
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SidebarItem = styled(Link)`
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  font-size: 2rem;
  color: #fff;
  transition: all 0.3s ease;

  &.active,
  &:hover {
    background: #fff;
    color: #a9336d;
  }
`;
