import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

class Contact extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      message: ''
    }

    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault()

    const { name, email, message } = this.state

    const form = await axios.post('/api/form', {
      name,
      email,
      message
    })
  }

  render() {
    return (
      <Form className="form" onSubmit={this.handleSubmit}>
        <FormGroup className="formName">
          <Label for="name">Name:</Label>
          <Input 
          type="text" 
          name="name" 
          id="name" 
          placeholder="Your Name..." 
          onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup className="formGroup">
          <Label for="email">email:</Label>
          <Input 
          type="email" 
          name="email" 
          id="email" 
          placeholder="Your email..." 
          onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup className="fromMessage">
        <Label for="message">Message:</Label>
          <Input 
          type="textarea" 
          name="message" 
          id="message" 
          placeholder="Your Message..." 
          onChange={this.handleChange}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default Contact;
