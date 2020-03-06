import React, { Component } from "react";
import "./gallery.css";
import Filter from "../../components/filter/filter";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/card/card";
import { Button, Modal } from "react-bootstrap";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection_selected:""
    };
  }

  /*   async componentDidMount() {
     return(
         <div className="gallery_CardsContainer">
       {this.props.image.map((image,index) => (
         (index>0 && index<4)?
            <Card image={this.props.image.filter(obj=> obj.product_product_id == index)}
            product={this.props.product.filter(obj1=>obj1.product_id==index)} />:""
          ))}  
      
    </div> )
  } */



  render() {
    return (
      <div className="gallery">
        <Header class="hello" />
        <div className="gallery_filter">
          <Filter
            collection={this.props.collection}
            category={this.props.category}
            handle_collection={this.props.handle_collection}
            handle_category={this.props.handle_category}
            product={this.props.product}
            initialproduct={this.props.initialproduct}

          />
        </div>
        <div className="gallery_CardsContainer">
          {this.props.product.map((image, index) => (
            <Card
              image={this.props.image.filter(
                obj => obj.product_product_id == image.product_id
              )}
              product={image}
              category={this.props.category}
              collection={this.props.collection}
              purchase={this.props.purchase}
            />
          ))}
        </div>
        <div className="galleryButtonMore">
          {this.state.flag == 0 ? (
            <Button className="More" variant="outline-secondary">
              <strong>More</strong>
            </Button>
          ) : (
            ""
          )}
        </div>
        <Footer />
      </div>
    );
  }
}
export default Gallery;
