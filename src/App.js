import React, { Fragment } from "react";
import "../src/styles/style.css";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import MainBody from "./components/Layouts/MainBody";
function App() {


  return (
    <div >
      <Header></Header>
      <MainBody ></MainBody>
    </div>
  );
}

export default App;
