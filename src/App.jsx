import React from "react";
import { Routes, Route } from "react-router-dom"; // ❌ Remove Router from here
import Home from "./Pages/Home";
import MenuItems from "./Pages/MenuItems";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<MenuItems />} />
    </Routes>
  );
};

export default App;
