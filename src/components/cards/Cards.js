import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dashboard from "./Dashboard";
import BalanceTrend from "./BalanceTrend";
import EmptyCard from "./EmptyCard";
import SpendingByCatergories from "./SpendingByCatergories";
import ExpensesStructure from "./ExpensesStructure";
import CashFlow from "./CashFlow";
import LastRecords from "./LastRecords";

const Cards = () => {
  const [addCards, setAddCards] = useState(true);

  let initialCarts = [
    <Dashboard />,
    <CashFlow />,
    <ExpensesStructure />,
    <LastRecords />,
    // <EmptyCard handleAddCards={handleAddCards} />,
  ];
  const [cards, setCards] = useState([
    <Dashboard />,
    <CashFlow />,
    <ExpensesStructure />,
    <LastRecords />,
  ]);
  const [loading, setLoading] = useState(false);
  function handleAddCards(newCard, choiceNumber) {
    // let allTags = [];
    // cards.map((card) => allTags.push(card.type.name));
    // console.log(allTags);
    // if (choiceNumber == 2) {
    //   if (newCard === "SpendingByCatergories") {
    //     // initialCarts.splice(-1, <SpendingByCatergories />);
    //     // setCards(initialCarts);

    //     console.log(cards, "filter shoid");
    //   } else {
    //     initialCarts.splice(-1, 0, <BalanceTrend />);
    //     setCards(initialCarts);
    //   }
    // } else if (choiceNumber == 1) {
    //   if (newCard === "SpendingByCatergories") {
    //     initialCarts.splice(-1, 0, <BalanceTrend />, <SpendingByCatergories />);
    //     setCards(initialCarts);
    //   } else {
    //     initialCarts.splice(-1, 0, <SpendingByCatergories />, <BalanceTrend />);
    //     setCards(initialCarts);
    //   }
    // }
    // setCards(initialCarts);
    // setLoading(!loading);
    // setCards(initialCarts);
    // if (!allTags.includes(newCard)) {

    if (newCard === "SpendingByCatergories") {
      setCards([...cards, <SpendingByCatergories />]);
    } else if (newCard === "BalanceTrend") {
      setCards([...cards, <BalanceTrend />]);
      // console.log("omad to BalanceTrend! ", initialCarts);
    }

    // setNewTags([...newTags, newCard]);
    // console.log(newArray, "newarray");
    // const newArray = initialCarts.slice(0, initialCarts.length - 1);
    // setCards([
    //   ...newArray,
    //   <SpendingByCatergories />,
    //   initialCarts.slice(-1),
    // ]);
    // console.log("omad to spending! ", cards.length);

    // initialCarts.push(<SpendingByCatergories />);
    // const lastIndex = initialCarts.length - 1;
    // const temp = initialCarts[lastIndex];
    // initialCarts[lastIndex] = initialCarts[lastIndex - 1];
    // initialCarts[lastIndex - 1] = temp;

    // initialCarts.splice(
    //   initialCarts.length - 1,
    //   0,
    //   <SpendingByCatergories />
    // );

    // const newArray = [
    //   ...initialCarts.slice(0, initialCarts.length - 1),
    //   <SpendingByCatergories />,
    //   ...initialCarts.slice(-1),
    // ];

    // initialCarts.splice(initialCarts.length - 1, 0, <SpendingByCatergories />);

    // cards.splice(cards.length - 1, 0, <BalanceTrend />);
    // setNewTags([...newTags, newCard]);
    // initialCarts.push(<BalanceTrend />);

    // console.log("omad to trend! ", cards.length);

    // initialCarts.splice(initialCarts.length - 1, 0, <BalanceTrend />);

    // }
    // console.log(choiceNumber);
  }

  // useEffect(() => {
  //   console.log("EFFECT |", "cards: ", cards, "initial cards: ", initialCarts);
  //   <EmptyCard handleAddCards={handleAddCards} />;
  // }, [cards]);

  return (
    <Container className="text-center">
      <Row className="justify-content-center">
        {cards.map((card, index) => (
          <Col
            key={index}
            xs={12}
            md={8}
            lg={6}
            style={{ maxWidth: "" }}
            className="border"
          >
            {card}
          </Col>
        ))}
        <Col xs={12} md={8} lg={6} style={{ maxWidth: "" }} className="border">
          <EmptyCard handleAddCards={handleAddCards} active={addCards} />
        </Col>
        {/* <EmptyCard handleAddCards={handleAddCards} /> */}
      </Row>
    </Container>
  );
};

export default Cards;
