import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const ContactCard = ({ contact, onEdit, onDelete }) => {
    return (
        <Card className="mb-2" style={{ padding: "8px" }}>
            <Card.Body className="p-2">
                <Row>
                    <Col xs={3} className="d-flex align-items-center">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrXFMfLD8Q6GaWnbwps7b7cejIIn_zojv6w&shttps://www.biografiasyvidas.com/biografia/z/fotos/zuckerberg.jpg"
                            alt="contact"
                            className="img-fluid rounded-circle"
                            style={{ width: "80px", height: "80px", objectFit: "cover" }}
                        />
                    </Col>
                    <Col xs={7} className="d-flex flex-column justify-content-center">
                        <h6 className="mb-1">{contact.name}</h6>
                        <p className="mb-1">{contact.address}</p>
                        <p className="mb-1">{contact.phone}</p>
                        <p className="mb-1">{contact.email}</p>
                    </Col>
                    <Col xs={2} className="d-flex justify-content-end align-items-start">
                        <FontAwesomeIcon
                            icon={faPen}
                            onClick={() => onEdit(contact)}
                            style={{ cursor: "pointer", marginRight: "20px" }} // Espacio a la derecha del ícono
                        />
                        <FontAwesomeIcon
                            icon={faTrash}
                            onClick={() => onDelete(contact)}
                            style={{ cursor: "pointer" }}
                        />
                    </Col>

                </Row>
            </Card.Body>
        </Card>
    );
};

export default ContactCard;
