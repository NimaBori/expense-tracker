import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import categories from "../data/categories";
import { useGlobalContext } from "./context";
const allPaymentModes = [
  "Cash",
  "Debit card",
  "Credit card",
  "Bank transfer",
  "Voucher",
  "Mobile payment",
  "Web payment",
];

const AddRecord = () => {
  // const [modalShow, setModalShow] = useState(false);
  const { transactions, handleAddTransaction } = useGlobalContext();

  const [show, setShow] = useState(false);
  const [paymentType, setPaymentType] = useState("expense");
  const [paymentMode, setPaymentMode] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());
  // const [time, setTime] = useState(new Date().toLocaleTimeString());
  // const [time, setTime] = useState();
  // new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  const [selectedTime, setSelectedTime] = useState("");
  const times = [];
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    // Get the current time
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();

    // Round the minutes up to the nearest 15-minute increment
    let roundedMinutes = Math.ceil(minute / 15) * 15;
    if (roundedMinutes === 60) {
      roundedMinutes = 0;
      hour += 1;
    }

    // Format the current time as a string in the desired format
    let formattedTime = `${hour < 10 ? `0${hour}` : hour}:${
      roundedMinutes < 10 ? `0${roundedMinutes}` : roundedMinutes
    }`;

    setSelectedTime(formattedTime);
  }, []);

  // Generate an array of times in 15-minute increments
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 4; j++) {
      let hour = i < 10 ? `0${i}` : i;
      let minute = j === 0 ? "00" : j * 15;
      let time = `${hour}:${minute}`;
      times.push(time);
    }
  }

  // set current date
  useEffect(() => {
    setDate(new Date());
  }, []);

  const handleCloseSave = (btn) => {
    btn === "yes" ? setShow(false) : setShow(true);
    console.log(paymentType, date, selectedTime, category, status, note);
    if (amount && category && selectedTime && date) {
      handleAddTransaction({
        no: parseInt(transactions.length + 1),
        type: paymentType,
        paymentMode,
        amount:
          paymentType === "expense" ? parseInt(-amount) : parseInt(amount),
        currency: "PHP",
        category,
        date: date.toISOString().slice(0, 10),
        time: selectedTime,
        note,
        status,
      });
      setAmount("");
      setDate(new Date());
      setCategory("");
    } else {
      alert("fill all required boxes!");
      setShow(true);
    }
  };

  return (
    <>
      <span onClick={() => setShow(true)}>+ Record</span>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Records</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Button
              active={paymentType === "expense" ? true : false}
              onClick={() => setPaymentType("expense")}
            >
              Expense
            </Button>
            <Button
              active={paymentType === "expense" ? false : true}
              onClick={() => setPaymentType("income")}
            >
              Income
            </Button>
          </Container>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Amount</Form.Label>
              <span>{paymentType === "expense" ? "- " : "+ "}</span>
              <Form.Control
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0"
                autoFocus
              />
              <span>PHP</span>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label for="category">Category</Form.Label>
              {/* <Form.Control type="" rows={3} /> */}
              <select
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat, index) => (
                  <option disabled={cat.disabled} key={index} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={date.toISOString().slice(0, 10)}
                onChange={(e) => setDate(new Date(e.target.value))}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Time</Form.Label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                {times.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {/* <Form.Control
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              /> */}
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label for="status">Payment Status</Form.Label>
              <select
                id="status"
                name="status"
                value={paymentMode}
                onChange={(e) => setPaymentMode(e.target.value)}
              >
                <option value="Cleared">Cleared</option>
                <option value="Uncleared">Uncleared</option>
              </select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label for="status">Payment Type</Form.Label>
              <select
                id="status"
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                {allPaymentModes.map((mode, index) => (
                  <option key={index} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Note</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => handleCloseSave("yes")}>
            Add Record
          </Button>
          <Button variant="primary" onClick={() => handleCloseSave("no")}>
            Add & Create Another
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddRecord;
