import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/layout/Header";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div class="main-wrap">
            {/* navigation */}
            <Header />
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;