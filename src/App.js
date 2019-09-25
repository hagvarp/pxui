import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import MainBody from "./components/Layouts/MainBody";

function App() {
  return (
    <div>
      <Header></Header>
      <MainBody></MainBody>
      <Footer></Footer>
    </div>
  );
}

export default App;
