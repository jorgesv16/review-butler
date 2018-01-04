import React, { Component } from "react";
import API from "../../utils/API";
//import router from "../../../routes/api/users";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import Sidebar from "../../components/Sidebar";

import "./Settings.css";

let wedata = '';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      user: {
        id: '',
        name: '',
        email: '',
        phone: '',
        occupation: '',
        occupationDisplay: false
      }
    };
    this.loadUser(this.state.user.id);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleOccupationChange = this.handleOccupationChange.bind(this);
    this.handleODisplayChange = this.handleODisplayChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  loadUser(id) {
    API.getUsers()
      .then(res =>
        this.setState({
          user: { 
            name: res.data[0].first_name,
            email: res.data[0].email,
            phone: res.data[0].phone
          }
        })
      )
      .catch(err => console.log(err));
  }


  handleNameChange(e) {
    this.setState({ user: {name: e.target.value} });
  }

  handleEmailChange(e) {
    console.log(this.state.user.email)
    this.setState({ user: {email: e.target.value } });
  }

  handlePhoneChange(e) {
    this.setState({ user: {phone: e.target.value } });
  }

  handleOccupationChange(e) {
    this.setState({ user: {occupation: e.target.value } });
  }

  handleODisplayChange(e) {
    if (this.state.user.occupationDisplay) {
      this.setState({ user: {occupationDisplay: false } });
    } else {
      this.setState({ user: {occupationDisplay: true } });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let displayName = this.state.user.displayName.trim();
    let email = this.state.user.email.trim();
    //if (!text || !author) {
    //   return;
    // }
    //this.props.onCommentSubmit({ author: author, text: text });
    //this.setState({ author: ‘’, text: ‘’ });
  }

  render() {
    return (
      <div className="flex-wrapper">
        <div className="columns">
          <Sidebar />
          <div className="full-height settings-detail">
            <h2>Settings</h2>
          <div className="col-md-8 offset-md-2 center-block">
                <div className="container" id="wrap">
                  <div className="row">
                    <div className="col blue-bg">
            <Form
              onSubmit={this.updateSettings}
              // onChange={this.changeSettings}
              errors={this.state.errors}
              // successMessage={this.state.successMessage}
              user={this.state.user}
              // action="/login"
            >
              <FormGroup>
                <Label>Display Name</Label>
                <Input
                  className="form-control input-lg"
                  type="text"
                  name="name"
                  value={ this.state.user.name }
                  onChange= { this.handleNameChange }
                />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  className="form-control input-lg"
                  type="email"
                  name="email"
                  value={ this.state.user.email }
                  onChange= { this.handleEmailChange }
                />

              </FormGroup>
              <FormGroup>
                <Label>Phone</Label>
                <Input
                  className="form-control input-lg"
                  type="phone"
                  name="phone"
                  value={ this.state.user.phone }
                  onChange= { this.handlePhoneChange }
                />
              </FormGroup>
              <FormGroup>
                <Label>Occupation</Label>
                <Input
                  className="form-control input-lg"
                  type="text"
                  name="occupation"
                  value={ this.state.user.occupation }
                  onChange= { this.handleOccupationChange }
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input 
                    type="checkbox" 
                    checked={this.state.user.occupationDisplay} 
                    onChange= { this.handleODisplayChange } 
                  /> 
                  Display occupation on responses
                </Label>
              </FormGroup>
              <Button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                Save
              </Button>
            </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
