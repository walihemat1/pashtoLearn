import React from "react";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <div>
      <nav>
        <ul>
          <SidebarItem>Home</SidebarItem>
          <SidebarItem>Video Lessons</SidebarItem>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
