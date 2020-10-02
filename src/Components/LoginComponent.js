import React, { Component } from "react";
import { Button, Jumbotron , Form, FormGroup, Label, Input, Col ,Card} from 'reactstrap'
import "../styles/Login.css";
import { Control,LocalForm,Errors } from 'react-redux-form'
import FooterComponent from "./FooterComponent";
 
 class Login extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        firstname: '',
        lastname: '',
        telnum: '',
        email: '',
        contactType: 'Tel.',
     }
        this.handleSubmit = this.handleSubmit.bind(this);
   }
   handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
}

handleSubmit(event) {
    console.log('Current State is: ' + JSON.stringify(this.state));
    alert('Current State is: ' + JSON.stringify(this.state));
    event.preventDefault();
}
   
  render() {
    return (
      <Jumbotron  className="container mt-5 pt-0 pr-0">
          <div className="row mt-5 ">
          <div className="col-12 mt-5">
              <Form onSubmit={this.handleSubmit} className="pt-0">
                  <FormGroup row className="pt-0">
                      <Label htmlFor="firstname" md={2}>First Name</Label>
                      <Col md={6}>
                          <Input type="text" id="firstname" name="firstname"
                              placeholder="First Name"
                              value={this.state.firstname}
                              onChange={this.handleInputChange} />
                      </Col>
                  </FormGroup>
                  <FormGroup row>
                      <Label htmlFor="lastname" md={2}>Last Name</Label>
                      <Col md={6}>
                          <Input type="text" id="lastname" name="lastname"
                              placeholder="Last Name"
                              value={this.state.lastname}
                              onChange={this.handleInputChange} />
                      </Col>                        
                  </FormGroup>
                  <FormGroup row>
                  <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                      <Col md={6}>
                          <Input type="tel" id="telnum" name="telnum"
                              placeholder="Tel. number"
                              value={this.state.telnum}
                              onChange={this.handleInputChange} />
                      </Col>
                  </FormGroup>
                  <FormGroup row>
                      <Label htmlFor="email" md={2}>Email</Label>
                      <Col md={6}>
                          <Input type="email" id="email" name="email"
                              placeholder="Email"
                              value={this.state.email}
                              onChange={this.handleInputChange} />
                      </Col>
                  </FormGroup>
                  <FormGroup row className="pb-0">
                      <Col md={{size: 10, offset: 2}}>
                          <Button type="submit" color="primary">
                              LOGIN
                          </Button>
                      </Col>
                  </FormGroup>
              </Form>
          </div>
      </div>
      </Jumbotron >
    )
  }
}

export default Login

