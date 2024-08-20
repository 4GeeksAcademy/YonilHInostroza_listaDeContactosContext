import React, { useState, useContext, useEffect } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { Context } from "../store/appContext.js";

const AddContactForm = ({ onClose, contact }) => {
    const { actions } = useContext(Context);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    // Cargar los datos del contacto si `contact` está presente
    useEffect(() => {
        if (contact) {
            setName(contact.name);
            setAddress(contact.address);
            setPhone(contact.phone);
            setEmail(contact.email);
        } else {
            setName("");
            setAddress("");
            setPhone("");
            setEmail("");
        }
    }, [contact]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = { name, address, phone, email };
        if (contact) {
            // Editar contacto existente
            actions.updateContact({ ...contact, ...newContact });
        } else {
            // Agregar nuevo contacto
            actions.addContact(newContact);
        }
        onClose();
    };

    return (
        <Container>
            <Row className="justify-content-center mt-4">
                <Col xs={12} md={6}>
                    <h3 className="mb-4">Add a new contact</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Save
                        </Button>
                        <Button variant="link" onClick={onClose} className="ml-2">
                            Or get back to contacts
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddContactForm;
