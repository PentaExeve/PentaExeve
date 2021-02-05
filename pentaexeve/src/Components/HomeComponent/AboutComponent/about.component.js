import React from "react";

export default function AboutComponent() {
  return (
    <div>
      <section
        id="about"
        // class="bg-primary"
        style={{ background: "var(--gold)" }}
      >
        <div class="container">
          <div class="row">
            <div class="col offset-lg-8 mx-auto text-center">
              <h2 class="text-white section-heading">ABOUT COMPANY</h2>
              <hr class="light my-4" />
              <p class="text-faded mb-4">
                We are a Tech-Startup based in Sri Lanka comprising of young
                Tech-Enthusiasts with amazing skills. Our motivation and passion
                is driven at the sight of our satisfied customers, and on how
                much of an impact we can make to make this world a better place,
                as we are the generation that is just stepping in to the
                drivers' seat.
              </p>
              <a
                class="btn btn-light btn-xl js-scroll-trigger"
                role="button"
                href="#services"
              >
                Get Started!
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
