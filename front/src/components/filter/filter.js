import React from "react";
import "./filter";
import {
  Dropdown,
  DropdownButton,
  FormControl,
  Button,
  InputGroup
} from "react-bootstrap";

export class searchBar extends React.Component {
  state = {};

  render() {
    return (
      <div className="filter">
        <InputGroup class="filter_inputGroop" style={{ width: "500px" }}>
          <FormControl
            placeholder="type to Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            variant="outline-success"
          />

          <DropdownButton
            as={InputGroup.Append}
            variant="outline-success"
            title="Collection"
            id="input-group-dropdown-2"
          >
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Separated link</Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            as={InputGroup.Append}
            variant="outline-success"
            title="Category"
            id="input-group-dropdown-2"
          >
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Separated link</Dropdown.Item>
          </DropdownButton>
          <InputGroup.Append>
            <Button variant="outline-success">Button</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}
export default searchBar;
