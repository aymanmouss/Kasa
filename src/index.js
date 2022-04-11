import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/pages/Home";
import Footer from "../src/Components/Footer";
import APropos from "../src/Components/pages/APropos";
import "./style.css";
import Accommodation from "./Components/pages/accommodation";
import Error from "./Components/Error";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/a-propos' element={<APropos />} />
      <Route path='Accommodation/:id' element={<Accommodation />} />
      <Route path='*' element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
