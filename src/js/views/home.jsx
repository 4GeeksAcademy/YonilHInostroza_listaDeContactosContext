import React, { useContext, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import ContactCard from "../component/contactCard.jsx"; // Asegúrate de que la ruta sea correcta
import {Context} from "../store/appContext.js"

const Home = () => {
    const {store,actions}=useContext(Context);

    useEffect(()=>
		actions.getData()
		, []);

    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-end mb-2 mt-2">
                    <Button variant="success" >Add New Contact</Button>
                </Col>
            </Row>
            {store.contacts.map(contact => (
                <ContactCard
                    key={contact.id}
                    contact={contact}
                />
            ))}
        </Container>
    );
};

export default Home;
