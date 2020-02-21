import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact_us /contact_us";
import Gallery from "./pages/gallery/gallery";


class App extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        collection:[],
        collectionID:[],
        product:[]
      };
    }

  getCollectionList = async () => {
    try {
      const response = await fetch("http://localhost:8080/collection");
      const result = await response.json();
      if (result.success) {
        this.setState({ collection: result.result, error: ""});
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };
  getCollectionFlag = async () => {
    try {
      const response = await fetch("http://localhost:8080/collection/flag/1");
      const result = await response.json();
      if (result.success) {
        this.setState({ collectionID: result.result, error: ""});
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

  async componentDidMount() {
    this.getCollectionList();
    this.getCollectionFlag();
    this.getproductList();
    
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
    <Route exact path="/"  component={() => <Home  collectionID={this.state.collectionID} collection={this.state.collection}  product={this.state.product} />}/>
              <Route path="/about"  component={About} />
              <Route path="/contact" component={Contact} />
              <Route  path="/gallery" component={() => <Gallery test={this.state.collection} />} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
