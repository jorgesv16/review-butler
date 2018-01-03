import React, { Component } from "react";

class Cover extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg mb-4 top-bar navbar-static-top sps sps--abv">
          <div className="container">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse1"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <a className="navbar-brand mx-auto" href="#">
              <img className="logo" href="/" src="img/tux_blue.png" alt="tuxlogo" />Review<span>
                Butler
              </span>
            </a>
            <div className="collapse navbar-collapse" id="navbarCollapse1">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  {" "}
                  <a className="nav-link" href="#myCarousel">
                    Home <span className="sr-only">(current)</span>
                  </a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="#benefits">
                    Features
                  </a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="#about">
                    About
                  </a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="#contact">
                    Team
                  </a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="/signup">
                    Get Started
                  </a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="/login">
                    Sign In
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="swiper-container main-slider" id="myCarousel">
          <div className="swiper-wrapper">
            <div
              className="swiper-slide slider-bg-position" 
              style={{background: "url('img/hero1.jpg')"}}
              data-hash="slide1"
            >
              <h2>Respond To Online Reviews In Seconds</h2>
            </div>
            <div
              className="swiper-slide slider-bg-position" 
              style={{background: "url('img/hero2.jpg')"}}
              data-hash="slide2"
            >
              <h2>Instant smart response templates</h2>
            </div>
          </div>
          <div className="swiper-pagination" />
          <div className="swiper-button-prev">
            <i className="fa fa-chevron-left" />
          </div>
          <div className="swiper-button-next">
            <i className="fa fa-chevron-right" />
          </div>
        </div>
        <section className="service-sec" id="benefits">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="heading">
                  <h2>
                    <small>Why Use Review Butler?</small>Respond to reviews
                    fast, so you can focus on what you do best
                  </h2>
                </div>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-6 text-sm-center service-block">
                    {" "}
                    <i className="fa fa-plus" aria-hidden="true" />
                    <h3>Smart Alerts</h3>
                    <p>Get notified when you have new reviews that attention</p>
                  </div>
                  <div className="col-md-6 text-sm-center service-block">
                    {" "}
                    <i className="fa fa-leaf" aria-hidden="true" />
                    <h3>Smart Responses</h3>
                    <p>
                      Responses automatically generated so you can reply in
                      record time
                    </p>
                  </div>
                  <div className="col-md-6 text-sm-center service-block">
                    {" "}
                    <i className="fa fa-leaf" aria-hidden="true" />
                    <h3>Feature 3</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce tortor ante, auctor nec nunc quis.
                    </p>
                  </div>
                  <div className="col-md-6 text-sm-center service-block">
                    {" "}
                    <i className="fa fa-bell" aria-hidden="true" />
                    <h3>Feature 4</h3>
                    <p>
                      {" "}
                      Sed pharetra purus ipsum, ut sagittis orci venenatis nec.
                      Suspendisse potenti. Ut egestas ullamcorper tristique.
                      Cras nec enim et leo bibendum tempus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                {" "}
                <img src="img/feature1.jpg" className="img-fluid" alt="featureimage" />{" "}
              </div>
            </div>
          </div>
        </section>
        <section className="about-sec parallax-section" id="about">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h2>
                  <small>Who We Are</small>About<br />Our Team
                </h2>
              </div>
              <div className="col-md-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  tortor ante, auctor nec nunc quis, fermentum molestie justo.
                  Fusce aliquet, velit quis blandit volutpat, felis nisl commodo
                  ipsum, a condimentum turpis est sollicitudin justo.
                </p>
                <p>
                  Phasellus at odio tincidunt, maximus tellus a, sollicitudin
                  enim. Cras quis sollicitudin purus. Curabitur metus leo,
                  pulvinar non turpis sed, ultricies ultrices urna. Suspendisse
                  potenti. Phasellus odio erat, vehicula tempor porttitor quis,
                  hendrerit nec orci. Morbi convallis ipsum ac neque aliquam, et
                  hendrerit nunc tristique
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  ed id mi sed nisl faucibus luctus. Aliquam tristique sapien et
                  odio semper, ut dapibus augue vehicula. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Sed pharetra purus ipsum,
                  ut sagittis orci venenatis nec. Suspendisse potenti. Ut
                  egestas ullamcorper tristique. Cras nec enim et leo bibendum
                  tempus. Suspendisse pretium sem a libero pellentesque cursus.
                </p>
                <p>
                  Curabitur metus leo, pulvinar non turpis sed, ultricies
                  ultrices urna. Suspendisse potenti. Phasellus odio erat,
                  vehicula tempor porttitor quis, hendrerit nec orci. Morbi
                  convallis ipsum ac neque aliquam, et hendrerit nunc tristique
                </p>
                <p>
                  <a href="#" className="btn btn-transparent-white btn-capsul">
                    Explore More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="action-sec">
          <div className="container">
            <div className="action-box text-center">
              <h2>Reviewing Made Easy</h2>
              <a className="btn btn-success" href="#" target="_blank">
                Get Started
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Cover;
