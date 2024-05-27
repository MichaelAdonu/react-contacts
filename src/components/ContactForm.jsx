import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Container, Form, Button } from "react-bootstrap";

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 0 && phoneNumber.length > 0 && location.length > 0) {
      let newContact = {
        name: name,
        phoneNumber: phoneNumber,
        location: location,
        id: uuid(),
      };

      props.addContact(newContact);
      console.log(name, phoneNumber, location);
      setName("");
      setPhoneNumber("");
      setLocation("");
    }
  };

  return (
    <Container className="my-auto">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            className="w-50"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your full name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            className="w-50"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            type="number"
            placeholder="Enter Your Phone Number"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control
            className="w-50"
            type="text"
            value={location}
            onChange={handleLocationChange}
            placeholder="Enter Your Location"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
