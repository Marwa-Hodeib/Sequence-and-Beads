import React from "react";
import "./filter";
import "./filter.css";
import {
  Dropdown,
  DropdownButton,
  FormControl,
  Button,
  InputGroup
} from "react-bootstrap";

 class searchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      collection:[],
      category:[],
    };
  }
 

   componentDidMount(){
     this.setState({ collection:this.props.collection, category:this.props.category?this.props.category:[] });
  }

  render() {
    return (
      <div className="filter">
          <InputGroup class="filter_inputGroop" style={{ width: "500px" }}>
          <FormControl
            class="filter_inputText"
            placeholder="type to Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            variant="outline-secondary"
          /> 

            <DropdownButton
            as={InputGroup.Append}
            variant="outline-secondary"
            title="Collection"
            id="input-group-dropdown-2">
              {this.state.collection.map((image,index) => (
              <Dropdown.Item href="#">{image.collection_name}</Dropdown.Item>
              ))} 
          </DropdownButton>  
            <DropdownButton
            as={InputGroup.Append}
            variant="outline-secondary"
            title="Category"
            id="input-group-dropdown-2">
               {this.state.category.map((image,index) => (
              <Dropdown.Item href="#">{image.category_name}</Dropdown.Item>
              ))}
           </DropdownButton> 
           <InputGroup.Append>
          {/*   <Button variant="outline-secondary">Button</Button> */}
          </InputGroup.Append>
        </InputGroup>  
      </div>
    );
  }
}
export default searchBar;
