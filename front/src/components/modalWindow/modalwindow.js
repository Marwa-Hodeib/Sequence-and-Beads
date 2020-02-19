import React from "react";
import "./modalWindow.css";
import image1 from "./img/cat-cloning_resize_md.jpg";
import image2 from "./img/220px-White_Persian_Cat.jpg";
import image3 from "./img/img1.jpg";
import { Button, InputGroup } from "react-bootstrap";
export class modalWindow extends React.Component {
  state = {
    showPrice: true,
    imgSrc: image1
  };

  handleMouseOver = event => {
    console.log("hello");
    this.setState({
      imgSrc: event.target.src
    });
    console.log(this.state.imgSrc);
  };
  render() {
    return (
      <div className="modalWindow">
        <div className="modalWindow_container1">
          <div className="mainImgContainer">
            <img src={this.state.imgSrc} className="modalWindow_mainImg" />
            <div className="modalWindow_miniImgContainer">
              <img
                className="modalWindow_miniImg"
                src={image1}
                onMouseOver={this.handleMouseOver}
              />
              <img
                className="modalWindow_miniImg"
                src={image2}
                onMouseOver={this.handleMouseOver}
              />
              <img
                className="modalWindow_miniImg"
                src={image3}
                onMouseOver={this.handleMouseOver}
              />
            </div>
          </div>
        </div>

        <div className="modalWindow_container2">
          <table>
            <tr>
              <th>Name: </th>
              <td>item1</td>
            </tr>
            <tr>
              <th>Description: </th>
              <td>good....</td>
            </tr>
            <tr>
              <th>Quantity: </th>
              <td>12</td>
            </tr>
            <tr>
              <th>Category: </th>
              <td>aaa</td>
            </tr>
            <tr>
              <th>Collection: </th>
              <td>bbb</td>
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
              onClick={() => this.setState({ shown: !this.state.shown })}
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
              <strong>50$</strong>
            </p>
          </InputGroup.Append>
          <InputGroup.Append class="modalWindow_purshase">
            <Button class="modalWindow_purshase" variant="success">
              <strong>Purshase</strong>
            </Button>
          </InputGroup.Append>
        </div>
      </div>
    );
  }
}
export default modalWindow;
