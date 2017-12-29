import React, {Component} from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg mb-4 top-bar navbar-static-top sps sps--abv">
          <div className="container">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse1" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <a className="navbar-brand mx-auto" href="#"><img className="logo" src="img/tux_blue.png" />Review<span>Butler</span></a>
            <div className="collapse navbar-collapse" id="navbarCollapse1">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"> <a className="nav-link" href="cover.html#benefits">Features</a> </li>
                <li className="nav-item"> <a className="nav-link" href="cover.html#about">About</a> </li>
                <li className="nav-item"> <a className="nav-link" href="cover.html#contact">Team</a> </li>
                <li className="nav-item"> <a className="nav-link" href="signup.html">Sign Up</a> </li>
                <li className="nav-item active"> <a className="nav-link" href="login.html">Log In<span className="sr-only">(current)</span></a> </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* About
    ================================================== */}
        <section className="signup-sec parallax-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-10 col-md-6 col-lg-4 gradient">
                <form action="r" method="post" acceptCharset="utf-8" className="form" role="form">
                  <legend>Login</legend>
                  <br />
                  <input type="text" name="email" defaultValue className="form-control input-lg" placeholder="Your Email" id="login-email" />
                  <br />
                  <input type="password" name="password" defaultValue className="form-control input-lg" placeholder="Password" id="login-password" />
                  <br />
                  <button className="btn btn-lg btn-primary btn-block signup-btn" type="submit" id="login-submit">
                    Login</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="action-sec">
          <div className="container">
            <div className="action-box text-center">
              <h2>GET STARTED FOR FREE</h2><a className="btn btn-success" href="#" target="_blank">Sign Up</a></div>
          </div>
        </section>
      </div>
    );
  }
};

export default Login;
