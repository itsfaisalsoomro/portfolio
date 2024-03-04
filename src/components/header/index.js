import React from "react";

function index() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" id="home">
        <div className="container px-2 pt-lg-0">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a href="#home" className="navbar-brand mx-auto mx-lg-0">
            Portfolio
          </a>

          <div className="d-flex align-items-center d-lg-none">
            <i className="navbar-icon bi-telephone-plus me-3"></i>
            <a className="custom-btn btn" href="tel: 03163647607">
              +92-316-3647607
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-lg-5">
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#services">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#project">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>

            <div className="d-lg-flex align-items-center d-none ms-auto">
              <i className="navbar-icon bi-telephone-plus me-3"></i>
              <a className="custom-btn btn" href="tel: 03163647607">
                +92-316-3647607
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default index;
