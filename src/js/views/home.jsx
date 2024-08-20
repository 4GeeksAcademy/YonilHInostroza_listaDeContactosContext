import React, { useContext, useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import ContactCard from "../component/contactCard.jsx"; // Asegúrate de que la ruta sea correcta
import AddContactForm from "../component/AddContactForm.jsx"; // Asegúrate de que la ruta sea correcta
import { Context } from "../store/appContext.js";

const Home = () => {
    const { store, actions } = useContext(Context);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        actions.getData();
    }, []);

    const handleShowForm = () => setShowForm(true);
    const handleCloseForm = () => setShowForm(false);

    return (
        <Container>
            {showForm ? (
                <AddContactForm onClose={handleCloseForm} />
            ) : (
                <>
                    <Row>
                        <Col className="d-flex justify-content-end mb-2 mt-2">
                            <Button variant="success" onClick={handleShowForm}>
                                Add New Contact
                            </Button>
                        </Col>
                    </Row>
                    {store.contacts.map((contact) => (
                        <ContactCard
                            key={contact.id}
                            contact={contact}
                            onEdit={() => { /* Add edit logic here */ }}
                            onDelete={() => { /* Add delete logic here */ }}
                        />
                    ))}
                </>
            )}
        </Container>
    );
};

export default Home;
