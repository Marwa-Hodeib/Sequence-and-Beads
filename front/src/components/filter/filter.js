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
      product:[],
      collection:[],
      category:[]
    };
  }


   select_collection=(event) =>{
    if(event.target.innerText=="All Collection"){
      this.props.handle_collection_noFiltered();
    }
    else{
      let coll_id=this.props.collection.filter(
        obj => obj.collection_name==event.target.innerText
      )
      let product=this.props.initialproduct.filter(
        obj => obj.collection_collection_id==coll_id[0].collection_id
        )
        this.props.handle_collection(product);
    }
 }

  select_category=(event) =>{
    if(event.target.innerText=="All Category"){
       this.props.handle_category_noFiltered();
    }
    else{
    let coll_id=this.props.category.filter(
      obj => obj.category_name==event.target.innerText
    )
    let product=this.props.initialproduct.filter(
      obj => obj.category_category_id==coll_id[0].category_id
      )
      this.props.handle_category(product);
    }
 } 

  async componentDidMount() {
    await this.setState({
      collection: this.props.collection,
      category: this.props.category ? this.props.category : [],
      product:this.props.product
    });
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
            id="input-group-dropdown-2"
          > 
            <Dropdown.Item href="#" onClick={this.select_collection} value="AllCollection"> All Collection</Dropdown.Item>
            {this.state.collection.map((image, index) => (
              <Dropdown.Item href="#" onClick={this.select_collection} value={image}>{image.collection_name}</Dropdown.Item>
            ))}
          </DropdownButton>
          <DropdownButton
            as={InputGroup.Append}
            variant="outline-secondary"
            title="Category"
            id="input-group-dropdown-2"
          >
            <Dropdown.Item href="#" onClick={this.select_category} value="AllCategory"> All Category</Dropdown.Item>
            {this.state.category.map((image, index) => (
              <Dropdown.Item href="#" onClick={this.select_category} value={image}>{image.category_name}</Dropdown.Item>
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
