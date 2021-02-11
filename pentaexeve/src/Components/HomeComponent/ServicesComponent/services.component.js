import React from "react";
import service from "./service.css";

export default function ServicesComponent() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center ">
            <h2 class="section-heading ">At Your Service</h2>
            <hr class="my-4" />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-3 text-center">
            <div class="mx-auto service-box mt-5">
              <i
                class="fa fa-diamond fa-4x text-primary mb-3 sr-icons"
                data-aos="zoom-in"
                data-aos-duration="200"
                data-aos-once="true"
              ></i>
              <h3 class="mb-3">Sturdy Templates</h3>
              <p class="text-muted mb-0">
                Our templates are updated regularly so they don't break.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 text-center">
            <div class="mx-auto service-box mt-5">
              <i
                class="fa fa-paper-plane fa-4x text-primary mb-3 sr-icons"
                data-aos="zoom-in"
                data-aos-duration="200"
                data-aos-delay="200"
                data-aos-once="true"
              ></i>
              <h3 class="mb-3">Ready to Ship</h3>
              <p class="text-muted mb-0">
                You can use this theme as is, or you can make changes!
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 text-center">
            <div class="mx-auto service-box mt-5">
              <i
                class="fa fa-newspaper-o fa-4x text-primary mb-3 sr-icons"
                data-aos="zoom-in"
                data-aos-duration="200"
                data-aos-delay="400"
                data-aos-once="true"
              ></i>
              <h3 class="mb-3">Up to Date</h3>
              <p class="text-muted mb-0">
                We update dependencies to keep things fresh.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 text-center">
            <div class="mx-auto service-box mt-5">
              <i
                class="fa fa-heart fa-4x text-primary mb-3 sr-icons"
                data-aos="fade"
                data-aos-duration="200"
                data-aos-delay="600"
                data-aos-once="true"
              ></i>
              <h3 class="mb-3">Made with Love</h3>
              <p class="text-muted mb-0">
                You have to make your websites with love these days!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="row service-class d-flex justify-content-center mt-4">
        <div class="col-md-6 col-sm-12 d-flex justify-content-center">
          <div class="mx-auto service-box mt-5 text-center">
            <i
              class="fa fa-heart fa-4x text-success mb-3 sr-icons"
              data-aos="fade"
              data-aos-duration="200"
              data-aos-delay="600"
              data-aos-once="true"
            ></i>
            <h3 class="mb-3">Quality products</h3>
            <p class="text-muted mb-0">
              You have to make your websites with love these days!
            </p>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 d-flex justify-content-center">
          <div class="mx-auto service-box mt-5  text-center">
            <i
              class="fa fa-heart fa-4x text-success mb-3 sr-icons"
              data-aos="fade"
              data-aos-duration="200"
              data-aos-delay="600"
              data-aos-once="true"
            ></i>
            <h3 class="mb-3">On time handover</h3>
            <p class="text-muted mb-0">
              You have to make your websites with love these days!
            </p>
          </div>
        </div>
        {/* <div class="col-md-4 col-sm-12 d-flex justify-content-center">
          <div class="mx-auto service-box mt-5 text-center">
            <i
              class="fa fa-heart fa-4x text-success text-center mb-3 sr-icons"
              data-aos="fade"
              data-aos-duration="200"
              data-aos-delay="600"
              data-aos-once="true"
            ></i>
            <h3 class="mb-3">Made with Love</h3>
            <p class="text-muted mb-0">
              You have to make your websites with love these days!
            </p>
          </div>
        </div> */}
      </div>
      </div>
    </div>
  );
}
