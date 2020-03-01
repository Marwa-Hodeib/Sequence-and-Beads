import React, { Component } from "react";
import Header from "../../components/header/header";
import Collection from "../../components/collection/collection";
import Slider from "../../components/Slider/slider";
import Footer from "../../components/Footer/Footer";
import Logo from "../../assets/social_media_icon/logo_1.png";
import { NavLink } from 'react-router-dom';

import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: 0,
      collection: [],
      product: [],
      image: []
    };
  }
  handlestate() {
    if (
      this.props.collection.length != 0 &&
      this.props.product.length != 0 &&
      this.props.image.length != 0
    ) {
      this.setState({
        flag: 1,
        collection: this.props.collection,
        product: this.props.product,
        image: this.props.image
      });
    }
  }

  async componentDidMount() {
    await this.handlestate();
  }

  render() {
    return (
      <div className="home_div">
        <Slider />
        <Header value="first" />
        <img src={Logo} id="home_logo_abs" />
        <h1 className="slogan">A style for every story</h1>
        <NavLink to="/gallery">
          <Collection
            collection={this.state.flag == 1 ? this.state.collection : ""}
            product={this.state.flag == 1 ? this.state.product : ""}
            image={this.state.flag == 1 ? this.state.image : ""}
          />
        </NavLink>
        
        <Footer />
      </div>
    );
  }
}
export default Home;
