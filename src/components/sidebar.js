import React from 'react';
import { useLocation } from 'react-router-dom';
import { Sidebar, SidebarItem } from './styles';

export default function sidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarItem
        to="/dashboard"
        className={location.pathname === '/dashboard' ? 'active' : ''}
      >
        <i className="fas fa-home" />
      </SidebarItem>
      <SidebarItem to="/test">
        <i className="far fa-file-alt" />
      </SidebarItem>
      <SidebarItem to="/test">
        <i className="far fa-envelope" />
      </SidebarItem>
      <SidebarItem to="/test">
        <i className="fas fa-signal" />
      </SidebarItem>
      <SidebarItem to="/test">
        <i className="fas fa-minus" />
      </SidebarItem>
      <SidebarItem to="/test">
        <i className="fas fa-cog" />
      </SidebarItem>
    </Sidebar>
  );
}
