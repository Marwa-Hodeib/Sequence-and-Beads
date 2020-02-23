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
      <Header class="hello" />
      <div className="gallery_filter">
        <Filter />
      </div>
    {console.log(props.test)}
      <div className="gallery_CardsContainer">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
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
export default Gallery;
