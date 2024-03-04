import React from "react";
// import img10 from "../../../src/assets/images/handshake-man-woman-after-signing-business-contract-closeup.jpg";
import { FaWordpressSimple } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { MdOutlineWeb } from "react-icons/md";
import { FaWix } from "react-icons/fa6";

function index() {
  return (
    <>
      <section className="services section-padding" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                {/* <img src={img10} className="avatar-image img-fluid" alt="" /> */}

                <h2 className="text-white ms-4 mb-0">Services</h2>
              </div>

              <div className="row pt-lg-5">
                <div className="col-lg-6 col-12">
                  <div className="services-thumb">
                    <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                      <h3 className="mb-0">WordPress</h3>

                      <div className="services-price-wrap ms-auto">
                        <p className="services-price-text mb-0">$200</p>
                        <div className="services-price-overlay"></div>
                      </div>
                    </div>

                    <p>
                      Discover WordPress for a vast selection of free themes and
                      plugins to build your ideal website easily.
                    </p>

                    <a
                      href="/"
                      className="custom-btn custom-border-btn btn mt-3"
                    >
                      Discover More
                    </a>

                    <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                      {/* <i className="services-icon bi-globe"></i> */}
                      <FaWordpressSimple style={{ fontSize: "100px" }} />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-12">
                  <div className="services-thumb services-thumb-up">
                    <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                      <h3 className="mb-0">Web App</h3>

                      <div className="services-price-wrap ms-auto">
                        <p className="services-price-text mb-0">$400</p>
                        <div className="services-price-overlay"></div>
                      </div>
                    </div>

                    <p>
                      Dive into React for a wide range of components and hooks,
                      enhancing your web development through efficient, reusable
                      code.
                    </p>

                    <a
                      href="/"
                      className="custom-btn custom-border-btn btn mt-3"
                    >
                      Discover More
                    </a>

                    <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                      {/* <i className="services-icon bi-lightbulb"></i> */}
                      <FaReact style={{ fontSize: "100px" }} />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-12 mt-3">
                  <div className="services-thumb">
                    <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                      <h3 className="mb-0">UI / UX</h3>

                      <div className="services-price-wrap ms-auto">
                        <p className="services-price-text mb-0">$300</p>
                        <div className="services-price-overlay"></div>
                      </div>
                    </div>

                    <p>
                      For expert UI/UX design that enhances your brand, let's
                      chat. Specializing in intuitive interfaces.
                    </p>

                    <a
                      href="/"
                      className="custom-btn custom-border-btn btn mt-3"
                    >
                      Discover More
                    </a>

                    <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                      {/* <i className="services-icon bi-phone"></i> */}
                      <MdOutlineWeb style={{ fontSize: "100px" }} />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-12 mt-3">
                  <div className="services-thumb services-thumb-up">
                    <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                      <h3 className="mb-0">Wix</h3>

                      <div className="services-price-wrap ms-auto">
                        <p className="services-price-text mb-0">$200</p>
                        <div className="services-price-overlay"></div>
                      </div>
                    </div>

                    <p>
                      Wix is a user-friendly platform that allows you to create
                      stunning websites with ease. Perfect for any project, it's
                      free and ideal for all.
                    </p>

                    <a
                      href="/"
                      className="custom-btn custom-border-btn btn mt-3"
                    >
                      Discover More
                    </a>

                    <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                      {/* <i className="services-icon bi-google"></i> */}
                      <FaWix style={{ fontSize: "100px" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
