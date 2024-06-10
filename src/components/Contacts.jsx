import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactInfo from "./ContactInfo";

const Contacts = (props) => {
  return (
    <div>
      {props.contactUsers.map((user) => {
        return (
          <ContactInfo
            key={user.id}
            details={user}
            editContact={props.editContact}
            deleteContact={props.deleteContact}
          />
        );
      })}
    </div>
  );
};

export default Contacts;
