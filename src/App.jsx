import React from "react";
import AppLayout from "./pages/AppLayout";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Vocabulary from "./pages/Vocabulary";
import Videos from "./pages/Videos";
import Flashcards from "./pages/Flashcards";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="vocabulary" element={<Vocabulary />} />
          <Route path="videos" element={<Videos />} />
          <Route path="flashcards" element={<Flashcards />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
