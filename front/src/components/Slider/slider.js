import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from "../../assets/images/image6-1.jpg";
import Image2 from "../../assets/images/image6-2.jpg";
import Image3 from "../../assets/images/image2-1.jpeg";
import Image4 from "../../assets/images/image4-1.jpg";
import Image5 from "../../assets/images/image4-2.jpg";
import "../../App.css"
import "./slider.css"
class Slider extends Component{
  constructor() {
    super();
    this.state = {
      list1:[Image1,Image4],
    }
  }
  render(){
    return(
    <>
     <Carousel interval={2500} pauseOnHover={false} touch={false} indicators={false} wrap={true} animation={false} pauseOnVisibility={false}>

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