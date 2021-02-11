import React, { useState, useEffect } from "react";
import logo_name from './logo_name.png';


export default function NavbarComponent() {
  return (
    <div>
      <nav
        class="navbar navbar-light navbar-expand-lg fixed-top"
        id="mainNav"
        style={{
          backgroundColor: "rgba(240, 237, 237, 0.9)",
          margin: "0px 25px",
          borderBottomRightRadius: "50px",
          borderBottomLeftRadius: "50px",
        }}
      >
        <div class="container" style={{ padding: "2px" }}>
          <img href="#page-top"  style={{width:'16%',cursor:'pointer'}} src={logo_name} />
          {/* <a
            class="navbar-brand js-scroll-trigger"
            href="#page-top"
            style={{ color: "#1369ba" }}
          >
            PentaExeve
          </a> */}
          <button
            data-toggle="collapse"
            data-target="#navbarResponsive"
            class="navbar-toggler navbar-toggler-right"
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa fa-align-justify"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item">
                <a
                  class="nav-link js-scroll-trigger"
                  href="#about"
                  style={{ color: "#343a40" }}
                >
                  About
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link js-scroll-trigger"
                  href="#services"
                  style={{ color: "#343a40" }}
                >
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link js-scroll-trigger"
                  href="#portfolio"
                  style={{ color: "#343a40" }}
                >
                  Projects
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link js-scroll-trigger"
                  href="#contact"
                  style={{ color: "#343a40" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
