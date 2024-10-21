import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import News from "./components/News";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/cricket" element={<News />} />
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<News category="business" />} />
        <Route path="/bitcoin" element={<News category="bitcoin" />} />
        <Route path="/technology" element={<News category="technology" />} />
        <Route path="/sports" element={<News category="sports" />} />
        <Route path="/science" element={<News category="science" />} />
        <Route path="/health" element={<News category="health" />} />
        <Route path="/general" element={<News category="general" />} />
        <Route
          path="/entertainment"
          element={<News category="entertainment" />}
        />
      </Routes>
    </>
  );
}

export default App;
