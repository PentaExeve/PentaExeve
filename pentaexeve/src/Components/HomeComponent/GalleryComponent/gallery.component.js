import React, { useState, useEffect } from "react";
import $ from "jquery";
import axios from "axios";

import "./gallery.css";


export default function GalleryComponent() {
  $(function () {
    var selectedClass = "";
    $(".filter").click(function () {
      selectedClass = $(this).attr("data-rel");
      $("#gallery").fadeTo(100, 0.1);
      $("#gallery div")
        .not("." + selectedClass)
        .fadeOut()
        .removeClass("animation");
      setTimeout(function () {
        $("." + selectedClass)
          .fadeIn()
          .addClass("animation");
        $("#gallery").fadeTo(300, 1);
      }, 300);
    });
  });

  const [gallary, setgallary] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/gallary")
      .then((res) => {
        //console.log(res.data);
        setgallary(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section id="gallary">
      <div style={{ margin: "20px" }}>
        {/* <!-- Grid row --> */}
        <div class="row">
          {/* <!-- Grid column --> */}
          <div class="col-md-12 d-flex justify-content-center mb-5">
            <div className="row text-center">
              <div className="col-md-3 col-sm-6">
                <button
                  type="button"
                  class="btn btn-outline-warning waves-effect filter GallaryBtn"
                  data-rel="all"
                >
                  All
                </button>
              </div>
              <div className="col-md-3 col-sm-6">
                <button
                  type="button"
                  class="btn btn-outline-warning waves-effect filter GallaryBtn"
                  data-rel="1"
                >
                  Wedding
                </button>
              </div>
              <div className="col-md-3 col-sm-6">
                <button
                  type="button"
                  class="btn btn-outline-warning waves-effect filter GallaryBtn"
                  data-rel="2"
                >
                  Birthday
                </button>
              </div>
              <div className="col-md-3 col-sm-6">
                <button
                  type="button"
                  class="btn btn-outline-warning waves-effect filter GallaryBtn"
                  data-rel="3"
                >
                  Commercial
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!-- Grid row --> */}
        {/* <!-- Grid row --> */}
        <div class="gallery" id="gallery">
          {/* <!-- Grid column --> */}
          {gallary.map((img) => {
            return (
              <div class={"mb-3 pics animation all  " + img.category}>
                <img
                  class="img-fluid"
                  src={img.imgUrl}
                  alt="Senura Jayadeva - Event"
                />
              </div>
            );
          })}
          {/* <!--End of Image Grid column --> */}
        </div>

        {/* <!-- Grid row --> */}
      </div>
    </section>
  );
}
