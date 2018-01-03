import React, { Component } from "react";
import {Button, Form, FormGroup, Label, Input, Col, Row, Container} from 'reactstrap';
import Sidebar from "../../components/Sidebar";
import "./Settings.css";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      phone: '',
      occupation: '',
      password: ''
    };
  };

  render() {
    return (
      <div>
        <Sidebar />
        <div className="settings-container full-height settings-detail">
          <div className="flex-row">
            <section className="signup-sec parallax-section">
              <Container>
                <Row>
                  <Col lg="auto">
                    <Form
                      onSubmit={this.processForm}
                      onChange={this.changeUser}
                      errors={this.state.errors}
                      // successMessage={this.state.successMessage}
                      user={this.state.user}
                      action="/login">
                      <FormGroup>
                        <Label for="displayName">Display Name</Label>
                        <Input className="form-control input-lg" type="email" name="name" id="login-email" placeholder=""/>
                      </FormGroup>
                      <FormGroup>
                        <Label for="userEmail">Email</Label>
                        <Input className="form-control input-lg" type="email" name="email" id="login-email" placeholder=""/>
                      </FormGroup>
                      <FormGroup>
                        <Label for="userPhone">Phone</Label>
                        <Input className="form-control input-lg" type="phone" name="password" id="login-password" placeholder=""/>
                      </FormGroup>
                      <FormGroup>
                        <Label for="occupation">Occupation</Label>
                        <Input className="form-control input-lg" type="text" name="password" id="login-password" placeholder=""/>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" />{' '}
                          Display occupation on responses
                        </Label>
                      </FormGroup>

                      <Form inline>
                        <FormGroup>
                          <Label for="userPassword">Change Password</Label>
                          <Input className="form-control input-lg" type="text" name="password" id="login-password" placeholder="Password"/>
                        </FormGroup>
                        <FormGroup>
                          <Label for="userPassword"> </Label>
                          <Input className="form-control input-lg" type="text" name="password" id="login-password" placeholder="Repeat Password"/>
                        </FormGroup>
                      </Form>

                      <Button className="btn btn-lg btn-primary btn-block signup-btn" id="submit">Save</Button>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </div>
      </div>
    );
  }
};

export default Settings;
 