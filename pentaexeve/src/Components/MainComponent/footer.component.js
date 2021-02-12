import React from "react";

import "../../App.css";

export default function FooterComponent() {
  return (
    <div>
      <section>
        <div className="container conatctForm">
          <h3 className="text-center">Send Us a Message</h3>
          <form>
            <label>Name :</label>
            <input
              type="text"
              class="form-control "
              placeholder="Enter Your Name"
              required
            />
            <label className="mt-2">Email :</label>
            <input
              type="email"
              class="form-control "
              placeholder="Enter Your Email"
              required
            />
            <label className="mt-2">Message :</label>
            <input
              type="text"
              class="form-control "
              placeholder="Enter Your Message"
              required
            />
            <button
              className="btn btn-primary mt-3 "
              style={{ width: "-webkit-fill-available" }}
            >
              Send
            </button>
          </form>
        </div>

        <div id="contact" class="container mt-5">
          <div class="row">
            <div class="col-md-8 mx-auto text-center">
              <h2 class="section-heading">Let's Get In Touch!</h2>
              <hr class="my-4" />
              <p class="mb-5">
                Ready to start your next project with us? That's great! Give us
                a call or send us an email and we will get back to you as soon
                as possible!
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 ml-auto text-center">
              <i
                class="fa fa-phone fa-3x mb-3 sr-contact"
                data-aos="zoom-in"
                data-aos-duration="300"
                data-aos-once="true"
              ></i>
              <p>
                <a href="tel:+94715787181">071-5787181 /</a>{" "}
                <a href="tel:+94779142664"> 077-9142664</a>
              </p>
            </div>
            <div class="col-md-4 mr-auto text-center">
              <i
                class="fa fa-envelope-o fa-3x mb-3 sr-contact"
                data-aos="zoom-in"
                data-aos-duration="300"
                data-aos-delay="300"
                data-aos-once="true"
              ></i>
              <p>
                <a href="mailto:your-email@your-domain.com">
                  pentaExeve@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
