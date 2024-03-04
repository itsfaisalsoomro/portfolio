import React from "react";
// import img11 from "../../../src/assets/images/white-desk-work-study-aesthetics.jpg";
import img12 from "../../../src/assets/images/projects/logoprimary.png";
import img13 from "../../../src/assets/images/projects/tutifyonline.png";
import img14 from "../../../src/assets/images/projects/true-agency-9Bjog5FZ-oc-unsplash.jpg";

function index() {
  return (
    <>
      <section className="projects section-padding" id="project">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-12 ms-auto">
              <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4">
                {/* <img src={img11} className="avatar-image img-fluid" alt="" /> */}

                <h2 className="text-white ms-4 mb-0">Projects</h2>
              </div>
            </div>

            <div className="clearfix"></div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="projects-thumb">
                <div className="projects-info">
                  <small className="projects-tag">WordPress</small>

                  <h3 className="projects-title">Logo Primary</h3>
                </div>

                <a href="/" className="popup-image">
                  <img
                    src={img12}
                    className="projects-image img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="projects-thumb">
                <div className="projects-info">
                  <small className="projects-tag">Web App</small>

                  <h3 className="projects-title">Tutify Online</h3>
                </div>

                <a href="/" className="popup-image">
                  <img
                    src={img13}
                    className="projects-image img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="projects-thumb">
                <div className="projects-info">
                  <small className="projects-tag">Website</small>

                  <h3 className="projects-title">Polo</h3>
                </div>

                <a href="/" className="popup-image">
                  <img
                    src={img14}
                    className="projects-image img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
