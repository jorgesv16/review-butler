import React, {Component} from "react";

class Signup extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg mb-4 top-bar navbar-static-top sps sps--abv">
          <div className="container">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse1" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>
            <a className="navbar-brand mx-auto" href="#"><img className="logo" src="img/tux_blue.png"/>Review<span>Butler</span>
            </a>
            <div className="collapse navbar-collapse" id="navbarCollapse1">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#myCarousel">Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#benefits">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#contact">Team</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/signup">Sign Up</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">Sign In</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* About
    ================================================== */}
        <section className="signup-sec parallax-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3 center-block">
                <div className="container" id="wrap">
                  <div className="row">
                    <div className="col gradient">
                      <form action="r" method="post" acceptCharset="utf-8" className="form" role="form">
                        <legend>Sign Up</legend>
                        <h4>It's free and always will be.</h4>
                        <br/>
                        <h5>Your details</h5>
                        <div className="row">
                          <div className="col-xs-6 col-md-6">
                            <input type="text" name="firstname" className="form-control input-lg" placeholder="First Name" id="signup-firstname"/>
                          </div>
                          <div className="col-xs-6 col-md-6">
                            <input type="text" name="lastname" className="form-control input-lg" placeholder="Last Name" id="signup-lastname"/>
                          </div>
                        </div>
                        <br/>
                        <input type="email" name="email" className="form-control input-lg" placeholder="Email" id="signup-email"/>
                        <br/>
                        <input type="tel" name="phone" className="form-control input-lg" placeholder="Phone" id="signup-phone"/>
                        <br/>
                        <br/>
                        <h5>Account details</h5>
                        <input type="text" name="username" className="form-control input-lg" placeholder="Username" id="signup-username"/>
                        <br/>
                        <input type="password" name="password" className="form-control input-lg" placeholder="Password" id="signup=password"/>
                        <br/>
                        <input type="password" name="confirm_password" className="form-control input-lg" placeholder="Confirm Password" id="signup-confirm_password"/>
                        <br/>
                        <span className="help-block">By clicking Create my account, you agree to our Terms and that you have read our Data Use Policy, including our Cookie Use.</span>
                        <button id="register-submit" className="btn btn-lg btn-primary btn-block signup-btn" type="submit">
                          Create my account</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="action-sec">
          <div className="container">
            <div className="action-box text-center">
              <h2>GET STARTED FOR FREE</h2>
              <a className="btn btn-success" href="#" target="_blank">Sign Up</a>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default Signup;
