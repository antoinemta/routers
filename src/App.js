import React, { Component } from "react";
import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Home from "./Home";
import History from "./History";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavLink to={"/"}>/</NavLink>
          <br />
          <NavLink to={"/notre-histoire"}>/notre-histoire</NavLink>
          <Route exact path="/" component={Home} />
          <Route exact path="/notre-histoire" component={History} />
        </div>
      </Router>
    );
  }
}

export default App;
