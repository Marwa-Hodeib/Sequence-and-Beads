import React from "react";
import Header from "../../components/header/header";
import Collection from "../../components/collection/collection";
import Slider from "../../components/Slider/slider";
import Footer from "../../components/Footer/Footer";
import Logo from "../../assets/social_media_icon/logo_1.png";
import "./home.css";

export default function Home(){
    return (
      < div className="home_div">
      <Slider/>
      <Header value="first"/>
      <img src={Logo} id="home_logo_abs"/>
      <Collection />
      <Footer />
     
      </ div>
    );
  }