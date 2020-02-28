import React from "react";
import "./modalWindow.css";
import Image1 from "../../assets/images/image1.jpg";
import { Button, InputGroup } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import Contact from "../../pages/contact_us /contact_us";
export class modalWindow extends React.Component {
  state = {
    showPrice: true,
    imgSrc: [],
    category: [],
    collection: [],
    imgSrc: "",
    flag: 0
  };

  handleMouseOver = event => {
    this.setState({
      imgSrc: event.target.src,
      flag: 1
    });
  };
  handleprops=()=>{
    this.props.purchase(this.props.product[0].product_id, this.props.product[0].product_price);
  }
  async componentDidMount(){
     this.setState({
       category:this.props.category.filter(obj=> obj.category_id == this.props.product[0].category_category_id),
       collection:this.props.collection.filter(obj=> obj.collection_id == this.props.product[0].collection_collection_id),
    })
  }
  render() {
    return (
      <div className="modalWindow">
        <div className="modalWindow_container1">
          <div className="mainImgContainer">
            <img
              src={
                this.state.flag == 0
                  ? require("../../assets/images/" +
                      this.props.image[0].image_name)
                  : this.state.imgSrc
              }
              className="modalWindow_mainImg"
            />
            <div className="modalWindow_miniImgContainer">
              {this.props.image.map((image, index) => (
                <img
                  className="modalWindow_miniImg"
                  src={require("../../assets/images/" + image.image_name)}
                  onMouseOver={this.handleMouseOver}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="modalWindow_container2">
          <table>
            <tr>
              <th>Name : </th>
              <td>{this.props.product[0].product_name}</td>
            </tr>
            <tr>
              <th>Description : </th>
              <td>{this.props.product[0].product_description}</td>
            </tr>
            <tr>
              <th>Category : </th>
              <td>
                {this.state.category.length != 0
                  ? this.state.category[0].category_name
                  : ""}
              </td>
            </tr>
            <tr>
              <th>Collection : </th>
              <td>
                {this.state.collection.length != 0
                  ? this.state.collection[0].collection_name
                  : ""}
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </table>
          <InputGroup.Append class="modalWindow_showPrice">
            <Button
              variant="warning"
              class={
                this.state.shown
                  ? "modalWindow_priceOff"
                  : "modalWindow_priceOn"
              }
              onClick={() => t font-family: 'Dancing Script',
    'Indie Flower',
    cursive;his.setState({ shown: !this.state.shown })}
            >
              <strong>Show Price</strong>
            </Button>
            <p
              class={
                this.state.shown
                  ? "modalWindow_price modalWindow_priceOn"
                  : "modalWindow_price modalWindow_priceOff"
              }
            >
              <strong>{this.props.product[0].product_price} LL</strong>
            </p>
          </InputGroup.Append>
          <InputGroup.Append class="modalWindow_purshase">
            <Button class="modalWindow_purshase" variant="success" onClick={()=>this.handleprops()} >
            <NavLink to="/contact">
            <strong>Purchase</strong>
              </NavLink>
            </Button>
          </InputGroup.Append>
        </div>
      </div>
    );
  }
}
export default modalWindow;
