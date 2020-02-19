import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css";
import Logo from "../../assets/social_media_icon/logo_1.png";
import {Button,FormControl, Form} from 'react-bootstrap';



function Header(){

    return(
    <>
    <div className="header_div" id="">
        <div className="header_div_link">
          {/* <a><img src={Logo} id="header_div_logo"/></a> */}
          <a><span><NavLink to="/" className="header_navlink">Home</NavLink></span></a>
          <a><span><NavLink to="/gallery" className="header_navlink">Gallery</NavLink></span></a>
          <a><span><NavLink to="/about" className="header_navlink">About</NavLink></span></a>
          <a><span><NavLink to="/contact" className="header_navlink">Contact us</NavLink></span></a>
        </div>
        <div className="header_search">
          <div>
          <FormControl type="text" placeholder="Search" size="sm"/>
          </div>
          <div>
          <Button variant="outline-secondary">Search</Button>
          
          </div>
      </div>
    </div>
    </>
    );
}
export default Header;