import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import img1 from "../../data/images/SpendingbyCategories.jpg";
import img2 from "../../data/images/Expenses-Structure.jpg";

const EmptyCard = ({ handleAddCards }) => {
  const [modalShow, setModalShow] = useState(false);
  const [active, setActive] = useState(true);
  const [cards, setCards] = useState([
    {
      component: "SpendingByCatergories",
      name: "Spending by Categories",
      img: img1,
    },
    {
      component: "BalanceTrend",
      name: "Balance Trends",
      img: img2,
    },
  ]);

  function handleOnClick(card, i) {
    setCards(cards.filter((card, index) => index !== i));
    // console.log("length 2 bode shod: ", cards.length);
    // console.log(i);
    // console.log(cards.map((card) => card.name));
    cards.length === 1 && setModalShow(false);
    cards.length === 1 && setActive(false);
    handleAddCards(card, cards.length);
  }
  // useEffect(() => {
  //   handleOnClick();
  // }, [handleAddCards]);

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
          <Container className="">
            {cards.length > 0 &&
              cards.map((card, index) => (
                <Container key={index}>
                  <h3>{card.name}</h3>
                  <Container
                    onClick={() => handleOnClick(card.component, index)}
                  >
                    <img src={card.img} style={{ width: "20rem" }} />
                  </Container>
                </Container>
              ))}
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
      <Button
        variant="primary"
        style={active ? { display: "inline-block" } : { display: "none" }}
        onClick={() => setModalShow(true)}
      >
        ADD A CARD
      </Button>
      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
};

export default EmptyCard;
