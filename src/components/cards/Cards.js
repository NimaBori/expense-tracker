import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Dashboard from "./Dashboard";
import BalanceTrend from "./BalanceTrend";
import EmptyCard from "./EmptyCard";
import SpendingByCatergories from "./SpendingByCatergories";
import ExpensesStructure from "./ExpensesStructure";

const Cards = () => {
  const [cards, setCards] = useState([<Dashboard />, <BalanceTrend />]);

  const handleAddCards = (newCard) => {
    let allTags = [];
    // console.log(!cards.includes(<Dashboard />));
    cards.map((card) => allTags.push(card.type.name));
    if (!allTags.includes(newCard)) {
      if (newCard === "SpendingByCatergories") {
        setCards([...cards, <SpendingByCatergories />]);
      } else if (newCard === "ExpensesStructure") {
        setCards([...cards, <ExpensesStructure />]);
      }
    }
  };

  return (
    <Container>
      {cards.map((card, index) => (
        <React.Fragment key={index}>{card}</React.Fragment>
      ))}
      <EmptyCard handleAddCards={handleAddCards} />
    </Container>
  );
};

export default Cards;
