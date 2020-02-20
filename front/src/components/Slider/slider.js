import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from "../../assets/images/image1.jpg";
import Image2 from "../../assets/images/image2.jpg";
import Image3 from "../../assets/images/image3.jpg";
import "../../App.css"
import "./slider.css"
class Slider extends Component{
  constructor() {
    super();
    this.state = {
      list1:[Image1,Image2,Image3],
    }
  }
  render(){
    return(
    <>
     <Carousel interval={2500} pauseOnHover={false} touch={true} indicators={false} wrap={true} animation={false} pauseOnVisibility={false}  prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}>

     {this.state.list1.map((task, index) => 
              <Carousel.Item>
                 <img
              src={task}
              alt="fff"
              className="slider_carousel_image"
            />
                </Carousel.Item>
             
           )}
        </Carousel>
    
   

    
   
    </>
    );
  }
}
export default Slider;