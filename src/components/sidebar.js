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
      <SidebarItem
        to="/vender"
        className={location.pathname === '/vender' ? 'active' : ''}
      >
        <i className="fas fa-shopping-cart" />
      </SidebarItem>
      <SidebarItem
        to="/notifications"
        className={location.pathname === '/notifications' ? 'active' : ''}
      >
        <i className="far fa-bell" />
      </SidebarItem>
      <SidebarItem
        to="/reports"
        className={location.pathname === '/reports' ? 'active' : ''}
      >
        <i className="fas fa-signal" />
      </SidebarItem>
      <SidebarItem
        to="/products"
        className={location.pathname === '/products' ? 'active' : ''}
      >
        <i className="fas fa-list" />
      </SidebarItem>
      <SidebarItem
        to="/settings"
        className={location.pathname === '/settings' ? 'active' : ''}
      >
        <i className="fas fa-cog" />
      </SidebarItem>
    </Sidebar>
  );
}
