import React from "react";
import "./modalWindow.css";
import image from "./img/img1.jpg";
import { Button, InputGroup } from "react-bootstrap";
export class modalWindow extends React.Component {
  state = {};
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
              <td>Name: </td>
              <td>item1</td>
            </tr>
            <tr>
              <td>Description: </td>
              <td>good....</td>
            </tr>
            <tr>
              <td>Price: </td>
              <td>12$</td>
            </tr>
            <tr>
              <td>Quantity: </td>
              <td>12</td>
            </tr>
            <tr>
              <td>Category: </td>
              <td>aaa</td>
            </tr>
            <tr>
              <td>Collection: </td>
              <td>bbb</td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </table>
          <InputGroup.Append class="modalWindow_showPrice">
            <Button variant="outline-success">Show Price</Button>
          </InputGroup.Append>

          <p class="modalWindow_price">50$</p>
          <InputGroup.Append class="modalWindow_purshase">
            <Button class="modalWindow_purshase" variant="outline-success">
              Purshase
            </Button>
          </InputGroup.Append>
        </div>
      </div>
    );
  }
}
export default modalWindow;
