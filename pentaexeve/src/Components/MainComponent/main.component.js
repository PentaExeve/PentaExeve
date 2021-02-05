import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavbarComponent from "./navbar.component";
import HeaderComponent from "./header.component";
import HomeComponent from "../HomeComponent/home.component";
import FooterComponent from "./footer.component";

export default function MainComponent() {
  return (
    <Router>
      <div>
        <Route path="/" exact>
          <NavbarComponent />
          <HeaderComponent />
          <HomeComponent />
          <FooterComponent />
        </Route>
      </div>
    </Router>
  );
}
