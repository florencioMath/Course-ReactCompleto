import React from "react";
import Header from "./Header";
import Produtos from "./Produtos";
import Home from "./Home";

const App = () => {
  const { pathname } = window.location;
  let Pagina;
  if (pathname === "/produtos") {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }
  return (
    <section>
      <div>App do curso do Matheus.</div>
      <Header />
      <Pagina />
    </section>
  );
};

export default App;
