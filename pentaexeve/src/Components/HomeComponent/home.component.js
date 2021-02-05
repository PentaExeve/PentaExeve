import React from "react";
import AboutComponent from "./AboutComponent/about.component";
import ServicesComponent from "./ServicesComponent/services.component";
import PortfolioComponent from "./PortfolioComponent/portfolio.component";
import PortFolios from './PortfolioComponent/portfolios.component';

export default function HomeComponent() {
  return (
    <div>
      {" "}
      <section>
      <AboutComponent />
      </section>
     <section>
     <ServicesComponent />
     </section>
     <section>
      <PortFolios/>
     </section>
    </div>
  );
}
