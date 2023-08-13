import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import "./VentanaModal.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function VentanaModal({ total, show, handleClose, cart }) {
  const newCart = cart;
  console.log(newCart);
  const navigate = useNavigate();
  const Alert = () => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: `Your purchase was successful`,
      showConfirmButton: false,
      timer: 2500,
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Button className="BtnClose" variant="white" onClick={handleClose}>
          X
        </Button>
        <Form className="ContendorForm">
          <Form.Group className="contNames">
            <Form.Group className="name" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group
              className="LastName"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
          </Form.Group>
          <Form.Group className="contendorDatosTarjeta">
            <Form.Group
              className="CreditCardNumber"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Credit Card Number</Form.Label>
              <Form.Control type="text" placeholder="5412-4555-4458-3215" />
            </Form.Group>
            <Form.Group
              className="CodeSegurity"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Code Segurity</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group
              className="Expiracion"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Ext Date</Form.Label>
              <Form.Control type="date" placeholder="0" />
            </Form.Group>
          </Form.Group>
        </Form>

        <Modal.Footer className="FooterModal">
          <Button onClick={Alert} variant="primary">
            PAY:$ {total}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default VentanaModal;
