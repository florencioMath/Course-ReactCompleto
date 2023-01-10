import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produtos from "./Components/Produtos";
import Contato from "./Components/Contato";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Produto from "./Components/Produto";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path={process.env.PUBLIC_URL + "/"} element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
