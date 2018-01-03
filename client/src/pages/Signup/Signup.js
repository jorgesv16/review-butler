import React, {Component} from "react";
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Login from "../../pages/Login";
import should from 'should';

class Signup extends Component {
constructor(props, context) {
  super(props, context);
  this.state = {
    errors: {},
    user: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      username: '',
      password: ''
    }
  };
  this.processForm = this.processForm.bind(this);
  this.changeUser = this.changeUser.bind(this);
}

  processForm(event) {
    event.preventDefault();
    const first_name = encodeURIComponent(this.state.user.first_name);
    const last_name = encodeURIComponent(this.state.user.last_name);
    const email = encodeURIComponent(this.state.user.email);
    const phone = encodeURIComponent(this.state.user.phone);
    const username = encodeURIComponent(this.state.user.username);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `first_name=${first_name}&last_name=${last_name}&email=${email}&phone=${phone}&username=${username}&password=${password}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/api/authentication/register');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        console.log("succesful POST request - New User has signed up")
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        // set a message
        localStorage.setItem('successMessage', xhr.response.message);
/*





NEED TO FIX THIS (redirect below)





*/
        // make a redirect
         // this.context.router.replace('/login');
         <Switch>
           <Redirect from='/signup' to='/login'/>
           <Route path='/login' component={Login}/>
         </Switch>

      } else {
        // failure

        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    console.log(formData)
    xhr.send(formData);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }


  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg mb-4 top-bar navbar-static-top sps sps--abv">
          <div className="container">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse1" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>
            <a className="navbar-brand mx-auto" href="/"><img className="logo" src="img/tux_blue.png" alt="bluetux"/>Review<span>Butler</span>
            </a>
            <div className="collapse navbar-collapse" id="navbarCollapse1">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home
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
                      <Form
                        onSubmit={this.processForm}
                        onChange={this.changeUser}
                        errors={this.state.errors}
                        user={this.state.user}
                        action="/register">
                        <legend>Sign Up</legend>
                        <h4>It's free and always will be.</h4>
                        <br/>
                        <h5>Your details</h5>
                        <div className="row">
                          <div className="col-xs-6 col-md-6">
                            <input type="text" name="first_name" className="form-control input-lg" placeholder="First Name" id="signup-firstname"/>
                          </div>
                          <div className="col-xs-6 col-md-6">
                            <input type="text" name="last_name" className="form-control input-lg" placeholder="Last Name" id="signup-lastname"/>
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

                        <Button id="register-submit" className="btn btn-lg btn-primary btn-block signup-btn" type="submit">
                          Create my account</Button>
                      </Form>
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
