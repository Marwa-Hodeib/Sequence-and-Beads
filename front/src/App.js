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
      collection: [],
      product: [],
      image: []
    };
  }

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

  async componentDidMount() {
    await this.getCollectionList();
    await this.getproductList();
    await this.getimage();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
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
              <Route path="/contact" component={Contact} />
              <Route
                path="/gallery"
                component={() => (
                  <Gallery
                    product={this.state.product}
                    image={this.state.image}
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
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
