import React from "react";
import "./service.css";

export default function ServicesComponent() {
  return (
    <section id="services">
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
              <div
                class="mx-auto service-box mt-5"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <i class="fa fa-diamond fa-4x text-primary mb-3 sr-icons"></i>
                <h3 class="mb-3">Sturdy Templates</h3>
                <p class="text-muted mb-0">
                  Our templates are updated regularly so they don't break.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 text-center">
              <div
                class="mx-auto service-box mt-5"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <i class="fa fa-paper-plane fa-4x text-primary mb-3 sr-icons"></i>
                <h3 class="mb-3">Ready to Ship</h3>
                <p class="text-muted mb-0">
                  You can use this theme as is, or you can make changes!
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 text-center">
              <div
                class="mx-auto service-box mt-5"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <i class="fa fa-newspaper-o fa-4x text-primary mb-3 sr-icons"></i>
                <h3 class="mb-3">Up to Date</h3>
                <p class="text-muted mb-0">
                  We update dependencies to keep things fresh.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 text-center">
              <div
                class="mx-auto service-box mt-5"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <i class="fa fa-heart fa-4x text-primary mb-3 sr-icons"></i>
                <h3 class="mb-3">Made with Love</h3>
                <p class="text-muted mb-0">
                  You have to make your websites with love these days!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ROW STARTED */}
        <div
          className="container-fluid serviceSecondRow"
          style={{ color: "white" }}
        >
          <div className="row service-class d-flex justify-content-center mt-4">
            <div
              class="col-md-6 col-sm-12 d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <div class="mx-auto service-box mt-5 text-center">
                <i class="fas fa-laptop-code fa-4x"></i>

                <h3 class="mb-3">DEVELOPERS</h3>
                <p class="mb-0 textServices">10 +</p>
              </div>
            </div>
            <div
              class="col-md-6 col-sm-12 d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <div class="mx-auto service-box mt-5  text-center">
                <i class="fas fa-users fa-4x"></i>

                <h3 class="mb-3">CLIENTS</h3>
                <p class="mb-0 textServices">10 +</p>
              </div>
            </div>
            <div
              class="col-md-6 col-sm-12 d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <div class="mx-auto service-box mt-5  text-center">
                <i class="fas fa-project-diagram fa-4x"></i>

                <h3 class="mb-3">PROJECTS</h3>
                <p class="mb-0 textServices">10 +</p>
              </div>
            </div>
          </div>
        </div>
        {/* ROW END */}
      </div>
    </section>
  );
}
