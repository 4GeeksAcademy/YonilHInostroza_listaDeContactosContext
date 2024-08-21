import React, { useContext, useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import ContactCard from "../component/contactCard.jsx";
import AddContactForm from "../component/AddContactForm.jsx";
import { Context } from "../store/appContext.js";

const Home = () => {
    const { store, actions } = useContext(Context);
    const [showForm, setShowForm] = useState(false);
    const [editContact, setEditContact] = useState(null);

    useEffect(() => {
        actions.getData();
    }, []);

    const handleShowForm = (contact = null) => {
        setEditContact(contact);
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setEditContact(null);
    };


    return (
        <Container>
            {showForm ? (
                <AddContactForm 
                    onClose={handleCloseForm}
                    contact={editContact} // Pasa el contacto a editar
                />
            ) : (
                <>
                    <Row>
                        <Col className="d-flex justify-content-end mb-2 mt-2">
                            <Button variant="success" onClick={() => handleShowForm()}>
                                Add New Contact
                            </Button>
                        </Col>
                    </Row>
                    {store.contacts.map((contact) => (
                        <ContactCard
                            key={contact.id}
                            contact={contact}
                            onEdit={() => handleShowForm(contact)} // Para editar el contacto
                            onDelete={actions.deleteContact}
                        />
                    ))}
                </>
            )}
        </Container>
    );
};

export default Home;
