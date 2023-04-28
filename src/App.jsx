import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./pages/Layout";
import Product from './pages/Products';
import About from './pages/About';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}/>
          <Route path='product' element={<Product />} />
          <Route path='about' element={<About />} />
        {/* </Route>  */}
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
  );
}

export default App;
