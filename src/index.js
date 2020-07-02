import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/drk-mode-react-site.scss?v=1.1.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/Pages/LandingPage.js";
import RegisterPage from "views/Pages/RegisterPage.js";
import ProfilePage from "views/Pages/ProfilePage.js";

// Renders 4 Pages
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={props => <Index {...props} />} />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Redirect from="/" to="/components" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
