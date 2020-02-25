import React, { Component } from "react";
import "/home/oussama/Desktop/Sequins-and-Beads-new-/front/src/pages/gallery/gallery.css";
import Filter from "../../components/filter/filter";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import Card from "./editCard";
import { Button, Modal } from "react-bootstrap";

function editProduct(props) {
  return (
    <div className="gallery">
      <div className="gallery_filter">
        <Filter />
      </div>
      <div className="gallery_CardsContainer">
        <Card />
      </div>
      <div className="galleryButtonMore">
        <Button className="More" variant="outline-secondary">
          <strong>More</strong>
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default editProduct;
