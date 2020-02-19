import React from "react";
import "./gallery.css";
import Filter from "../../components/filter/filter";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/card/card";
import { Button, Modal } from "react-bootstrap";

function Gallery(props) {
  return (
    <div className="gallery">
      <Header />
      <div class="gallery_filter">
        <Filter />
      </div>

      <div class="gallery_CardsContainer">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="galleryButtonMore">
        <Button class="More" variant="outline-success">
          More
        </Button>
      </div>
      <Footer />
    </div>
  );
}
export default Gallery;
