import "./App.css";
import React from "react";
import HeaderMenu from "./components/HeaderMenu";

function App() {
  return (
    <React.Fragment>
      <header>{HeaderMenu}</header>
      <main>
        soy el menu
        <section>menu</section>
        <seccion>blog</seccion>
      </main>
      <footer>soy el footer</footer>
    </React.Fragment>
  );
}

export default App;
