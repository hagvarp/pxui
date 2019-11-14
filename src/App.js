import React from "react";
import "../src/styles/style.css";
import Main from "./components/Layouts/Main";
import { HashRouter } from 'react-router-dom'

function App() {


  return (
    <div className="app" >
      <HashRouter><Main ></Main></HashRouter>

    </div>
  );
}

export default App;
