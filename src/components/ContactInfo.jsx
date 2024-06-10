import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";

const ContactInfo = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState(props.details.name);
  const [phoneNumber, setPhoneNumber] = useState(props.details.phoneNumber);
  const [location, setLocation] = useState(props.details.location);

  const handleModalState = () => {
    setShowModal(!showModal);
  };

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
  };

  const handleEdit = () => {
    let editDetails = {
      name: name,
      phoneNumber: phoneNumber,
      location: location,
    };

    let mergeDetails = { ...props.details, ...editDetails };
    props.editContact(props.details.id, mergeDetails);
    handleModalState();
  };
  return (
    <Container>
      <Row className="border border-primary my-1 py-1">
        <Col>
          <h6>Name: {props.details.name}</h6>
          <h6>Phone Number: &#43;{props.details.phoneNumber}</h6>
          <h6>Location: {props.details.location}</h6>

          <Button onClick={handleModalState} variant="primary">
            Edit
          </Button>
          <Button
            onClick={() => props.deleteContact(props.details.id)}
            variant="danger"
          >
            Delete
          </Button>

          <Modal show={showModal} onHide={handleModalState}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    // className="w-50"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Enter your full name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    // className="w-50"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    type="number"
                    placeholder="Enter Your Phone Number"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    // className="w-50"
                    type="text"
                    value={location}
                    onChange={handleLocationChange}
                    placeholder="Enter Your Location"
                  />
                </Form.Group>

                {/* <Button variant="primary" type="submit">
                  Submit
                </Button> */}
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleModalState}>
                Close
              </Button>
              <Button onClick={handleEdit} variant="primary">
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactInfo;
