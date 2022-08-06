import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "../src/styles/App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Work from "./pages/Work";

function App() {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();
  const [linkGrow, setLinkGrow] = useState(false);

  window.addEventListener("mousemove", function (e) {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });
  return (
    <Router>
      <div className="App">
        {/* <div style={{ left: cursorX, top: cursorY }} className={`cursor ${linkGrow ? "linkGrow" : ""}`}></div> */}
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
