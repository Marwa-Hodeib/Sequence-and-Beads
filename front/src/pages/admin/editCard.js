import React, { useState } from "react";
import "../../components/card/card.css";
import Image1 from "./img/Thinking-of-getting-a-cat.png";
import { Modal, Button } from "react-bootstrap";
import ModalWindow from "./editModalwindow";

function Card(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="card">
      <div class="card_col1">
        <img alt="card item" class="card_col_image" src={Image1} />
        <div class="card_col_div">
          <div class="card_col_div_text">
            <Button
              class="Description"
              variant="outline-light"
              onClick={() => setShow(true)}
            >
              <strong>Edit</strong>
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
