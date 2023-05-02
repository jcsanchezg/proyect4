import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import Layout from "./pages/Layout";
import Product from './pages/Products';
import About from './pages/About';
import Home from "./pages/Home";
import FormReservation from "./components/Reservation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/Home' element={<Home />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/About' element={<About />} />
          <Route path='/Reservation' element={<FormReservation />} />
        </Route> 
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
