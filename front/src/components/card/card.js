import React, { useState } from "react";
import "./card.css";
import Image1 from "./img/img1.jpg";
import { Modal, Button } from "react-bootstrap";
import ModalWindow from "../modalWindow/modalwindow";
function Card(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="card">
      <div class="card_col1">
        <img src={Image1} alt="Mountains" class="card_col_image" />
        <div class="card_col_div">
          <div class="card_col_div_text">
            <Button
              class="Description"
              variant="outline-light"
              onClick={() => setShow(true)}
            >
              <strong>Description</strong>
            </Button>
          </div>
        </div>
      </div>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <strong>Item Description</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalWindow />
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default Card;
