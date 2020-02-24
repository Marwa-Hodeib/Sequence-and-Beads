import React,{Component} from "react";
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
        <Filter />
      </div>
      <div className="gallery_CardsContainer">
       {this.props.image.map((image,index) => (
         (index>0 && index<7)?
            <Card image={this.props.image.filter(obj=> obj.product_product_id == index)}
            product={this.props.product.filter(obj1=>obj1.product_id==index)}
            category={this.props.category}
            collection={this.props.collection} />:""
          ))}  
      
      </div> 
      <div className="galleryButtonMore">
        {this.state.flag==0?
        <Button className="More" variant="outline-secondary">
        <strong>More</strong>
      </Button>:""}
        
      </div>
      <Footer />
    </div>
  );
}
}
export default Gallery;
