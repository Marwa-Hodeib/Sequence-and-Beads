import React from "react";
import image1 from "./img/cat-cloning_resize_md.jpg";
import image2 from "./img/220px-White_Persian_Cat.jpg";
import image3 from "./img/img1.jpg";
import "/home/zeinab/.local/share/Trash/files/Sequins-and-Beads-new-/front/src/components/modalWindow/modalWindow.css";
import { Button, InputGroup, FormControl } from "react-bootstrap";
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
              <td>
                {" "}
                <FormControl
                  style={{ width: "120px" }}
                  class="filter_inputText"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  variant="outline-secondary"
                />
              </td>
            </tr>
            <tr>
              <th>Description: </th>
              <td>
                {" "}
                <FormControl
                  class="filter_inputText"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  variant="outline-secondary"
                />
              </td>
            </tr>
            <tr>
              <th>Quantity: </th>
              <td>
                {" "}
                <FormControl
                  class="filter_inputText"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  variant="outline-secondary"
                />
              </td>
            </tr>
            <tr>
              <th>Category: </th>
              <td>
                {" "}
                <FormControl
                  class="filter_inputText"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  variant="outline-secondary"
                />
              </td>
            </tr>
            <tr>
              <th>Collection: </th>
              <td>
                {" "}
                <FormControl
                  class="filter_inputText"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  variant="outline-secondary"
                />
              </td>
            </tr>
            <tr>
              <th>Price: </th>
              <td>
                {" "}
                <FormControl
                  class="filter_inputText"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  variant="outline-secondary"
                />
              </td>
            </tr>
          </table>
          <InputGroup.Append class="modalWindow_showPrice"></InputGroup.Append>
          <InputGroup.Append class="modalWindow_purshase">
            <Button class="modalWindow_purshase" variant="primary">
              <strong>Save</strong>
            </Button>
            <Button
              class="modalWindow_purshase"
              variant="danger"
              style={{ marginLeft: "10px" }}
            >
              <strong>Delete</strong>
            </Button>
          </InputGroup.Append>
        </div>
      </div>
    );
  }
}
export default modalWindow;
