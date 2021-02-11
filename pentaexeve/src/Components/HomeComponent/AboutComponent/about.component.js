import React from "react";
import { Row, Col, Card } from "react-bootstrap";

export default function AboutComponent() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12  mx-auto text-center">
            <h2 class="text-dark section-heading">ABOUT COMPANY</h2>
            <hr class="light my-4" />
            <p class="text-dark mb-4" style={{ marginTop: "10px" }}>
              We are a Tech-Startup based in Sri Lanka comprising of young
              Tech-Enthusiasts with amazing skills. Our motivation and passion
              is driven at the sight of our satisfied customers, and on how much
              of an impact we can make to make this world a better place, as we
              are the generation that is just stepping in to the drivers' seat.
            </p>
            <button
              style={{ marginTop: "10px" }}
              class="btn btn-primary btn-xl js-scroll-trigger"
              role="button"
              href="#services"
            >
              Get Started!
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-md-4 col-sm-12 d-flex justify-content-center">
            <div
              class="card"
              data-aos="fade-down"
              data-aos-delay="800"
              style={{
                width: "18rem",
                borderColor: "blue",
                cursor: "pointer",
                margin: "10px",
              }}
            >
              <di class="card-body">
                <h3>Card Title</h3>
                {/* <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
                {/* <img src={}></img> */}
              </di>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 d-flex justify-content-center">
            <div
              class="card"
              data-aos="fade-down"
              data-aos-delay="800"
              style={{
                width: "18rem",
                borderColor: "blue",
                cursor: "pointer",
                margin: "10px",
              }}
            >
              <di class="card-body">
                <h3>Card Title</h3>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </di>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 d-flex justify-content-center">
            <div
              class="card"
              data-aos="fade-down"
              data-aos-delay="800"
              style={{
                width: "18rem",
                borderColor: "blue",
                cursor: "pointer",
                margin: "10px",
              }}
            >
              <di class="card-body">
                <h3>Card Title</h3>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </di>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
