import React from "react";
import { Row, Col, Card } from "react-bootstrap";

export default function AboutComponent() {
  return (
    <div>
      {/* <section
        id="about"
        class="mb-3"
        style={{ height: "100vh",marginTop:'10%' }}
      > */}
        <div class="container">
          <div class="row">
            <div class="col offset-lg-8 mx-auto text-center">
              <h2 class="text-dark section-heading">ABOUT COMPANY</h2>
              <hr class="light my-4" />
              <p class="text-dark mb-4" style={{marginTop:'10px'}}>
                We are a Tech-Startup based in Sri Lanka comprising of young
                Tech-Enthusiasts with amazing skills. Our motivation and passion
                is driven at the sight of our satisfied customers, and on how
                much of an impact we can make to make this world a better place,
                as we are the generation that is just stepping in to the
                drivers' seat.
              </p>
              <button
              style={{marginTop:'10px'}}
                class="btn btn-primary btn-xl js-scroll-trigger"
                role="button"
                href="#services"
              >
                Get Started!
              </button>
            </div>
          </div>
          <div class="mt-5">
        <Row >
            <Col className="d-flex justify-content-center">
              <Card data-aos="fade-right"  data-aos-delay="800" style={{ width: "18rem",borderColor:'blue',cursor:'pointer',margin:'10px' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-center">
              <Card data-aos="fade-down" data-aos-delay="800" style={{ width: "18rem",borderColor:'blue',cursor:'pointer',margin:'10px' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-center">
              <Card data-aos="fade-left" data-aos-delay="800" style={{ width: "18rem",borderColor:'blue',cursor:'pointer',margin:'10px' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        </div>
        
      {/* </section> */}
    </div>
  );
}
