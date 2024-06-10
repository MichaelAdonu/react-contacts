import { useState } from "react";
import Contacts from "./components/Contacts";
import ContactForm from "./components/ContactForm";
import { v4 as uuid } from "uuid";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [contactUsers, setContactusers] = useState([
    {
      name: "Mariama Seidu",
      phoneNumber: 233564874334,
      location: "Abelenkpe",
      id: uuid(),
    },
    {
      name: "Phobe Safo",
      phoneNumber: +233204746334,
      location: "Adenta",
      id: uuid(),
    },
    {
      name: "Eric Ampadu Ameyaw",
      phoneNumber: +233244746334,
      location: "Madina",
      id: uuid(),
    },
    {
      name: "Prince Emmanuel Aidoo",
      phoneNumber: +233547887334,
      location: "Santasi",
      id: uuid(),
    },
    {
      name: "Enam Okailey Tetteh-Quaye",
      phoneNumber: +233545887434,
      location: "Tema",
      id: uuid(),
    },
  ]);

  const handleAddContact = (newContact) => {
    setContactusers([...contactUsers, newContact]);
  };

  const editContact = (contactId, newContactDetails) => {
    let newArray = contactUsers.map((contact) => {
      if (contact.id === contactId) {
        return newContactDetails;
      } else {
        return contact;
      }
    });
    setContactusers(newArray);
  };

  const deleteContact = (contactId) => {
    let newArray = contactUsers.filter((contact) => contact.id !== contactId);
    setContactusers(newArray);
  };
  return (
    <Container>
      <Row>
        <Col>
          <ContactForm addContact={handleAddContact} />
        </Col>
        <Col>
          <Contacts
            editContact={editContact}
            deleteContact={deleteContact}
            contactUsers={contactUsers}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
