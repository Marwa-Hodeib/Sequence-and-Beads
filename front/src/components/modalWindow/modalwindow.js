import React from "react";
import "./modalWindow.css";
import image from "./img/img1.jpg";
import { Button, InputGroup } from "react-bootstrap";
export class modalWindow extends React.Component {
  state = {
    showPrice: true
  };
  render() {
    return (
      <div className="modalWindow">
        <div className="modalWindow_container1">
          <img src={image} className="modalWindow_mainImg" />
          <div className="modalWindow_miniImgContainer">
            <img className="modalWindow_miniImg" src="" />
            <img className="modalWindow_miniImg" src="" />
            <img className="modalWindow_miniImg" src="" />
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
                  ? "modalWindow_priceOn"
                  : "modalWindow_priceOff"
              }
            >
              50$
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
