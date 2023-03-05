import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "../src/styles/App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Work from "./pages/Work";

function App() {
  const [linkGrow, setLinkGrow] = useState(false);
  return (
    <Router>
      <div className="App">
        <Header setLinkGrow={setLinkGrow} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
