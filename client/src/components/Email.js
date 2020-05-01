import React from 'react';
import emailjs from 'emailjs-com';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_Za8swj2qmYyYLpMargCfy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <Form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
        <FormGroup className="formName">
          <Label for="name">Name</Label>
          <Input
          type="text"
          name="user_name"
          id="name"
          placeholder="Your Name..."
          />
      </FormGroup>
      <FormGroup className="formGroup">
        <Label for="email">email</Label>
        <Input
        type="email"
        name="user_email"
        id="email"
        placeholder="Your email..."
        />
      </FormGroup>
      <FormGroup className="fromMessage">
        <Label for="message">Message</Label>
        <Input 
        type="textarea"
        name="message"
        id="message"
        placeholder="Your Message..."
        />
      </FormGroup>
      <Button type="submit" value="Send">Submit</Button>
    </Form>
  );
}

export default ContactUs;