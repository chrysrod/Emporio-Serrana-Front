import React from 'react';
import { Sidebar, SidebarItem } from './styles';

export default function sidebar() {
  return (
    <Sidebar>
      <SidebarItem className="active">
        <i className="fas fa-home" />
      </SidebarItem>
      <SidebarItem>
        <i className="far fa-file-alt" />
      </SidebarItem>
      <SidebarItem>
        <i className="far fa-envelope" />
      </SidebarItem>
      <SidebarItem>
        <i className="fas fa-signal" />
      </SidebarItem>
      <SidebarItem>
        <i className="fas fa-minus" />
      </SidebarItem>
      <SidebarItem>
        <i className="fas fa-cog" />
      </SidebarItem>
    </Sidebar>
  );
}
