import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
