import React from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function AppLayout() {
  return (
    <div className="grid">
      <Topbar />
      <Sidebar />
      <main>this main</main>
    </div>
  );
}

export default AppLayout;
