import React from "react";
import img05 from "../../../src/assets/images/clients/markematics.png";
import img06 from "../../../src/assets/images/clients/upwork.png";
import img07 from "../../../src/assets/images/clients/82solutions.png";
import img08 from "../../../src/assets/images/clients/webexperts.png";
import img09 from "../../../src/assets/images/clients/fiverr.png";

function index() {
  return (
    <>
      <section className="clients section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-12">
              <h3 className="text-center mb-5">Companies I've had worked</h3>
            </div>

            <div className="col-lg-2 col-4 ms-auto clients-item-height">
              <img src={img05} className="clients-image img-fluid" alt="" />
            </div>

            <div className="col-lg-2 col-4 clients-item-height">
              <img src={img06} className="clients-image img-fluid" alt="" />
            </div>

            <div className="col-lg-2 col-4 clients-item-height">
              <img src={img07} className="clients-image img-fluid" alt="" />
            </div>

            <div className="col-lg-2 col-4 clients-item-height">
              <img src={img08} className="clients-image img-fluid" alt="" />
            </div>

            <div className="col-lg-2 col-4 me-auto clients-item-height">
              <img src={img09} className="clients-image img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
