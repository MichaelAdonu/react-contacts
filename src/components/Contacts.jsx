import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Contacts = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>Full Name</h2>
          </Col>
          <Col>
            <h2>Contact</h2>
          </Col>
          <Col>
            {" "}
            <h2>Location</h2>
          </Col>
        </Row>
      </Container>
      {props.contactUsers.map((user) => {
        return (
          <Container key={user.id}>
            <Row className="border border-primary my-1 py-1">
              <Col>
                <h3>{user.name}</h3>
              </Col>
              <Col>
                <h3>&#43;{user.phoneNumber}</h3>
              </Col>
              <Col>
                <h3>{user.location}</h3>
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
  );
};

export default Contacts;
