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
      category:[],
      title:""
    };
  }
  
   select_collection=(event) =>{
     event.preventDefault();
    this.setState({title:"blah"});
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
    event.preventDefault();
    this.setState({title:event.target.innerText})
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

 collection_name=()=>{
  let s=this.props.collection.filter(
    obj => obj.collection_id==this.props.collection_selected[0].collection_collection_id
  )
  return s[0].collection_name;
 }

 category_name=()=>{
  let s=this.props.category.filter(
    obj => obj.category_id==this.props.category_selected[0].category_category_id
  )
  return s[0].category_name;
 }

   componentDidMount() {
     this.setState({
      collection: this.props.collection,
      category: this.props.category ? this.props.category : [],
      product:this.props.product,
      title:"collection"
    });
  }
  handleEnter(e){
    if(e.key=="Enter"){
    console.log("eghjbj")
    }
  }

  render() {
    return (
      <div className="filter">
        <InputGroup class="filter_inputGroop" style={{ width: "500px" }} onKeyPressCapture={e=>this.handleEnter(e)}>
          <FormControl
            class="filter_inputText"
            placeholder="type to Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            variant="outline-secondary"
          />
           {/* <Button variant="outline-secondary">Search</Button>  */}
          <DropdownButton
            as={InputGroup.Append}
            variant="outline-secondary"
            title={this.props.collection_selected.length==0?"Collection":this.collection_name()}
            id="input-group-dropdown-2"
          > 
            <Dropdown.Item href="#" onClick={(e)=>this.select_collection(e)} value="AllCollection"> All Collection</Dropdown.Item>
            {this.state.collection.map((image, index) => (
              <Dropdown.Item href="#" onClick={this.select_collection} value={image}>{image.collection_name}</Dropdown.Item>
            ))}
          </DropdownButton>
          <DropdownButton
            as={InputGroup.Append}
            variant="outline-secondary"
            title={this.props.category_selected.length==0?"Category":this.category_name()}
            id="input-group-dropdown-2"
          >
            <Dropdown.Item href="#" onClick={this.select_category} value="AllCategory"> All Category</Dropdown.Item>
            {this.state.category.map((image, index) => (
              <Dropdown.Item href="#" onClick={this.select_category} value={image}>{image.category_name}</Dropdown.Item>
            ))}
          </DropdownButton>
          <InputGroup.Append>
              
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}
export default searchBar;
