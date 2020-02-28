import React, { useState } from "react";
import "./card.css";
import { Modal, Button } from "react-bootstrap";
import ModalWindow from "../modalWindow/modalwindow";

function Card(props) {
  const [show, setShow] = useState(false);

  return (
    <div className="card">
      <div class="card_col1">
        <div
          className="card_image"
          style={{
            backgroundImage: `URL("${
              props.image.length != 0
                ? require("../../assets/images/" + props.image[0].image_name)
                : ""
            }")`,
            height: "320px"
          }}
        ></div>
        {/* <img alt="card item" class="card_col_image" src={} /> */}
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
        <Modal.Header closeButton className="description_header">
          <Modal.Title id="example-modal-sizes-title-lg">
            <strong>Item Description</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalWindow
            image={props.image}
            product={props.product}
            category={props.category}
            collection={props.collection}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Card;
