import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navigation/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";

function App() {
  const [navbarShadow, setNavbarShadow] = useState(false);
  const navbar__custom__style = {
    position: "sticky",
    top: 0,
    zIndex: 99,
    boxShadow: navbarShadow ? "0 0 12px -1px rgba(0, 0, 0, 0.5)" : "none",
  };

  const handleScroll = () => {
    window.scrollY > 60 ? setNavbarShadow(true) : setNavbarShadow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className="app">
      {/* Navigation */}
      <div
        style={navbarShadow ? navbar__custom__style : null}
        className="navigation__wrapper"
      >
        <div className="container">
          <Navbar />
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/register" component={Register} />
      </Switch>
      {/* footer */}
      <div className="footer__wrapper">
        <Footer />
      </div>
    </div>
  );
}

export default App;
