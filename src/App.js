import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Projects} path="/projects" />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
