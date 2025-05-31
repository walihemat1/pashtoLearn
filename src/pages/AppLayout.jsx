import React from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function AppLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <Topbar />
        <main className="w-full h-lvh bg-amber-600 overflow-x-hidden overflow-y-auto">
          this main
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
