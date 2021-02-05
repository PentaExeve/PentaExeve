import React from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function PortFolios() {
  return (
    <div>
        <div className="text-center">
            <h1>Our Products</h1>
        </div>
      <Row>
        <div className="col-md-4">
          <Card.Body data-aos="fade-up" data-aos-duration="1000">
            <a class="portfolio-box" href="assets/img/fullsize/1.jpg">
              <img class="img-fluid" src="assets/img/thumbnails/1.jpg" />
              <div class="portfolio-box-caption">
                <div class="portfolio-box-caption-content">
                  <div class="project-category text-faded">
                    <span>Web Application</span>
                  </div>
                  <div class="project-name">
                    <span>Senura Jayadeva | Portfolio</span>
                  </div>
                </div>
              </div>
            </a>
          </Card.Body>
        </div>
        <div className="col-md-4">
          <Card.Body data-aos="fade-up" data-aos-duration="1000">
            <a class="portfolio-box" href="assets/img/fullsize/2.jpg">
              <img class="img-fluid" src="assets/img/thumbnails/2.jpg" />
              <div class="portfolio-box-caption">
                <div class="portfolio-box-caption-content">
                  <div class="project-category text-faded">
                    <span>Category</span>
                  </div>
                  <div class="project-name">
                    <span>Project Name</span>
                  </div>
                </div>
              </div>
            </a>
          </Card.Body>
        </div>
        <div className="col-md-4">
          <Card.Body data-aos="fade-up" data-aos-duration="1000">
            <a class="portfolio-box" href="assets/img/fullsize/3.jpg">
              <img class="img-fluid" src="assets/img/thumbnails/3.jpg" />
              <div class="portfolio-box-caption">
                <div class="portfolio-box-caption-content">
                  <div class="project-category text-faded">
                    <span>Category</span>
                  </div>
                  <div class="project-name">
                    <span>Project Name</span>
                  </div>
                </div>
              </div>
            </a>
          </Card.Body>
        </div>
      </Row>
      <Row>
        <div className="col-md-4">
          <Card.Body data-aos="fade-up" data-aos-duration="1200">
            <a class="portfolio-box" href="assets/img/fullsize/4.jpg">
              <img class="img-fluid" src="assets/img/thumbnails/4.jpg" />
              <div class="portfolio-box-caption">
                <div class="portfolio-box-caption-content">
                  <div class="project-category text-faded">
                    <span>Category</span>
                  </div>
                  <div class="project-name">
                    <span>Project Name</span>
                  </div>
                </div>
              </div>
            </a>
          </Card.Body>
        </div>
        <div className="col-md-4">
          <Card.Body data-aos="fade-up" data-aos-duration="1200">
            <a class="portfolio-box" href="assets/img/fullsize/5.jpg">
              <img class="img-fluid" src="assets/img/thumbnails/5.jpg" />
              <div class="portfolio-box-caption">
                <div class="portfolio-box-caption-content">
                  <div class="project-category text-faded">
                    <span>Category</span>
                  </div>
                  <div class="project-name">
                    <span>Project Name</span>
                  </div>
                </div>
              </div>
            </a>
          </Card.Body>
        </div>
        <div className="col-md-4">
          <Card.Body data-aos="fade-up" data-aos-duration="1200">
            <a class="portfolio-box" href="assets/img/fullsize/6.jpg">
              <img
                style={{ height: "16rem", width: "50rem" }}
                class="img-fluid"
                src="assets/img/thumbnails/6.jpg"
              />
              <div class="portfolio-box-caption">
                <div class="portfolio-box-caption-content">
                  <div class="project-category text-faded">
                    <span>Category</span>
                  </div>
                  <div class="project-name">
                    <span>Project Name</span>
                  </div>
                </div>
              </div>
            </a>
          </Card.Body>
        </div>
      </Row>
    </div>
  );
}
