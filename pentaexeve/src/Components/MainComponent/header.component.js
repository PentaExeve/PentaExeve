import React from "react";
import Typical from "react-typical";

import HeaderImage from "./img/header.jpg";
import Logo from "./img/logo.png";

export default function HeaderComponent() {
  return (
    <div>
      <header
        class="masthead text-center text-white d-flex"
        style={{
          backgroundImage: "url(" + HeaderImage + ")",
          height:'103vh'
        }}
      >
        <div class="container my-auto">
          <div
            class="row"
            style={{
              textShadow: "2px 2px 4px #000000",
              fontFamily: "Ubuntu, sans-serif",
            }}
          >
            <div class="col-lg-10 mx-auto">
              <h1 class="text-uppercase">
                {/* <img src={Logo} style={{ width: "300px" }} /> */}
                <br />
                <strong
                  style={{
                    fontFamily: "Sarala, sans-serif",
                  }}
                >
                  PentaExeve
                </strong>
              </h1>
             <span style={{backgroundColor:'black'}}> WE CREATE YOUR IMAGINE</span>
              <hr />
            </div>
          </div>
          <div class="col-lg-8 mx-auto">
            <h2
              style={{
                textShadow: "4px 4px 8px #000000",
                color: "white",
              }}
            >
              We offer
              <Typical
                steps={[
                  " Web App Development",
                  1000,
                  " Desktop App Development",
                  1000,
                  " Mobile Development",
                  1000,
                ]}
                loop={Infinity}
                wrapper="b"
              />
            </h2>

            <br />
            <a
              class="btn btn-primary btn-xl js-scroll-trigger"
              role="button"
              href="#services"
            >
              Find Out More
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
