import React from "react";
import SidebarItem from "./SidebarItem";
import Avatar from "./Avatar";

function Sidebar() {
  return (
    <div className="w-68 bg-white h-screen overflow-x-hidden overflow-y-auto px-5 pt-6 flex flex-col items-start">
      <Avatar src="images/300.jfif" size="40" />
      <h3 className="text-gray-700 text-base font-semibold mt-4 mb-6">
        John Doe
      </h3>
      <nav>
        <ul className="flex flex-col w-full">
          <SidebarItem>Home</SidebarItem>
          <SidebarItem>Vocabulary</SidebarItem>
          <SidebarItem>Video Lessons</SidebarItem>
          <SidebarItem>Flashcards</SidebarItem>
          <SidebarItem>About</SidebarItem>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
