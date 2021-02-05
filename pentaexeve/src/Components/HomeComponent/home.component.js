import React from "react";
import AboutComponent from "./AboutComponent/about.component";
import ServicesComponent from "./ServicesComponent/services.component";
import PortfolioComponent from "./PortfolioComponent/portfolio.component";

export default function HomeComponent() {
  return (
    <div>
      {" "}
      <AboutComponent />
      <ServicesComponent />
      <PortfolioComponent />
    </div>
  );
}
