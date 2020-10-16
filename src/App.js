import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navigation/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";

const App = () => {
  return (
    <div className="app">
      <div className="navigation__wrapper">
        <Navbar />
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
