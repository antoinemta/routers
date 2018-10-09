import React, { Component } from "react";
import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  BrowserRouter,
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
      <BrowserRouter>
        <div className="App">
          <NavLink to="/" activeClassName="selected">
            /Home
          </NavLink>
          <br />
          <NavLink to="/History">/notre-histoire</NavLink>
          <Route exact path="/" component={Home} />
          <Route exact path="/History" component={History} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
