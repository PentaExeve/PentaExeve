import React from "react";
import "../../../App.css";

export default function PortfolioComponent() {
  return (
    <div>
      <section id="portfolio" class="p-0 SectionComponent">
        <div class="container-fluid p-0 HeaderTextSection">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading">Our Products</h2>
              <hr class="my-4" />
            </div>
          </div>
          <div class="row no-gutters popup-gallery">
            <div class="col-sm-6 col-lg-4">
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
            </div>
            <div class="col-sm-6 col-lg-4">
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
            </div>
            <div class="col-sm-6 col-lg-4">
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
            </div>
            <div class="col-sm-6 col-lg-4">
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
            </div>
            <div class="col-sm-6 col-lg-4">
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
            </div>
            <div class="col-sm-6 col-lg-4">
              <a class="portfolio-box" href="assets/img/fullsize/6.jpg">
                <img class="img-fluid" src="assets/img/thumbnails/6.jpg" />
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
            </div>
          </div>
        </div>
      </section>
      <section class="bg-dark text-white">
        <div class="container text-center">
          <h2 class="mb-4">Lorem Ipsum!</h2>
          <a
            class="btn btn-light btn-xl sr-button"
            role="button"
            data-aos="zoom-in"
            data-aos-duration="400"
            data-aos-once="true"
            href="#"
          >
            Download Now!
          </a>
        </div>
      </section>
    </div>
  );
}
