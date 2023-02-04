import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import img1 from "../../data/images/SpendingbyCategories.jpg";
import img2 from "../../data/images/Expenses-Structure.jpg";

const EmptyCard = ({ handleAddCards }) => {
  const [modalShow, setModalShow] = useState(false);
  const cards = [
    {
      component: "SpendingByCatergories",
      name: "Spending by Categories",
      img: img1,
    },
    {
      component: "ExpensesStructure",
      name: "Expenses Structure",
      img: img2,
    },
  ];

  function MydModalWithGrid(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="bg-success">
          <Modal.Title id="contained-modal-title-vcenter">ADD CARD</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={8}>
                {cards.map((card, index) => (
                  <Container key={index}>
                    <h3>{card.name}</h3>
                    <div onClick={() => handleAddCards(card.component)}>
                      <img src={card.img} style={{ width: "20rem" }} />
                    </div>
                  </Container>
                ))}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <Container className="border text-center">
      <Button variant="primary" onClick={() => setModalShow(true)}>
        ADD A CARD
      </Button>
      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
};

export default EmptyCard;
