import React, {Component} from "react";
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import should from 'should';
import Auth from '../../modules/Auth';
import {withRouter} from 'react-router-dom';

class Login extends Component {
  constructor(props, context) {
    super(props, context);
    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }

    // set the initial component state
    this.state = {
      errors: {},
      successMessage,
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
     * Process the form.
     *
     * @param {object} event - the JavaScript event object
     */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', 'api/authentication/login');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success
        console.log("success", xhr);

        // change the component-container state
        this.setState({errors: {}});

        // save the token
        Auth.authenticateUser(xhr.response.token);
        this.props.history.push("/inbox");


        // change the current URL to /
        // this.context.router.replace('/');
      } else {
        // failure

        // change the component state
        const errors = xhr.response.errors
          ? xhr.response.errors
          : {};
        errors.summary = xhr.response.message;

        this.setState({errors});
      }
    });
    console.log(formData)
    console.log(xhr.response)
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

    this.setState({user});
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg mb-4 top-bar navbar-static-top sps sps--abv">
          <div className="container">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse1" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>
            <a className="navbar-brand mx-auto" href="/"><img className="logo" src="img/tux_blue.png"/>Review<span>Butler</span>
            </a>
            <div className="collapse navbar-collapse" id="navbarCollapse1">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/#benefits">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#contact">Team</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/signup">Sign Up</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/login">Log In<span className="sr-only">(current)</span>
                  </a>
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
              <div className="col-sm-10 col-md-6 col-lg-4 gradient">
                <Form
                  onSubmit={this.processForm}
                  onChange={this.changeUser}
                  errors={this.state.errors}
                  // successMessage={this.state.successMessage}
                  user={this.state.user}
                  action="/login">
                  <FormGroup>
                    <Label for="userEmail">Email</Label>
                    <Input className="form-control input-lg" type="email" name="email" id="login-email" placeholder="your@emailaddress.com"/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="userPassword">Password</Label>
                    <Input className="form-control input-lg" type="password" name="password" id="login-password" placeholder="password"/>
                  </FormGroup>
                  <Button className="btn btn-lg btn-primary btn-block signup-btn" id="login-submit">Login</Button>
                </Form>
                {/* <form action="/login" method="post" acceptCharset="utf-8" className="form" role="form">
                  <legend>Login</legend>
                  <br/>
                  <input type="text" name="email" className="form-control input-lg" placeholder="Your Email" id="login-email"/>
                  <br/>
                  <input type="password" name="password" className="form-control input-lg" placeholder="Password" id="login-password"/>
                  <br/>
                  <button className="btn btn-lg btn-primary btn-block signup-btn" type="submit" id="login-submit">
                    Login</button>
                </form> */}
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

export default Login;
