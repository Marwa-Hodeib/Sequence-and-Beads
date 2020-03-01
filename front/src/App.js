import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact_us /contact_us";
import Gallery from "./pages/gallery/gallery";
import EditProduct from "./pages/admin//editProduct";

class App extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        collection:[],
        product:[],
        image:[],
        order:[],
        product_id_purchase:0,
        collection_selected:""
      };
    }
/* 
In the state we create for each table fetched from the database a state element in order to save the fetched data in it and passed to other pages.

Product_id_purchase is created in order to save it is value once the user click on the purchase button in the modal window component in the gallery page and passed it to the contact us page and then to the form component.

Collection_selected is created in order to save the value that is related to the collection component in the home page, and once the user press on one of the images, he/she will be redirected to the gallery page with a filter applied, so this value is passed to the filter component in order to control the showed items in the gallery pages.
*/

/*
The following function are used to fetch the required data from the data base
*/
  getCollectionList = async () => {
    try {
      const response = await fetch("http://localhost:8080/collection");
      const result = await response.json();
      if (result.success) {
        this.setState({ collection: result.result, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };
  getproductList = async () => {
    try {
      const response = await fetch("http://localhost:8080/product");
      const result = await response.json();
      if (result.success) {
        this.setState({ product: result.result, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };
  getCategoryList = async () => {
    try {
      const response = await fetch("http://localhost:8080/category");
      const result = await response.json();
      if (result.success) {
        this.setState({ category: result.result, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };
  getimage = async () => {
    try {
      const response = await fetch("http://localhost:8080/image");
      const result = await response.json();
      if (result.success) {
        this.setState({ image: result.result, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };
  getOrder = async () => {
    try {
      const response = await fetch("http://localhost:8080/order");
      const result = await response.json();
      if (result.success) {
        this.setState({ order: result.result, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };

  /*
  Purchase function is used to pass the product_id of the item where the user clicked on the purchase button in order to purchase it.
  This function is used to passing value from the modal window component to its parent the card component to the gallery page to the app.js in order to be passed to the contact us page and then to the form component  
  */ 
  purchase= (e)=>{
      this.setState({product_id_purchase:e});
  }

  handle= (e)=>{
    console.log("app",e)
    this.setState({collection_selected:e});
}


  async componentDidMount() {
    await this.getCollectionList();
    await this.getproductList();
    await this.getimage();
    await this.getCategoryList();
    await this.getOrder();
  }

  

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              {/* */}
              <Route
                exact
                path="/"
                component={() => (
                  <Home
                    collection={this.state.collection.filter(
                      obj => obj.collection_flag
                    )}
                    product={this.state.product}
                    image={this.state.image}
                  />
                )}
              />
              <Route path="/about" component={About} />

              {/*For the Contact page we are passing 2 props. The product_id which is detected by the purchase funtion and stored in the state as product_id_purchase in order to display a form component with a subject selected purchase without any other option 
              and the product_price which is a filter of the product table based on the product_id detected by the purchase function and then passing its value to the contact us and then to the state to be multiplied by the quantity that the user had selected and on submit the value of the amount is stored in the database in the order table */}
              <Route path="/contact" 
               component={() => (
                <Contact
                  product_id={this.state.product_id_purchase}
                  product_price={this.state.product.filter(
                    obj => obj.product_id==this.state.product_id_purchase
                  )}
                />
              )}
            />
              
              <Route
                path="/admin/"
                component={() => (
                  <EditProduct
                    product={this.state.product}
                    image={this.state.image}
                  />
                )}
              />
              {/*For the gallery we are passing as props that contains the product, image, collection and category tables.
              in addition we are passing purchase which detect the product id of the item where the event of clicking on the purchase button occurs
              handle is a function that passes the collection selected at the home page in order to pass it to the gallery filter component to be able to see the items filtered*/}
              <Route
                path="/gallery"
                component={() => (
                  <Gallery
                    product={this.state.product}
                    image={this.state.image}
                    collection={this.state.collection}
                    category={this.state.category}
                    purchase = {this.purchase}
                    handle={this.handle}
                    
                  />
                )}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
