import React from "react";
import SidebarItem from "./SidebarItem";
import Avatar from "./Avatar";

function Sidebar() {
  return (
    <div className="w-80 bg-white h-screen overflow-x-hidden overflow-y-auto px-5 pt-6 flex flex-col">
      <Avatar src="images/300.jfif" size="40" />
      <h3 className="text-gray-700 text-base font-semibold mt-4 mb-6">
        John Doe
      </h3>
      <nav>
        <ul className="flex flex-col gap-4 min-w-full">
          <SidebarItem to="/home">Home</SidebarItem>
          <SidebarItem to="/vocabulary">Vocabulary</SidebarItem>
          <SidebarItem to="/videos">Video Lessons</SidebarItem>
          <SidebarItem to="/flashcards">Flashcards</SidebarItem>
          <SidebarItem to="/about">About</SidebarItem>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
