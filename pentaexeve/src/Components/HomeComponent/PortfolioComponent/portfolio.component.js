import React from "react";
import "../../../App.css";

export default function PortfolioComponent() {
  return (
    <div>
      <div class="container-fluid p-0 HeaderTextSection">
        <div class="container text-center mb-5">
          <h2 class="section-heading">Our Products</h2>
          <hr class="my-4" />
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="card">
                <div className="card-body">
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
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center" >
              <div className="card">
                <div className="card-body">
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
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6 d-flex justify-content-center" >
              <div className="card">
                <div className="card-body">
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
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <div className="card">
                <div className="card-body">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
