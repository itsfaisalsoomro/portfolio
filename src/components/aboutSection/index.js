import React from "react";
import img03 from "../../../src/assets/images/couple-working-from-home-together-sofa.jpg";

function index() {
  return (
    <>
      <section className="about section-padding" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <img src={img03} className="about-image img-fluid" alt="" />
            </div>

            <div className="col-lg-6 col-12 mt-5 mt-lg-0">
              <div className="about-thumb">
                <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4">
                  <h2 className="text-white me-4 mb-0">About Me</h2>
                </div>

                <p>
                  Hello, I'm Faisal Soomro! I am an Expert Web and WordPress
                  Developer with an years of expertise. I specialize in crafting
                  dynamic websites using WordPress, Elementor, Contact Form 7,
                  Mailchimp, Amelia Booking, WooCommerce, Multilangual, and
                  WpForm. My portfolio includes diverse projects ranging from
                  educational to e-commerce websites. Additionally, I possess
                  skills in hosting, domain management, and cPanel. I excel in
                  enhancing site security, optimization, generating backups,
                  seamless migration from Local Machine to Cloud Servers, and
                  custom theme development using PHP. Let's collaborate to build
                  your unique digital presence together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
