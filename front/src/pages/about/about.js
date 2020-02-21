import React, {Component} from "react";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import AboutBox from "../../components/about-box/about-box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About () {
      return (
        <div>
          <Header/>
          <AboutBox/>
          <Footer/>
        </div>
        
      );
    }
    
export default About;
